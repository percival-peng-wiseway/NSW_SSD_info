import React, { useState } from 'react';
import type { MajorProject } from '../types';
import { Building2, Search, ArrowRight } from 'lucide-react';

interface Props {
  projects: MajorProject[];
  onSelectProject: (project: MajorProject) => void;
  isDarkMode?: boolean;
}

export const ConsultantMatrix: React.FC<Props> = ({ projects, onSelectProject, isDarkMode = false }) => {
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

  const categories = ['All', 'Planning', 'Architectural', 'Engineering', 'Environmental', 'Acoustic', 'Traffic', 'Main Contractor'];

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
            <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 参建咨询与合作机构名录库
          </h2>
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            汇总 43 个重大项目中所涉及的城市规划、建筑设计、交通工程、声学评估及总包单位名录
          </p>
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
              <option key={cat} value={cat}>{cat === 'All' ? '所有领域 (All Category)' : cat}</option>
            ))}
          </select>

          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <Search className={`w-4 h-4 absolute left-3 top-2.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
            <input
              type="text"
              placeholder="搜索咨询公司名称..."
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
                  参与 {c.projects.length} 个 SSD 项目
                </span>
              </div>

              <h3 className={`text-base font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {c.companyName}
              </h3>

              <div className={`text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                主要职责领域: {c.roles.join(', ')}
              </div>

              <div className={`space-y-1.5 border-t pt-3 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
                <div className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>参与的项目列表:</div>
                {c.projects.slice(0, 3).map(p => (
                  <div 
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className={`text-xs hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer flex items-center justify-between p-1.5 rounded transition-colors ${
                      isDarkMode ? 'text-slate-300 hover:bg-slate-800/50' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate pr-2">{p.name}</span>
                    <ArrowRight className="w-3 h-3 shrink-0 text-slate-400" />
                  </div>
                ))}
                {c.projects.length > 3 && (
                  <div className={`text-[11px] italic pl-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    及其它 {c.projects.length - 3} 个项目...
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
