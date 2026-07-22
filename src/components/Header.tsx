import React from 'react';
import { Zap, RefreshCw, Bell, Globe, FileText, Bookmark, Database, ChevronDown, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: 'feed' | 'saved' | 'reports';
  setActiveTab: (tab: 'feed' | 'saved' | 'reports') => void;
  onTriggerScrape: () => void;
  onOpenSourceManager: () => void;
  onGenerateReport: (type: 'Monday_Strategic' | 'Wednesday_Operational') => void;
  isScraping: boolean;
  savedCount: number;
  unreadPushCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onTriggerScrape,
  onOpenSourceManager,
  onGenerateReport,
  isScraping,
  savedCount,
  unreadPushCount
}) => {
  return (
    <header className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Branding */}
        <div className="flex items-center space-x-3.5">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-emerald-400 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center border border-white/10">
              <Zap className="w-6 h-6 text-sky-400 fill-sky-400/20 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                AUS CleanEnergy & DataCenter Radar
              </h1>
              <span className="text-[10px] uppercase font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/25 px-2 py-0.5 rounded-full">
                AU Pro v2.6
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>澳大利亚新能源 (Solar/BESS/Wind) & 数据中心情报决策系统</span>
            </p>
          </div>
        </div>

        {/* Center Nav Tabs */}
        <nav className="hidden lg:flex items-center bg-slate-950/80 p-1.5 rounded-2xl border border-white/10 shadow-inner">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'feed'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            实时情报大厅
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'saved'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            重点收藏
            {savedCount > 0 && (
              <span className="ml-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded-full text-[10px] font-mono">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
              activeTab === 'reports'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            周一/周三简报 Page
          </button>
        </nav>

        {/* Right Actions Toolbar */}
        <div className="flex items-center space-x-3">
          
          {/* Source Manager Button */}
          <button
            onClick={onOpenSourceManager}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-white/10 rounded-xl transition-all shadow-sm"
            title="查看与管理监控的澳洲可靠网页源"
          >
            <Database className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">8 个核心监控源</span>
          </button>

          {/* Trigger Live Scrape Button */}
          <button
            onClick={onTriggerScrape}
            disabled={isScraping}
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-lg shadow-emerald-500/25 border border-emerald-300/50 transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScraping ? 'animate-spin' : ''}`} />
            <span>{isScraping ? '抓取中...' : '即刻网页抓取'}</span>
          </button>

          {/* Quick Generate Weekly Page Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 border border-sky-500/30 rounded-xl transition-all">
              <Sparkles className="w-3.5 h-3.5" />
              <span>生成简报 Page</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <div className="absolute right-0 mt-2 w-56 bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all p-2 z-50">
              <button
                onClick={() => onGenerateReport('Monday_Strategic')}
                className="w-full text-left px-3 py-2.5 text-xs text-slate-200 hover:bg-slate-900/90 rounded-xl transition-colors flex items-center justify-between group/item"
              >
                <div>
                  <div className="font-bold text-white group-hover/item:text-sky-300">📅 周一战略简报</div>
                  <div className="text-[10px] text-slate-400">大盘/政策/投资分析</div>
                </div>
                <span className="text-[10px] text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-500/30">周一</span>
              </button>

              <button
                onClick={() => onGenerateReport('Wednesday_Operational')}
                className="w-full text-left px-3 py-2.5 text-xs text-slate-200 hover:bg-slate-900/90 rounded-xl transition-colors flex items-center justify-between mt-1 group/item"
              >
                <div>
                  <div className="font-bold text-white group-hover/item:text-emerald-300">⚡ 周三运营速报</div>
                  <div className="text-[10px] text-slate-400">中周配网/储能/PPA</div>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">周三</span>
              </button>
            </div>
          </div>

          {/* Urgent Notification Bell */}
          <div className="relative">
            <button className="p-2.5 text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all">
              <Bell className="w-4 h-4 text-amber-400" />
            </button>
            {unreadPushCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center animate-bounce shadow-md shadow-rose-500/40">
                {unreadPushCount}
              </span>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
