/**
 * Dual-language dictionary mapping utility for SSD project roles and consultant domains.
 * Guarantees zero leftover Chinese characters in English view (lang === 'en').
 */

export function translateRole(role: string, lang: 'zh' | 'en' = 'zh'): string {
  if (!role) return lang === 'zh' ? '参建顾问' : 'Consultant Firm';

  const rawText = role.trim();

  if (lang === 'zh') {
    const r = rawText.toLowerCase();
    if (r.includes('town') || r.includes('planning') || r.includes('planner')) return '城市规划与EIS报告';
    if (r.includes('architect') || r.includes('architectural')) return '建筑设计';
    if (r.includes('traffic') || r.includes('transport')) return '交通工程与路网';
    if (r.includes('acoustic') || r.includes('noise')) return '声学与降噪';
    if (r.includes('civil') || r.includes('structural')) return '土木与结构工程';
    if (r.includes('water') || r.includes('stormwater') || r.includes('hydrology')) return '水务与雨水处理';
    if (r.includes('aboriginal') || r.includes('achar')) return '原住民文化遗产';
    if (r.includes('heritage')) return '历史遗产保护';
    if (r.includes('ecology') || r.includes('biodiversity')) return '生态与生物多样性';
    if (r.includes('bushfire') || r.includes('fire')) return '丛林火灾与消防';
    if (r.includes('economic') || r.includes('sia') || r.includes('social')) return '社会与经济评估';
    if (r.includes('contamination') || r.includes('waste')) return '污染与废弃物处理';
    if (r.includes('qs') || r.includes('cost') || r.includes('quantity')) return '造价与工费评估';
    if (r.includes('contractor')) return '施工总包';
    if (r.includes('landscape')) return '景观建筑设计';
    if (r.includes('access')) return '无障碍设施';
    if (r.includes('state authority')) return '主导审批机构';
    return rawText;
  }

  // English Mode: Multi-segment tokenization & Deep Sub-phrase Replacement
  // Split complex mixed strings like "Accessibility & DDA, BCA, 通达能力 + BCA 能力声明" by delimiters
  const subSegments = rawText.split(/[,/、+]/).map(s => s.trim()).filter(Boolean);

  const translatedSegments = subSegments.map(segment => translateSingleSegmentToEnglish(segment));

  // Remove duplicates and join cleanly
  const uniqueTranslated = Array.from(new Set(translatedSegments));
  return uniqueTranslated.join(', ');
}

