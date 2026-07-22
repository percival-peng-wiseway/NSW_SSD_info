import React, { useState } from 'react';
import type { IntelligenceItem } from '../types';
import { 
  Sun, Battery, Wind, Server, ScrollText, 
  ExternalLink, Bookmark, Share2, 
  ChevronDown, ChevronUp, CheckCircle2, Flame, Lightbulb
} from 'lucide-react';

interface IntelligenceCardProps {
  item: IntelligenceItem;
  onToggleSave: (id: string) => void;
  onShare?: (item: IntelligenceItem) => void;
}

export const IntelligenceCard: React.FC<IntelligenceCardProps> = ({
  item,
  onToggleSave,
  onShare
}) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sector Icon Selector
  const renderSectorIcon = () => {
    switch (item.sector) {
      case 'Solar':
        return <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />;
      case 'BESS':
        return <Battery className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-sky-400" />;
      case 'Data Center':
        return <Server className="w-4 h-4 text-purple-400" />;
      default:
        return <ScrollText className="w-4 h-4 text-blue-400" />;
    }
  };

  const handleCopy = () => {
    if (onShare) {
      onShare(item);
    } else {
      const content = `【${item.sector} - Rating ${item.rating}/5】${item.title}\n来源: ${item.source}\n摘要: ${item.summary}\n链接: ${item.sourceUrl}`;
      navigator.clipboard.writeText(content);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`glass-panel p-6 relative overflow-hidden transition-all duration-300 ${
      item.rating === 5 ? 'glow-card-rose bg-slate-900/90' : item.rating === 4 ? 'glow-card-amber' : ''
    }`}>
      
      {/* Top Priority Ribbon for Rating 5 */}
      {item.rating === 5 && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-600 via-rose-500 to-rose-600 text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-bl-2xl shadow-lg flex items-center gap-1.5 tracking-wider border-l border-b border-rose-400/40">
          <Flame className="w-3.5 h-3.5 fill-white animate-pulse" />
          Rating 5 特级情报 (已即时推送)
        </div>
      )}

      {/* Header Badges Info */}
      <div className="flex flex-wrap items-center gap-2 mb-3.5 pr-28">
        
        {/* Rating Badge */}
        <span className={`px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1 tracking-wide badge-rating-${item.rating}`}>
          ⭐ Rating {item.rating} / 5
        </span>

        {/* Sector Badge */}
        <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-slate-900/90 text-slate-100 border border-white/10 shadow-sm">
          {renderSectorIcon()}
          <span>{item.sector}</span>
        </span>

        {/* Region Tag */}
        <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-sky-500/10 text-sky-300 border border-sky-500/25">
          📍 {item.region}
        </span>

        {/* Source & Date */}
        <span className="text-xs text-slate-400 font-mono ml-auto flex items-center gap-1">
          {item.source} • {item.publishDate}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2.5 group">
        <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 hover:text-sky-300 transition-colors">
          <span>{item.title}</span>
          <ExternalLink className="w-4 h-4 text-sky-400 opacity-60 group-hover:opacity-100 shrink-0 mt-1 transition-opacity" />
        </a>
      </h3>

      {/* Executive Summary */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
        {item.summary}
      </p>

      {/* AI Rating Reason Banner */}
      <div className="bg-slate-950/70 border-l-2 border-amber-400/90 p-3 rounded-r-xl mb-4 backdrop-blur-md">
        <p className="text-[11px] text-amber-200/90 flex items-start gap-2">
          <span className="font-bold text-amber-400 shrink-0 flex items-center gap-1">
            🤖 AI 评级依据:
          </span>
          <span className="leading-normal">{item.ratingReason}</span>
        </p>
      </div>

      {/* Key Insights (Expandable) */}
      {expanded && item.keyInsights && item.keyInsights.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn space-y-2">
          <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            团队决策启示 (Key Takeaways)
          </h4>
          <ul className="space-y-1.5 bg-slate-950/40 p-3 rounded-xl border border-white/5">
            {item.keyInsights.map((insight, idx) => (
              <li key={idx} className="text-xs text-slate-200 flex items-start gap-2 leading-relaxed">
                <span className="text-sky-400 font-extrabold">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Controls */}
      <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/10 text-xs">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 max-w-[65%]">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill">
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 px-3 py-1.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span className="font-semibold">{expanded ? '收起启示' : '决策启示'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="p-2 text-slate-300 hover:text-sky-300 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all"
            title="一键分享或复制文本摘要"
          >
            {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onToggleSave(item.id)}
            className={`p-2 rounded-xl border transition-all ${
              item.isSaved 
                ? 'text-amber-400 bg-amber-500/15 border-amber-500/40 shadow-sm' 
                : 'text-slate-400 hover:text-amber-300 bg-slate-900/80 hover:bg-slate-800 border-white/10'
            }`}
            title={item.isSaved ? '已收藏' : '收藏情报'}
          >
            <Bookmark className={`w-4 h-4 ${item.isSaved ? 'fill-amber-400' : ''}`} />
          </button>

        </div>

      </div>

    </div>
  );
};
