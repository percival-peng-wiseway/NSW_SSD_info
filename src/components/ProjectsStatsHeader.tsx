import React from 'react';
import type { MajorProject } from '../types';
import { Database, Zap, Building2, FileCheck, Users, Layers } from 'lucide-react';

interface Props {
  projects: MajorProject[];
  onFilterSector: (sector: string) => void;
  selectedSector: string;
  isDarkMode?: boolean;
}

export const ProjectsStatsHeader: React.FC<Props> = ({ projects, onFilterSector, selectedSector, isDarkMode = false }) => {
  const totalProjects = projects.length;
  const totalCapacityMW = projects.reduce((acc, p) => acc + (p.capacityMW || 0), 0);
  const dataCenterCount = projects.filter(p => p.sector === 'Data Center').length;
  const bessCount = projects.filter(p => p.sector === 'BESS').length;
  const solarWindCount = projects.filter(p => p.sector === 'Solar' || p.sector === 'Wind').length;
  
  // Extract unique consultants count
  const allConsultantNames = new Set<string>();
  projects.forEach(p => p.consultants.forEach(c => allConsultantNames.add(c.companyName)));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {/* Card 1: Total Projects */}
      <div 
        onClick={() => onFilterSector('All')}
        className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
          selectedSector === 'All' 
            ? isDarkMode 
              ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10' 
              : 'bg-blue-50 border-blue-400 shadow-sm'
            : isDarkMode
              ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
        }`}
      >
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">总项目数</span>
          <Layers className="w-4 h-4 text-blue-500" />
        </div>
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {totalProjects} <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>个 SSD</span>
        </div>
        <div className="text-[11px] text-blue-600 dark:text-blue-400 mt-1">NSW 规划门户归档</div>
      </div>

      {/* Card 2: Total Capacity MW */}
      <div className={`rounded-2xl p-4 border transition-colors ${
        isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">总规划容量</span>
          <Zap className="w-4 h-4 text-amber-500" />
        </div>
        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
          {totalCapacityMW.toLocaleString()} <span className="text-xs text-amber-500/80">MW</span>
        </div>
        <div className={`text-[11px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>涵盖 IT 负载与发能容量</div>
      </div>

      {/* Card 3: Data Centers */}
      <div 
        onClick={() => onFilterSector('Data Center')}
        className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
          selectedSector === 'Data Center' 
            ? isDarkMode
              ? 'bg-cyan-600/20 border-cyan-500 shadow-lg shadow-cyan-500/10'
              : 'bg-cyan-50 border-cyan-400 shadow-sm'
            : isDarkMode
              ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
        }`}
      >
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">数据中心</span>
          <Database className="w-4 h-4 text-cyan-500" />
        </div>
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {dataCenterCount} <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>个园区</span>
        </div>
        <div className="text-[11px] text-cyan-600 dark:text-cyan-400 mt-1">包含 NEXTDC, AirTrunk 等</div>
      </div>

      {/* Card 4: BESS Energy Storage */}
      <div 
        onClick={() => onFilterSector('BESS')}
        className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
          selectedSector === 'BESS' 
            ? isDarkMode
              ? 'bg-emerald-600/20 border-emerald-500 shadow-lg shadow-emerald-500/10'
              : 'bg-emerald-50 border-emerald-400 shadow-sm'
            : isDarkMode
              ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              : 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'
        }`}
      >
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">储能系统 BESS</span>
          <Building2 className="w-4 h-4 text-emerald-500" />
        </div>
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {bessCount} <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>个大电站</span>
        </div>
        <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">如 Waratah, Eraring</div>
      </div>

      {/* Card 5: Renewable Energy */}
      <div 
        onClick={() => onFilterSector('Solar')}
        className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
          selectedSector === 'Solar' || selectedSector === 'Wind'
            ? isDarkMode
              ? 'bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/10'
              : 'bg-purple-50 border-purple-400 shadow-sm'
            : isDarkMode
              ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
        }`}
      >
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">光伏 & 风电</span>
          <FileCheck className="w-4 h-4 text-purple-500" />
        </div>
        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {solarWindCount} <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>个风光基地</span>
        </div>
        <div className="text-[11px] text-purple-600 dark:text-purple-400 mt-1">Central-West Orana REZ</div>
      </div>

      {/* Card 6: Total Consultants */}
      <div className={`rounded-2xl p-4 border transition-colors ${
        isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className={`flex items-center justify-between mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <span className="text-xs font-semibold uppercase tracking-wider">参建咨询机构</span>
          <Users className="w-4 h-4 text-rose-500" />
        </div>
        <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
          {allConsultantNames.size}+ <span className="text-xs text-rose-500/80">家专家团队</span>
        </div>
        <div className={`text-[11px] mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Urbis, HDR, TTW 等</div>
      </div>
    </div>
  );
};
