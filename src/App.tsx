import { useState, useMemo } from 'react';
import { MAJOR_PROJECTS_DATA } from './data/majorProjectsData';
import type { MajorProject, ViewMode } from './types';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailDrawer } from './components/ProjectDetailDrawer';
import { ConsultantMatrix } from './components/ConsultantMatrix';
import { ProjectCompareModal } from './components/ProjectCompareModal';
import { 
  Building2, Search, Filter, Download, LayoutGrid, Table, 
  Users, RefreshCw, SlidersHorizontal, Sun, Moon, X
} from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<MajorProject | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedLga, setSelectedLga] = useState<string>('All');
  const [selectedConsultant, setSelectedConsultant] = useState<string>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [comparedProjects, setComparedProjects] = useState<MajorProject[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  
  // Theme state: false = Light Mode (default), true = Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Extract unique LGAs and Consultants for dropdowns
  const uniqueLgas = useMemo(() => {
    const set = new Set<string>();
    MAJOR_PROJECTS_DATA.forEach(p => set.add(p.lga));
    return Array.from(set).sort();
  }, []);

  const uniqueConsultants = useMemo(() => {
    const set = new Set<string>();
    MAJOR_PROJECTS_DATA.forEach(p => p.consultants.forEach(c => set.add(c.companyName)));
    return Array.from(set).sort();
  }, []);

  // Filtered dataset
  const filteredProjects = useMemo(() => {
    return MAJOR_PROJECTS_DATA.filter(p => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.applicationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.consultants.some(c => c.companyName.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSector = selectedSector === 'All' || p.sector === selectedSector;
      const matchesStage = selectedStage === 'All' || p.stage === selectedStage;
      const matchesLga = selectedLga === 'All' || p.lga === selectedLga;
      const matchesConsultant = selectedConsultant === 'All' || p.consultants.some(c => c.companyName === selectedConsultant);

      return matchesSearch && matchesSector && matchesStage && matchesLga && matchesConsultant;
    });
  }, [searchTerm, selectedSector, selectedStage, selectedLga, selectedConsultant]);

  // Toggle compare handler
  const handleToggleCompare = (project: MajorProject) => {
    if (comparedProjects.some(p => p.id === project.id)) {
      setComparedProjects(comparedProjects.filter(p => p.id !== project.id));
    } else {
      if (comparedProjects.length >= 3) {
        alert('最多支持同时对比 3 个项目');
        return;
      }
      setComparedProjects([...comparedProjects, project]);
    }
  };

  // CSV Export handler
  const handleExportCSV = () => {
    const headers = ['SSD编号', '项目名称', '项目类别', 'LGA区划', '申请人', '容量(MW)', '估算金额', '当前阶段', '总包商', '设计单位', '城市规划', '交通工程', '最后更新'];
    const rows = filteredProjects.map(p => [
      `"${p.applicationNo}"`,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.sector}"`,
      `"${p.lga}"`,
      `"${p.applicant.replace(/"/g, '""')}"`,
      p.capacityMW || '',
      `"${p.investmentAmountAud || ''}"`,
      `"${p.stage}"`,
      `"${p.mainContractor || ''}"`,
      `"${p.architect || ''}"`,
      `"${p.planningConsultant || ''}"`,
      `"${p.consultants.find(c => c.category === 'Traffic')?.companyName || ''}"`,
      `"${p.lastUpdated}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NSW_SSD_Projects_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSector('All');
    setSelectedStage('All');
    setSelectedLga('All');
    setSelectedConsultant('All');
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 pb-20 ${
      isDarkMode 
        ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' 
        : 'bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white'
    }`}>
      
      {/* Background Glow Overlay */}
      {isDarkMode ? (
        <>
          <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        </>
      ) : (
        <>
          <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
        </>
      )}

      {/* Top Navbar */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
        isDarkMode 
          ? 'bg-slate-950/80 border-slate-800/80' 
          : 'bg-white/80 border-slate-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          
          {/* Clean Title Only */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <h1 className={`text-2xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              NSW State Significant Development Base
            </h1>
          </div>

          {/* Quick Actions & Theme Switcher */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border font-medium text-xs flex items-center gap-2 transition-all ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-700 text-amber-300 hover:bg-slate-800' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 shadow-sm'
              }`}
              title={isDarkMode ? '切换为白天模式' : '切换为夜间模式'}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>白天模式</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-600" />
                  <span>夜间模式</span>
                </>
              )}
            </button>

            {comparedProjects.length > 0 && (
              <button
                onClick={() => setShowCompareModal(true)}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/20 transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" />
                横向对比项目 ({comparedProjects.length}/3)
              </button>
            )}

            <button
              onClick={handleExportCSV}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                isDarkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-sm'
              }`}
            >
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              导出 CSV 数据
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">

        {/* Filter Bar & Controls */}
        <div className={`p-5 rounded-2xl border backdrop-blur-xl space-y-4 transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/60 border-slate-800' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className={`w-4 h-4 absolute left-3.5 top-3 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="搜索项目名称、SSD编号、申请人或咨询公司..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-950 border border-slate-800 text-slate-200' 
                    : 'bg-slate-50 border border-slate-200 text-slate-800'
                }`}
              />
            </div>

            {/* View Mode Switcher */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border ${
              isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white shadow' 
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" /> 卡片网格
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'table' 
                    ? 'bg-blue-600 text-white shadow' 
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Table className="w-3.5 h-3.5" /> 数据列表
              </button>
              <button
                onClick={() => setViewMode('consultants')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'consultants' 
                    ? 'bg-blue-600 text-white shadow' 
                    : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" /> 咨询公司名录
              </button>
            </div>
          </div>

          {/* Filter Selectors Row */}
          <div className={`flex flex-wrap items-center gap-3 pt-3 border-t text-xs ${
            isDarkMode ? 'border-slate-800/80' : 'border-slate-100'
          }`}>
            <div className={`flex items-center gap-1 font-semibold mr-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> 多维筛选:
            </div>

            {/* Sector Selector */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className={`rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <option value="All">所有类别 (All Sectors)</option>
              <option value="Data Center">数据中心 (Data Center)</option>
              <option value="BESS">储能系统 (BESS)</option>
              <option value="Solar">光伏发电 (Solar)</option>
              <option value="Wind">风力发电 (Wind)</option>
              <option value="Grid & Substation">电网变电站 (Grid)</option>
            </select>

            {/* Stage Selector */}
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className={`rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <option value="All">所有阶段 (All Stages)</option>
              <option value="Prepare EIS">Prepare EIS</option>
              <option value="SEARs">SEARs</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Assessment">Assessment</option>
              <option value="Approved">Approved</option>
            </select>

            {/* LGA Selector */}
            <select
              value={selectedLga}
              onChange={(e) => setSelectedLga(e.target.value)}
              className={`rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <option value="All">所有 LGA 区域 (All LGAs)</option>
              {uniqueLgas.map(lga => (
                <option key={lga} value={lga}>{lga}</option>
              ))}
            </select>

            {/* Consultant Selector */}
            <select
              value={selectedConsultant}
              onChange={(e) => setSelectedConsultant(e.target.value)}
              className={`rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <option value="All">所有参建咨询公司 (All Consultants)</option>
              {uniqueConsultants.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Project Counter Badge */}
            <div className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 shrink-0 ${
              isDarkMode 
                ? 'bg-blue-950/80 text-blue-300 border-blue-800/80' 
                : 'bg-blue-50 text-blue-800 border-blue-200'
            }`}>
              <span>显示 <strong>{filteredProjects.length}</strong> / {MAJOR_PROJECTS_DATA.length} 个项目</span>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleResetFilters}
              className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors ml-auto ${
                isDarkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" /> 重置筛选
            </button>
          </div>
        </div>

        {/* View Mode 1: Grid Card View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(proj => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onSelect={(p) => setSelectedProject(p)}
                isCompared={comparedProjects.some(cp => cp.id === proj.id)}
                onToggleCompare={handleToggleCompare}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        )}

        {/* View Mode 2: Table Data View */}
        {viewMode === 'table' && (
          <div className={`rounded-2xl overflow-hidden shadow-lg border transition-colors ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="overflow-x-auto">
              <table className={`w-full text-left text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <thead className={`font-semibold border-b ${
                  isDarkMode ? 'bg-slate-950 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  <tr>
                    <th className="p-4">对比</th>
                    <th className="p-4">SSD 申请编号</th>
                    <th className="p-4">项目名称</th>
                    <th className="p-4">类别</th>
                    <th className="p-4">容量 (MW)</th>
                    <th className="p-4">LGA 区域</th>
                    <th className="p-4">开发商</th>
                    <th className="p-4">规划/城市顾问</th>
                    <th className="p-4">阶段</th>
                    <th className="p-4 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'divide-slate-800/60' : 'divide-slate-100'}`}>
                  {filteredProjects.map(p => {
                    const isComp = comparedProjects.some(cp => cp.id === p.id);
                    return (
                      <tr key={p.id} className={`transition-colors ${
                        isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'
                      }`}>
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={isComp}
                            onChange={() => handleToggleCompare(p)}
                            className="w-4 h-4 rounded text-indigo-600 cursor-pointer"
                            title="加入项目横向对比"
                          />
                        </td>
                        <td className="p-4 font-mono font-semibold text-blue-600 dark:text-blue-400">{p.applicationNo}</td>
                        <td className={`p-4 font-bold max-w-[240px] truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`} title={p.name}>{p.name}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded text-[11px] ${
                            isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {p.sector}
                          </span>
                        </td>
                        <td className="p-4 font-bold text-amber-600 dark:text-amber-400">{p.capacityMW ? `${p.capacityMW} MW` : '-'}</td>
                        <td className={`p-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-50'}`}>{p.lga}</td>
                        <td className={`p-4 truncate max-w-[150px] ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{p.applicant}</td>
                        <td className="p-4 text-indigo-600 dark:text-indigo-400 font-medium">{p.planningConsultant || 'Urbis / Ethos Urban'}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[11px] font-semibold rounded ${
                            isDarkMode 
                              ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60' 
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}>
                            {p.stage}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => setSelectedProject(p)}
                            className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-colors ${
                              isDarkMode 
                                ? 'bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white' 
                                : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white'
                            }`}
                          >
                            拆解详情
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* View Mode 3: Consultants Matrix View */}
        {viewMode === 'consultants' && (
          <ConsultantMatrix
            projects={filteredProjects}
            onSelectProject={(p) => setSelectedProject(p)}
            isDarkMode={isDarkMode}
          />
        )}

      </main>

      {/* Floating Bottom Comparison Action Bar */}
      {comparedProjects.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 dark:bg-slate-900/95 text-white px-6 py-3.5 rounded-2xl border border-indigo-500/50 shadow-2xl backdrop-blur-xl flex items-center gap-4 animate-bounce-short">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-semibold">已选中 <strong>{comparedProjects.length}</strong> / 3 个对比项目:</span>
          </div>

          <div className="flex items-center gap-2">
            {comparedProjects.map(cp => (
              <span key={cp.id} className="text-[11px] font-mono px-2 py-1 rounded bg-indigo-950 border border-indigo-700 text-indigo-200 flex items-center gap-1">
                {cp.applicationNo}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-rose-400" 
                  onClick={() => handleToggleCompare(cp)}
                />
              </span>
            ))}
          </div>

          <button
            onClick={() => setShowCompareModal(true)}
            className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all ml-2"
          >
            打开横向对比分析 ⚖️
          </button>
        </div>
      )}

      {/* Project Detail Drawer Component */}
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
      />

      {/* Project Compare Modal Component */}
      {showCompareModal && (
        <ProjectCompareModal
          comparedProjects={comparedProjects}
          onClose={() => setShowCompareModal(false)}
          onRemoveProject={(id) => setComparedProjects(comparedProjects.filter(p => p.id !== id))}
          isDarkMode={isDarkMode}
        />
      )}

    </div>
  );
}
