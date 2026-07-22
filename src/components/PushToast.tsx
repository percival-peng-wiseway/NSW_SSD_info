import React from 'react';
import type { IntelligenceItem } from '../types';
import { X, ArrowRight, Zap } from 'lucide-react';

interface PushToastProps {
  item: IntelligenceItem;
  onClose: () => void;
  onViewItem: (item: IntelligenceItem) => void;
}

export const PushToast: React.FC<PushToastProps> = ({ item, onClose, onViewItem }) => {
  return (
    <div className="fixed bottom-6 right-6 max-w-md w-full z-50 animate-slideUp">
      <div className="bg-slate-900/95 backdrop-blur-xl border-2 border-rose-500/80 p-5 rounded-2xl shadow-2xl shadow-rose-500/20 text-slate-100 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl -z-0 pointer-events-none"></div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-rose-500 text-slate-950 font-bold animate-pulse">
            <Zap className="w-4 h-4 fill-slate-950" />
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400">
            极高重要性情报 (Grade 5 实时推送)
          </span>
        </div>

        <h4 className="text-sm font-bold text-slate-100 leading-snug mb-1">
          {item.title}
        </h4>

        <p className="text-xs text-slate-300 line-clamp-2 mb-3">
          {item.summary}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
          <span className="text-[11px] text-slate-400">📍 {item.region} • {item.sector}</span>
          
          <button
            onClick={() => onViewItem(item)}
            className="flex items-center gap-1 font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>查看详情</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
