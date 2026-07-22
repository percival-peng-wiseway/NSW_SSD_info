import React from 'react';
import type { MajorProject } from '../types';
import { Building2, MapPin, Zap, ExternalLink, FileText, Users } from 'lucide-react';

interface Props {
  project: MajorProject;
  onSelect: (project: MajorProject) => void;
  isCompared?: boolean;
  onToggleCompare?: (project: MajorProject) => void;
  isDarkMode?: boolean;
}

export const ProjectCard: React.FC<Props> = ({ project, onSelect, isCompared, onToggleCompare, isDarkMode = false }) => {
  const isFeatured = project.applicationNo === 'SSD-108864209'; // Highlight NEXTDC S4 Phase 2

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Approved':
        return isDarkMode 
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
          : 'bg-emerald-50 text-emerald-700 border-emerald-300';
      case 'Prepare EIS':
        return isDarkMode 
          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
          : 'bg-amber-50 text-amber-700 border-amber-300';
      case 'Exhibition':
        return isDarkMode 
          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' 
          : 'bg-blue-50 text-blue-700 border-blue-300';
      case 'Assessment':
        return isDarkMode 
          ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' 
          : 'bg-purple-50 text-purple-700 border-purple-300';
      default:
        return isDarkMode 
          ? 'bg-slate-700/30 text-slate-300 border-slate-600/30' 
          : 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  const getSectorBadge = (sector: string) => {
    switch (sector) {
      case 'Data Center':
        return isDarkMode ? 'bg-cyan-950/80 text-cyan-400 border-cyan-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'BESS':
        return isDarkMode ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800' : 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Solar':
      case 'Wind':
        return isDarkMode ? 'bg-purple-950/80 text-purple-400 border-purple-800' : 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div 
      className={`group relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
        isFeatured 
          ? isDarkMode
            ? 'bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-900 border-blue-500/60 shadow-xl ring-1 ring-blue-500/30'
            : 'bg-gradient-to-b from-blue-50/60 via-white to-white border-blue-300 shadow-xl shadow-blue-500/10 ring-1 ring-blue-300'
          : isDarkMode
            ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl'
            : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl shadow-sm'
      }`}
    >
      {/* Featured ribbon for NEXTDC S4 */}
      {isFeatured && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-[10px] font-bold tracking-wider text-white uppercase shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          当前深度焦点项目 (Featured Focus)
        </div>
      )}

      <div>
        {/* Header: Sector & Stage */}
        <div className="flex items-center justify-between gap-2 mb-3 mt-1">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${getSectorBadge(project.sector)}`}>
            {project.sector}
          </span>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${getStageColor(project.stage)}`}>
              {project.stage}
            </span>
            {onToggleCompare && (
              <input
                type="checkbox"
                checked={isCompared}
                onChange={() => onToggleCompare(project)}
                className={`w-4 h-4 rounded text-blue-600 cursor-pointer ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'
                }`}
                title="加入项目对比"
              />
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 
          onClick={() => onSelect(project)}
          className={`text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2 mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {project.name}
        </h3>

        {/* Application Number & LGA */}
        <div className={`flex flex-wrap items-center gap-y-1 gap-x-3 text-xs mb-4 ${
          isDarkMode ? 'text-slate-400' : 'text-slate-500'
        }`}>
          <span className={`font-mono px-2 py-0.5 rounded border ${
            isDarkMode ? 'bg-slate-800/80 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
          }`}>
            {project.applicationNo}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {project.lga}
          </span>
        </div>

        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 gap-2 p-3 rounded-xl border mb-4 text-xs ${
          isDarkMode 
            ? 'bg-slate-950/50 border-slate-800/60' 
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className={`flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <Zap className="w-3 h-3 text-amber-500" /> 规划容量
            </div>
            <div className={`font-semibold mt-0.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
              {project.capacityMW ? `${project.capacityMW} MW` : '待评估'}
            </div>
          </div>
          <div>
            <div className={`flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <Building2 className="w-3 h-3 text-blue-500" /> 申请开发商
            </div>
            <div className={`font-semibold mt-0.5 truncate ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`} title={project.applicant}>
              {project.applicant}
            </div>
          </div>
        </div>

        {/* Key Consultants Pills */}
        <div className="space-y-1.5 mb-4">
          <div className={`text-[11px] flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <Users className="w-3 h-3 text-indigo-500" /> 关键合作/咨询团队:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.consultants.slice(0, 3).map((c, idx) => (
              <span 
                key={idx} 
                className={`text-[11px] px-2 py-0.5 rounded-md border ${
                  isDarkMode 
                    ? 'bg-slate-800/80 text-slate-300 border-slate-700/60' 
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <strong className={isDarkMode ? 'text-slate-400 font-normal' : 'text-slate-500 font-normal'}>{c.role.split(' ')[0]}:</strong> {c.companyName}
              </span>
            ))}
            {project.consultants.length > 3 && (
              <span className={`text-[11px] px-1.5 py-0.5 rounded border ${
                isDarkMode ? 'bg-slate-800/40 text-slate-500 border-slate-800' : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}>
                +{project.consultants.length - 3} 机构
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className={`pt-3 border-t flex items-center justify-between text-xs ${
        isDarkMode ? 'border-slate-800/80' : 'border-slate-100'
      }`}>
        <div className={`flex items-center gap-1 text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> 附录数: {project.appendices.length} 份
        </div>

        <button
          onClick={() => onSelect(project)}
          className={`px-3.5 py-1.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 border ${
            isDarkMode 
              ? 'bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border-blue-500/30' 
              : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border-blue-200 hover:border-blue-600'
          }`}
        >
          查看完整附录与咨询团队
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
