import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / 'processed_all_map.json'

ALIASES = {
    'NEXTDC': ['NEXTDC'],
    'Urbis': ['Urbis'],
    'HDR / Greenbox Architecture': ['HDR', 'Greenbox Architecture'],
    'Willowtree Planning': ['Willowtree Planning', 'Willow Tree Planning'],
    'Linesight': ['Linesight'],
    'Jacobs Engineering': ['Jacobs'],
    'Aurecon': ['Aurecon'],
    'Transport for NSW': ['Transport for NSW', 'TfNSW'],
    'Sydney Water': ['Sydney Water'],
    'NSW EPA': ['NSW EPA', 'Environment Protection Authority'],
    'SLR Consulting': ['SLR Consulting', 'SLR'],
    'Artefact Heritage': ['Artefact Heritage', 'Artefact'],
    'Eco Logical Australia': ['Eco Logical Australia', 'Eco Logical'],
    'Douglas Partners': ['Douglas Partners'],
    'TTW Engineering': ['TTW'],
    'Cundall': ['Cundall'],
    'Mecone': ['Mecone'],
    'Cumberland Ecology': ['Cumberland Ecology'],
    'Astrolabe Group': ['Astrolabe Group'],
    'Northrop': ['Northrop'],
    'SCP Consulting': ['SCP Consulting'],
    'EMKC Cubed': ['EMKC Cubed'],
}

def compact(value):
    return re.sub(r'\s+', ' ', value or '').strip()

def main():
    data = json.loads(DATA_FILE.read_text())
    results = []
    counts = {}
    for project, entries in data.items():
        for entry in entries:
            url = entry.get('downloadUrl', '')
            if not url.startswith('/'):
                continue
            pdf_path = ROOT / 'public' / url.lstrip('/')
            row = {'project': project, 'title': entry['title'], 'path': url, 'current': entry['author']}
            try:
                reader = PdfReader(str(pdf_path), strict=False)
                metadata = reader.metadata or {}
                page_text = reader.pages[0].extract_text() or '' if reader.pages else ''
                haystack = compact(' '.join([
                    str(metadata.get('/Author', '')),
                    str(metadata.get('/Title', '')),
                    page_text[:8000],
                ]))
                row['metadataAuthor'] = compact(str(metadata.get('/Author', '')))
                row['metadataTitle'] = compact(str(metadata.get('/Title', '')))
                matches = []
                for issuer, aliases in ALIASES.items():
                    if any(re.search(r'(?<![A-Za-z])' + re.escape(alias) + r'(?![A-Za-z])', haystack, re.I) for alias in aliases):
                        matches.append(issuer)
                row['candidates'] = matches
                if row['metadataAuthor']:
                    counts[row['metadataAuthor']] = counts.get(row['metadataAuthor'], 0) + 1
            except Exception as exc:
                row['error'] = type(exc).__name__
            results.append(row)

    output = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('/tmp/pdf-issuer-scan.json')
    output.write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n')
    readable = [row for row in results if 'error' not in row]
    conflicts = [row for row in readable if row.get('candidates') and row['current'] not in row['candidates']]
    print(json.dumps({
        'scanned': len(results),
        'readable': len(readable),
        'conflictsWithKnownIssuer': len(conflicts),
        'metadataAuthors': sorted(counts.items(), key=lambda pair: -pair[1])[:30],
        'output': str(output),
    }, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
