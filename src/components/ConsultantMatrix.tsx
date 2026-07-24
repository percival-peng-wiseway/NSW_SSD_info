import React, { useState } from 'react';
import type { MajorProject } from '../types';
import { Building2, Search, ArrowRight } from 'lucide-react';
import { translateRole } from '../utils/langUtils';

interface Props {
  projects: MajorProject[];
  onSelectProject: (project: MajorProject) => void;
  isDarkMode?: boolean;
  lang?: 'zh' | 'en';
}

export const ConsultantMatrix: React.FC<Props> = ({ 
  projects, 
  onSelectProject, 
  isDarkMode = false,
  lang = 'zh'
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Map out consultants and the projects they are involved in
  const consultantMap = new Map<string, { companyName: string; category: string; projects: MajorProject[]; roles: string[] }>();

  projects.forEach(proj => {
    proj.consultants.forEach(c => {
      if (!consultantMap.has(c.companyName)) {
        consultantMap.set(c.companyName, {
          companyName: c.companyName,
          category: c.category,
          projects: [],
          roles: []
        });
      }
      const entry = consultantMap.get(c.companyName)!;
      if (!entry.projects.some(p => p.id === proj.id)) {
        entry.projects.push(proj);
      }
      if (!entry.roles.includes(c.role)) {
        entry.roles.push(c.role);
      }
    });
  });

  const allConsultants = Array.from(consultantMap.values());

  const categories = ['All', 'Planning', 'Architectural', 'Engineering', 'Environmental', 'Acoustic', 'Traffic', 'Heritage', 'Access', 'Main Contractor'];

  const filteredConsultants = allConsultants.filter(c => {
    const matchesSearch = c.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.projects.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className={`p-5 rounded-2xl border flex flex-col md:flex-row gap-4 items-center justify-between transition-colors ${
        isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            {lang === 'zh' ? '参建咨询与合作机构' : 'Consultants & Partner Firms'}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Category Selector */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 ${
              isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
            }`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'All' ? (lang === 'zh' ? '所有领域 (All Category)' : 'All Categories') : cat}
              </option>
            ))}
          </select>

          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-2.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
            <input
              type="text"
              placeholder={lang === 'zh' ? '搜索咨询公司名称...' : 'Search firm name...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Consultants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConsultants.map((c, idx) => (
          <div key={idx} className={`border rounded-2xl p-5 flex flex-col justify-between transition-all ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                  isDarkMode ? 'bg-blue-950 text-blue-400 border border-blue-800' : 'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  {c.category}
                </span>
                <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'zh' ? `参与 ${c.projects.length} 个 SSD 项目` : `Involved in ${c.projects.length} SSD Projects`}
                </span>
              </div>

              <h3 className={`text-base font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {c.companyName}
              </h3>

              <div className={`text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'zh' ? '主要职责领域: ' : 'Responsibilities: '}
                {Array.from(new Set(c.roles.map(r => translateRole(r, lang)))).join(', ')}
              </div>

              <div className={`space-y-1.5 border-t pt-3 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
                <div className={`text-[11px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'zh' ? '参与项目名录:' : 'Involved Projects:'}
                </div>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {c.projects.map(p => (
                    <button
                      key={p.id}
                      onClick={() => onSelectProject(p)}
                      className={`w-full text-left text-xs p-1.5 rounded-lg flex items-center justify-between transition-colors group ${
                        isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className="truncate pr-2 font-medium">{p.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
