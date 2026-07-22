import React, { useState } from 'react';
import type { WeeklyReport, IntelligenceItem } from '../types';
import { X, Copy, Check, Printer, Sparkles, Calendar, User, ShieldCheck, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReportViewProps {
  report: WeeklyReport;
  allIntelligenceItems: IntelligenceItem[];
  onClose: () => void;
}

export const ReportView: React.FC<ReportViewProps> = ({ report, allIntelligenceItems, onClose }) => {
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  // Filter the featured intelligence items referenced in topItemIds
  const featuredItems = allIntelligenceItems.filter(item => 
    report.topItemIds.includes(item.id) || item.rating >= 4
  ).slice(0, 5);

  const generateMarkdownContent = () => {
    let md = `# ${report.title}\n\n`;
    md += `**发布时间**: ${report.generatedDate} | **评估周期**: ${report.period}\n`;
    md += `**报告生成机制**: Antigravity Australia Energy Intelligence System\n\n`;
    md += `---\n\n`;
    md += `## 💡 高管摘要 (Executive Summary)\n${report.executiveSummary}\n\n`;
    md += `## 📡 政策与监管雷达 (Policy Radar)\n${report.policyRadarSummary}\n\n`;
    md += `## 🔥 重点高级别情报拆解 (Top Strategic Intelligence)\n\n`;

    featuredItems.forEach((item, index) => {
      md += `### ${index + 1}. 【Grade ${item.rating}/5】${item.title}\n`;
      md += `- **来源**: ${item.source} (${item.publishDate})\n`;
      md += `- **领域**: ${item.sector} | 地区: ${item.region}\n`;
      md += `- **核心摘要**: ${item.summary}\n`;
      md += `- **评级依据**: ${item.ratingReason}\n`;
      md += `- **决策启示**:\n`;
      item.keyInsights.forEach(insight => {
        md += `  * ${insight}\n`;
      });
      md += `- **原文链接**: [点击查看](${item.sourceUrl})\n\n`;
    });

    md += `## 🎯 建议决策行动项 (Action Items)\n`;
    report.keyTakeaways.forEach((t, i) => {
      md += `${i + 1}. ${t}\n`;
    });

    return md;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownContent();
    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel w-full max-w-5xl max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative border-sky-500/35 bg-slate-950/95 text-slate-100 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-white/10 transition-colors print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Print & Action Controls Banner (Hidden on Print) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6 print:hidden">
          <div className="flex items-center gap-2.5">
            <span className={`px-3.5 py-1 rounded-full text-xs font-black tracking-wide flex items-center gap-1.5 ${
              report.type === 'Monday_Strategic' 
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              {report.type === 'Monday_Strategic' ? '📅 周一战略简报 Page' : '⚡ 周三运营速报 Page'}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {report.generatedDate}
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-500/40 rounded-xl transition-all shadow-sm"
            >
              {copiedMarkdown ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedMarkdown ? 'Markdown 已复制!' : '复制 Markdown 简报'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>导出 / 打印 PDF</span>
            </button>
          </div>
        </div>

        {/* --- PAGE REPORT CONTENT AREA --- */}
        <div className="space-y-8 print:text-black">
          
          {/* Main Title Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-sky-500/30 p-8 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Australia Energy Intelligence Monthly & Weekly Briefing
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3.5 leading-snug">
                {report.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  分析团队: {report.author}
                </span>
                <span>•</span>
                <span>统计周期: {report.period}</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  全澳电网 (NEM & WEM) 覆盖
                </span>
              </div>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
              <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-extrabold text-xs flex items-center justify-center border border-sky-500/30 font-mono">
                01
              </span>
              <h2 className="text-lg font-bold text-white">高管摘要 (Executive Summary)</h2>
            </div>
            <div className="bg-slate-900/80 border border-white/10 p-5 rounded-2xl text-sm leading-relaxed text-slate-200 shadow-inner">
              {report.executiveSummary}
            </div>
          </div>

          {/* Section 2: Policy Radar */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-xs flex items-center justify-center border border-amber-500/30 font-mono">
                02
              </span>
              <h2 className="text-lg font-bold text-white">政策与监管雷达 (Policy & Regulatory Radar)</h2>
            </div>
            <div className="bg-slate-900/80 border border-white/10 p-5 rounded-2xl text-sm leading-relaxed text-slate-200 whitespace-pre-line">
              {report.policyRadarSummary}
            </div>
          </div>

          {/* Section 3: Featured Intelligence */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold text-xs flex items-center justify-center border border-emerald-500/30 font-mono">
                03
              </span>
              <h2 className="text-lg font-bold text-white">本期精选重磅情报拆解 (Top Tier Intelligence)</h2>
            </div>

            <div className="space-y-4">
              {featuredItems.map((item, idx) => (
                <div key={item.id} className="bg-slate-900/70 border border-white/10 hover:border-sky-500/40 p-5 rounded-2xl transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-extrabold badge-rating-${item.rating}`}>
                        ⭐ Rating {item.rating} / 5
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-slate-950 text-sky-300 border border-white/10">
                        {item.sector}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">📍 {item.region}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{item.publishDate}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {idx + 1}. {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="bg-slate-950/80 p-3.5 rounded-xl border-l-2 border-sky-400 text-xs text-slate-300 space-y-1.5">
                    <div className="font-bold text-sky-300 mb-1 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      启示与决策判断：
                    </div>
                    {item.keyInsights.map((ins, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px]">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{ins}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Action Points */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
              <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-extrabold text-xs flex items-center justify-center border border-purple-500/30 font-mono">
                04
              </span>
              <h2 className="text-lg font-bold text-white">建议团队决策行动项 (Action Items)</h2>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 p-6 rounded-2xl space-y-2.5">
              {report.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-200">
                  <span className="font-mono font-bold text-purple-400">{idx + 1}.</span>
                  <span className="leading-relaxed">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