function translateSingleSegmentToEnglish(text: string): string {
  const t = text.trim();
  const lower = t.toLowerCase();

  // 1. Direct Exact & Phrase Matches
  if (lower === '测量' || lower === '测绘' || lower === '量地') return 'Quantity Surveying & Land Survey';
  if (lower.includes('通达能力') || lower.includes('bca') || lower.includes('能力声明') || lower.includes('无障碍')) return 'Building Code & Accessibility (BCA/DDA)';
  if (lower.includes('视觉影响') || lower.includes('视觉') || lower === 'via') return 'Visual Impact Assessment (VIA)';
  if (lower.includes('温室气体') || lower.includes('人类健康') || lower.includes('esd') || lower.includes('健康评估')) return 'ESD, Greenhouse Gas & Human Health';
  if (lower.includes('风力') || lower.includes('微气候') || lower.includes('风环境')) return 'Wind & Microclimate Assessment';
  if (lower.includes('日照') || lower.includes('阴影')) return 'Sunlight & Shadow Analysis';
  if (lower.includes('危险品') || lower.includes('危害') || lower.includes('sepp 33')) return 'Preliminary Hazard Analysis (SEPP 33)';
  if (lower.includes('电磁场') || lower.includes('emf')) return 'Electromagnetic Fields (EMF)';
  if (lower.includes('航空') || lower.includes('空域')) return 'Aviation Clearance';
  if (lower.includes('废弃物') || lower.includes('垃圾')) return 'Waste Management Plan';
  if (lower.includes('污染') || lower.includes('土壤') || lower.includes('地下水')) return 'Contamination & Geotechnical';

  // 2. High-Frequency Keyword Category Mapping
  if (lower.includes('噪声') || lower.includes('声学') || lower.includes('acoustic') || lower.includes('noise')) return 'Acoustic & Noise Assessment';
  if (lower.includes('交通') || lower.includes('路网') || lower.includes('车辆') || lower.includes('traffic') || lower.includes('transport')) return 'Traffic & Transport Planning';
  if (lower.includes('总规划') || lower.includes('规划') || lower.includes('eis') || lower.includes('town planner')) return 'Town Planner & EIS Lead';
  if (lower.includes('建筑') || lower.includes('设计') || lower.includes('architectural')) return 'Architectural Design';
  if (lower.includes('原住民') || lower.includes('文化遗产') || lower.includes('aboriginal') || lower.includes('achar')) return 'Aboriginal Cultural Heritage (ACHAR)';
  if (lower.includes('历史遗产') || lower.includes('heritage')) return 'Historic Heritage Assessment';
  if (lower.includes('生物多样性') || lower.includes('生态') || lower.includes('bdar') || lower.includes('ecology')) return 'Ecology & Biodiversity (BDAR)';
  if (lower.includes('水文') || lower.includes('雨水') || lower.includes('水务') || lower.includes('供水') || lower.includes('osd') || lower.includes('water')) return 'Hydrology, Water & Stormwater';
  if (lower.includes('土木') || lower.includes('结构') || lower.includes('地质') || lower.includes('岩土') || lower.includes('civil') || lower.includes('structural')) return 'Civil & Structural Engineering';
  if (lower.includes('经济') || lower.includes('社会') || lower.includes('sia') || lower.includes('economic') || lower.includes('social')) return 'Social & Economic Impact (SIA)';
  if (lower.includes('丛林火灾') || lower.includes('消防') || lower.includes('火灾') || lower.includes('bushfire') || lower.includes('fire')) return 'Bushfire Protection & Fire Safety';
  if (lower.includes('施工') || lower.includes('总包') || lower.includes('contractor') || lower.includes('builder')) return 'Main Contractor / Builder';
  if (lower.includes('工费') || lower.includes('造价') || lower.includes('成本') || lower.includes('qs')) return 'Quantity Surveyor & Costing';
  if (lower.includes('景观') || lower.includes('绿化') || lower.includes('landscape')) return 'Landscape Architecture';
  if (lower.includes('审批') || lower.includes('政府') || lower.includes('state authority')) return 'State Authority Approval';

  // 3. Sub-string Regex Purge Safety Fallback for any leftover Chinese characters
  if (/[\u4e00-\u9fa5]/.test(t)) {
    return t
      .replace(/通达能力/g, 'Accessibility')
      .replace(/能力声明/g, 'Compliance Statement')
      .replace(/视觉影响评估/g, 'Visual Impact Assessment')
      .replace(/视觉影响/g, 'Visual Impact')
      .replace(/温室气体/g, 'Greenhouse Gas')
      .replace(/人类健康评估/g, 'Human Health Assessment')
      .replace(/健康评估/g, 'Health Assessment')
      .replace(/测量/g, 'Surveying')
      .replace(/评估/g, 'Assessment')
      .replace(/复核/g, 'Review')
      .replace(/与/g, ' & ')
      .replace(/及/g, ' & ')
      .replace(/主导/g, 'Lead')
      .replace(/声明/g, 'Statement')
      .replace(/[\u4e00-\u9fa5]+/g, 'Consulting Services'); // Ultimate safety catch for untranslated Chinese words
  }

  return t;
}

export function translateRoleShort(role: string, lang: 'zh' | 'en' = 'zh'): string {
  const full = translateRole(role, lang);
  if (lang === 'zh') {
    if (full.includes('规划')) return '规划';
    if (full.includes('建筑')) return '建筑';
    if (full.includes('交通')) return '交通';
    if (full.includes('声学')) return '声学';
    if (full.includes('土木')) return '土木';
    if (full.includes('水务')) return '水务';
    return full.slice(0, 4);
  } else {
    if (full.includes('Planner')) return 'Planning';
    if (full.includes('Architectural')) return 'Architecture';
    if (full.includes('Traffic')) return 'Traffic';
    if (full.includes('Acoustic')) return 'Acoustic';
    if (full.includes('Civil')) return 'Civil/Structural';
    if (full.includes('Hydrology') || full.includes('Water')) return 'Water/Stormwater';
    if (full.includes('Heritage')) return 'Heritage';
    if (full.includes('Ecology')) return 'Ecology';
    if (full.includes('Visual')) return 'Visual (VIA)';
    if (full.includes('Building Code') || full.includes('Accessibility')) return 'BCA/Access';
    if (full.includes('ESD')) return 'ESD & Health';
    if (full.includes('Surveying')) return 'Surveying';
    return full.split(' ')[0];
  }
}
