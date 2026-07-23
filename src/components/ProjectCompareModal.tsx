import React from 'react';
import type { MajorProject } from '../types';
import { X } from 'lucide-react';

interface Props {
  comparedProjects: MajorProject[];
  onClose: () => void;
  onRemoveProject: (projectId: string) => void;
  isDarkMode?: boolean;
  lang?: 'zh' | 'en';
}

export const ProjectCompareModal: React.FC<Props> = ({ 
  comparedProjects, 
  onClose, 
  onRemoveProject, 
  isDarkMode = false,
  lang = 'zh'
}) => {
  if (comparedProjects.length === 0) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto p-4 md:p-8 flex items-center justify-center ${
      isDarkMode ? 'bg-slate-950/80 backdrop-blur-md' : 'bg-slate-900/40 backdrop-blur-sm'
    }`}>
      <div className={`border rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden ${
        isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          isDarkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div>
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'zh' ? `重大项目多维横向对比分析 (${comparedProjects.length} 个项目)` : `SSD Projects Cross-Comparison (${comparedProjects.length} Projects)`}
            </h2>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {lang === 'zh' ? '比较不同项目的规划容量、开发主体、阶段与核心咨询团队' : 'Compare proposed capacity, applicant, stage, and consultant teams'}
            </p>
          </div>
          <button onClick={onClose} className={`p-2 rounded-xl transition-colors ${
            isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
          }`}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[700px]">
            {comparedProjects.map((p) => (
              <div key={p.id} className={`border rounded-xl p-5 relative space-y-4 ${
                isDarkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  onClick={() => onRemoveProject(p.id)}
                  className={`absolute top-3 right-3 p-1 hover:text-rose-500 ${
                    isDarkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                  title={lang === 'zh' ? '移除对比' : 'Remove'}
                >
                  <X className="w-4 h-4" />
                </button>

                <div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    isDarkMode ? 'bg-blue-950 text-blue-400 border-blue-800' : 'bg-blue-100 text-blue-800 border-blue-200'
                  }`}>
                    {p.applicationNo}
                  </span>
                  <h3 className={`text-base font-bold mt-2 leading-snug ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                </div>

                <div className={`space-y-2 text-xs border-t pt-3 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{lang === 'zh' ? '项目类型' : 'Sector'}</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">{p.sector}</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{lang === 'zh' ? '规划容量' : 'Capacity'}</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400">{p.capacityMW ? `${p.capacityMW} MW` : (lang === 'zh' ? '待定' : 'TBD')}</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{lang === 'zh' ? '申请开发商' : 'Applicant'}</span>
                    <span className={`font-semibold truncate max-w-[150px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{p.applicant}</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{lang === 'zh' ? '所属 LGA' : 'LGA Region'}</span>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{p.lga}</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
                    <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{lang === 'zh' ? '当前阶段' : 'Stage'}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{p.stage}</span>
                  </div>
                </div>

                <div className={`border-t pt-3 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`text-[11px] font-bold mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {lang === 'zh' ? '主要合作/咨询单位:' : 'Key Consultants:'}
                  </div>
                  <div className="space-y-1 text-xs">
                    {p.consultants.slice(0, 4).map((c, idx) => (
                      <div key={idx} className={`px-2 py-1 rounded flex justify-between ${
                        isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-white border border-slate-200 text-slate-800'
                      }`}>
                        <span className={isDarkMode ? 'text-slate-500' : 'text-slate-400'}>{c.role}:</span>
                        <span className="font-medium">{c.companyName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
