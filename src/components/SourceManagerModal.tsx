import React, { useState } from 'react';
import type { MonitoredSource } from '../types';
import { X, Globe, ShieldCheck, Clock, Plus, CheckCircle2 } from 'lucide-react';

interface SourceManagerModalProps {
  sources: MonitoredSource[];
  onClose: () => void;
}

export const SourceManagerModal: React.FC<SourceManagerModalProps> = ({ sources, onClose }) => {
  const [sourceList, setSourceList] = useState<MonitoredSource[]>(sources);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory] = useState<'Government & Policy' | 'Industry Media' | 'Market Regulator'>('Industry Media');

  const handleAddSource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl || !newName) return;

    const newSource: MonitoredSource = {
      id: `src-${Date.now()}`,
      name: newName,
      url: newUrl,
      category: newCategory,
      checkIntervalMinutes: 20,
      lastScraped: '刚刚',
      status: 'active',
      reliabilityScore: 95,
      articlesFoundToday: 0
    };

    setSourceList([newSource, ...sourceList]);
    setNewUrl('');
    setNewName('');
    setShowAddForm(false);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative border-slate-700">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">可靠信息源监控与抓取配置</h2>
            <p className="text-xs text-slate-400">系统已接入 8 个澳洲国家级/地方政府、监管机构与权威媒体源</p>
          </div>
        </div>

        {/* Action Header */}
        <div className="flex items-center justify-between mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-300">
            活跃抓取进程: <span className="text-emerald-400">{sourceList.filter(s => s.status === 'active').length} / {sourceList.length} 正常运行</span>
          </span>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            添加自定义监控网页
          </button>
        </div>

        {/* Add New Source Form */}
        {showAddForm && (
          <form onSubmit={handleAddSource} className="bg-slate-900/90 border border-sky-500/30 p-4 rounded-xl mb-6 space-y-3">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider">添加自定义抓取网页</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">网页/RSS 机构名称</label>
                <input
                  type="text"
                  placeholder="例如: QLD Dept of Energy"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  required
                />
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">网页 URL / Feed 地址</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newUrl}
                  onChange={e => setNewUrl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg"
              >
                确认添加并初始化爬虫
              </button>
            </div>
          </form>
        )}

        {/* Source Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/40">
                <th className="p-3">信息源名称</th>
                <th className="p-3">类别</th>
                <th className="p-3">轮询间隔</th>
                <th className="p-3">上次抓取时间</th>
                <th className="p-3">可靠度得分</th>
                <th className="p-3 text-right">今日捕获</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {sourceList.map(src => (
                <tr key={src.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-semibold text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div>{src.name}</div>
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-sky-400 hover:underline">
                          {src.url}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {src.category}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    每 {src.checkIntervalMinutes} 分钟
                  </td>
                  <td className="p-3 text-slate-300">{src.lastScraped}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1 text-emerald-400 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {src.reliabilityScore}%
                    </div>
                  </td>
                  <td className="p-3 text-right font-bold text-sky-400">
                    {src.articlesFoundToday} 篇
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
