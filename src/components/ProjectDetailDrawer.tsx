import React, { useState } from 'react';
import type { MajorProject } from '../types';
import { X, ExternalLink, FileText, Users, Building2, ShieldAlert, MapPin, Zap, Layers } from 'lucide-react';

interface Props {
  project: MajorProject | null;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const ProjectDetailDrawer: React.FC<Props> = ({ project, onClose, isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'consultants' | 'appendices' | 'risks'>('overview');

  if (!project) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden flex justify-end transition-opacity duration-300 ${
      isDarkMode ? 'bg-slate-950/80 backdrop-blur-md' : 'bg-slate-900/40 backdrop-blur-sm'
    }`}>
      <div className={`relative w-full max-w-4xl h-full flex flex-col shadow-2xl overflow-hidden border-l ${
        isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        
        {/* Top Bar Header */}
        <div className={`p-6 border-b sticky top-0 z-10 flex items-start justify-between gap-4 ${
          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                isDarkMode ? 'bg-blue-950 text-blue-400 border border-blue-800' : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}>
                {project.sector}
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-mono rounded ${
                isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-300'
              }`}>
                {project.applicationNo}
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                isDarkMode ? 'bg-amber-950/80 text-amber-400 border border-amber-800' : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}>
                {project.stage}
              </span>
            </div>
            <h2 className={`text-2xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {project.name}
            </h2>
            <div className={`flex items-center gap-4 text-xs mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {project.lga}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> 容量: {project.capacityMW ? `${project.capacityMW} MW` : '待定'}
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-blue-500" /> 申请人: {project.applicant}
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={`flex border-b px-6 gap-2 ${
          isDarkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-500/10'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" /> 项目概况 (Overview)
          </button>
          <button
            onClick={() => setActiveTab('consultants')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'consultants'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-500/10'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" /> 合作与咨询团队 ({project.consultants.length})
          </button>
          <button
            onClick={() => setActiveTab('appendices')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'appendices'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-500/10'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" /> 项目附录清单 ({project.appendices.length})
          </button>
          <button
            onClick={() => setActiveTab('risks')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'risks'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-500/10'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-4 h-4" /> 评估要点与风险 ({project.keyRisks.length})
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Highlight Banner if NEXTDC S4 */}
              {project.applicationNo === 'SSD-108864209' && (
                <div className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${
                  isDarkMode ? 'bg-blue-950/40 border-blue-500/40 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <span className="p-2 rounded-lg bg-blue-600/20 text-blue-600 dark:text-blue-400 shrink-0">💡</span>
                  <div>
                    <strong className={`text-sm block mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>NEXTDC S4 Phase 2 重点关注提示:</strong>
                    本项目为西悉尼 Horsley Park 区域核心 134.4MW 数据中心扩建项目。总承包商为 Multiplex，由 Urbis/Ethos Urban 负责规划申报，HDR 与 Greenbox 进行建筑规划。环境影响评估 (EIS) 正在编制中，重点包含柴油发电机组发能降噪、电网接入与雨排水平衡。
                  </div>
                </div>
              )}

              {/* Description */}
              <div className={`border rounded-xl p-5 ${
                isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>项目描述 (Project Description)</h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>{project.description}</p>
              </div>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`border rounded-xl p-4 space-y-3 ${
                  isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>开发主体与金额</h4>
                  <div className="space-y-2 text-xs">
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>申请开发商</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.applicant}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>估计投资额</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{project.investmentAmountAud || '未披露'}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>总包/施工单位</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{project.mainContractor || '招标中'}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>设计事务所</span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">{project.architect || '待定'}</span>
                    </div>
                  </div>
                </div>

                <div className={`border rounded-xl p-4 space-y-3 ${
                  isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>地理与规划参数</h4>
                  <div className="space-y-2 text-xs">
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>所属 LGA 议会</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.lga}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>项目地址</span>
                      <span className={`font-semibold truncate max-w-[200px] ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} title={project.address}>{project.address}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>系统规划阶段</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">{project.stage}</span>
                    </div>
                    <div className={`flex justify-between py-1 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>最后更新日期</span>
                      <span className={`font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{project.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Official Link */}
              <div className={`flex items-center justify-between p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  需要调取 NSW Planning Portal 官方原始节点数据？
                </div>
                <a
                  href={project.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  前往 NSW 规划门户主页 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: CONSULTANTS & PARTNERS */}
          {activeTab === 'consultants' && (
            <div className="space-y-4">
              <div className={`text-xs mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                以下为该项目在 NSW Planning Portal 申报资料中明确参与的咨询公司、工程顾问与总包单位列表：
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.consultants.map((c, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-all ${
                    isDarkMode ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        isDarkMode ? 'bg-blue-950 text-blue-400 border border-blue-800/60' : 'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}>
                        {c.role}
                      </span>
                      <span className={`text-[11px] font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {c.category}
                      </span>
                    </div>
                    <div className={`text-base font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {c.companyName}
                    </div>
                    <div className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {c.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: APPENDICES LIST - STYLED EXACTLY LIKE NSW PLANNING PORTAL */}
          {activeTab === 'appendices' && (
            <div className="space-y-4">
              <div className="space-y-3">
                {project.appendices.map((app, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isDarkMode ? 'bg-slate-950/50 border-slate-800 hover:border-blue-500/40' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded border ${
                          isDarkMode ? 'bg-blue-600/20 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                          {app.code}
                        </span>
                        
                        {/* Direct Portal Link on Title */}
                        <a
                          href={app.downloadUrl || project.officialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-sm font-bold hover:underline transition-colors ${
                            isDarkMode ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'
                          }`}
                        >
                          {app.title}
                        </a>

                        <span className={`text-[11px] px-2 py-0.5 rounded border shrink-0 ${
                          isDarkMode ? 'text-indigo-400 bg-indigo-950/60 border-indigo-800/50' : 'text-indigo-800 bg-indigo-50 border-indigo-200'
                        }`}>
                          编制单位: {app.author}
                        </span>
                      </div>

                      <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {app.summary}
                      </p>
                    </div>

                    {/* Official SSD Portal Style "[↗ View]" Blue Button */}
                    <a
                      href={app.downloadUrl || project.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-[#002664] hover:bg-[#001c4b] text-white rounded font-bold text-xs flex items-center gap-1.5 shrink-0 shadow transition-colors"
                      title="打开官方文档中心在线阅读 PDF"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View
                    </a>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RISKS & FOCUS AREAS */}
          {activeTab === 'risks' && (
            <div className="space-y-4">
              <div className={`text-xs mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                NSW 规划评估部门 (DPE) 与环境局针对该项目的重点审查项与关键风险因子：
              </div>

              <div className="space-y-3">
                {project.keyRisks.map((risk, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isDarkMode ? 'bg-amber-950/20 border-amber-500/30' : 'bg-amber-50 border-amber-200'
                  }`}>
                    <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-sm font-bold mb-1 ${isDarkMode ? 'text-amber-300' : 'text-amber-900'}`}>{risk}</h4>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        该因子需在开发前期完成专项论证（参见附录技术报告），确保满足全州环境防护与防灾要求。
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
