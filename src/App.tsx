import { useState, useMemo, useEffect } from 'react';
import { MAJOR_PROJECTS_DATA } from './data/majorProjectsData';
import type { MajorProject, ViewMode } from './types';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailDrawer } from './components/ProjectDetailDrawer';
import { ConsultantMatrix } from './components/ConsultantMatrix';
import { ProjectCompareModal } from './components/ProjectCompareModal';
import { 
  Building2, Search, Download, LayoutGrid, Table, 
  Users, RefreshCw, SlidersHorizontal, Sun, Moon, X, Globe,
  ChevronLeft, ChevronRight
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
  
  // Language State: 'zh' (Full Chinese, default) vs 'en' (Full English)
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  // Items per page: 6 for Grid Cards, 10 for Data List/Table
  const itemsPerPage = viewMode === 'grid' ? 6 : 10;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;

  // Reset page to 1 when filters or viewMode change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedSector, selectedStage, selectedLga, selectedConsultant, viewMode]);

  // Paginated Projects slice
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  // Toggle compare handler
  const handleToggleCompare = (project: MajorProject) => {
    if (comparedProjects.some(p => p.id === project.id)) {
      setComparedProjects(comparedProjects.filter(p => p.id !== project.id));
    } else {
      if (comparedProjects.length >= 3) {
        alert(lang === 'zh' ? '最多支持同时对比 3 个项目' : 'You can compare up to 3 projects at once');
        return;
      }
      setComparedProjects([...comparedProjects, project]);
    }
  };

  // CSV Export handler
  const handleExportCSV = () => {
    const headers = lang === 'zh' 
      ? ['SSD编号', '项目名称', '项目类别', 'LGA区划', '申请人', '容量(MW)', '估算金额', '当前阶段', '总包商', '设计单位', '城市规划', '交通工程', '最后更新']
      : ['Application No', 'Project Name', 'Sector', 'LGA Region', 'Applicant', 'Capacity (MW)', 'Investment (AUD)', 'Stage', 'Main Contractor', 'Architect', 'Town Planner', 'Traffic Engineer', 'Last Updated'];
    
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

  const startItemIndex = (currentPage - 1) * itemsPerPage + 1;
  const endItemIndex = Math.min(currentPage * itemsPerPage, filteredProjects.length);

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
            <h1 className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {lang === 'zh' ? '新州 (NSW) 规划局数据中心 SSD 特别重大项目智库' : 'NSW Data Centre State Significant Development Intelligence'}
            </h1>
          </div>

          {/* Quick Actions & Theme / Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Bilingual Language Toggle Switcher */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-blue-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-blue-600 hover:bg-slate-50 shadow-sm'
              }`}
              title={lang === 'zh' ? 'Switch to English' : '切换至中文界面'}
            >
              <Globe className="w-4 h-4 text-blue-500" />
              <span>{lang === 'zh' ? '中文' : 'EN'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
              }`}
              title={isDarkMode ? '切换至亮色模式 (Light Mode)' : '切换至深色夜间模式 (Dark Mode)'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Export Button */}
            <button 
              onClick={handleExportCSV}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-blue-500" />
              {lang === 'zh' ? '导出数据表 (CSV)' : 'Export CSV'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">

        {/* View Mode & Filter Navigation Bar */}
        <div className={`p-4 rounded-2xl border transition-colors ${
          isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* View Mode Tabs */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isDarkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutGrid className="w-4 h-4" /> {lang === 'zh' ? '卡片网络' : 'Card Grid'}
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'table'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isDarkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Table className="w-4 h-4" /> {lang === 'zh' ? '数据列表' : 'Data List'}
              </button>
              <button
                onClick={() => setViewMode('consultants')}
                className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'consultants'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isDarkMode ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" /> {lang === 'zh' ? '参建咨询与合作机构' : 'Consultants & Partner Firms'}
              </button>
            </div>

            {/* Global Search Input */}
            <div className="relative w-full md:w-80">
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`} />
              <input
                type="text"
                placeholder={lang === 'zh' ? '搜索 SSD编号、项目名称、申请人、顾问...' : 'Search SSD No, Project, Applicant, Consultant...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                  isDarkMode 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Secondary Multi-Select Filters */}
          <div className="flex flex-wrap items-center gap-3 pt-3 mt-3 border-t border-slate-200/50 dark:border-slate-800/50 text-xs">
            
            <div className="flex items-center gap-1.5 font-semibold shrink-0 text-slate-500 dark:text-slate-400">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '多维筛选:' : 'Multi-Filter:'}</span>
            </div>

            {/* Stage Selector */}
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className={`rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                isDarkMode ? 'bg-slate-950 border border-slate-800 text-slate-200' : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              <option value="All">{lang === 'zh' ? '所有阶段 (All Stages)' : 'All Assessment Stages'}</option>
              <option value="Prepare EIS">Prepare EIS</option>
              <option value="Assessment">Assessment</option>
              <option value="Exhibition">Exhibition</option>
              <option value="SEARs">SEARs</option>
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
              <option value="All">{lang === 'zh' ? '所有 LGA 区域 (All LGAs)' : 'All LGA Regions'}</option>
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
              <option value="All">{lang === 'zh' ? '所有参建咨询公司 (All Consultants)' : 'All Consultants & Firms'}</option>
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
              <span>{lang === 'zh' ? `显示 ${filteredProjects.length} / ${MAJOR_PROJECTS_DATA.length} 个项目` : `Showing ${filteredProjects.length} / ${MAJOR_PROJECTS_DATA.length} Projects`}</span>
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
              <RefreshCw className="w-3.5 h-3.5" /> {lang === 'zh' ? '重置筛选' : 'Reset Filters'}
            </button>
          </div>
        </div>

        {/* View Mode 1: Grid Card View (6 items per page) */}
        {viewMode === 'grid' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.map(proj => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  onSelect={(p) => setSelectedProject(p)}
                  isCompared={comparedProjects.some(cp => cp.id === proj.id)}
                  onToggleCompare={handleToggleCompare}
                  isDarkMode={isDarkMode}
                  lang={lang}
                />
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Table Data View (10 items per page) */}
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
                    <th className="p-4">{lang === 'zh' ? '对比' : 'Compare'}</th>
                    <th className="p-4">{lang === 'zh' ? 'SSD 申请编号' : 'Application No'}</th>
                    <th className="p-4">{lang === 'zh' ? '项目名称' : 'Project Name'}</th>
                    <th className="p-4">{lang === 'zh' ? '类别' : 'Sector'}</th>
                    <th className="p-4">{lang === 'zh' ? '容量 (MW)' : 'Capacity (MW)'}</th>
                    <th className="p-4">{lang === 'zh' ? 'LGA 区域' : 'LGA Region'}</th>
                    <th className="p-4">{lang === 'zh' ? '开发商' : 'Applicant'}</th>
                    <th className="p-4">{lang === 'zh' ? '规划/城市顾问' : 'Town Planner'}</th>
                    <th className="p-4">{lang === 'zh' ? '阶段' : 'Stage'}</th>
                    <th className="p-4 text-right">{lang === 'zh' ? '操作' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'divide-slate-800/60' : 'divide-slate-100'}`}>
                  {paginatedProjects.map(p => {
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
                        <td className={`p-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{p.lga}</td>
                        <td className={`p-4 truncate max-w-[150px] ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{p.applicant}</td>
                        <td className="p-4 text-indigo-600 dark:text-indigo-400 font-medium">{p.planningConsultant || 'Urbis'}</td>
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
                            {lang === 'zh' ? '拆解详情' : 'View Details'}
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

        {/* Pagination Bar for Grid & Table Views */}
        {(viewMode === 'grid' || viewMode === 'table') && filteredProjects.length > 0 && (
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors ${
            isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'zh' ? (
                <>显示第 <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{startItemIndex}</strong> 至 <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{endItemIndex}</strong> 条，共 <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{filteredProjects.length}</strong> 个项目</>
              ) : (
                <>Showing <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{startItemIndex}</strong> to <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{endItemIndex}</strong> of <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>{filteredProjects.length}</strong> projects</>
              )}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all ${
                  currentPage === 1
                    ? 'opacity-40 cursor-not-allowed border-transparent'
                    : isDarkMode 
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> {lang === 'zh' ? '上一页' : 'Previous'}
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : isDarkMode
                          ? 'text-slate-400 hover:bg-slate-800'
                          : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all ${
                  currentPage === totalPages
                    ? 'opacity-40 cursor-not-allowed border-transparent'
                    : isDarkMode 
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                {lang === 'zh' ? '下一页' : 'Next'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* View Mode 3: Consultant Matrix */}
        {viewMode === 'consultants' && (
          <ConsultantMatrix 
            projects={filteredProjects} 
            onSelectProject={(p) => setSelectedProject(p)}
            isDarkMode={isDarkMode}
            lang={lang}
          />
        )}

      </main>

      {/* Floating Bottom Comparison Action Bar */}
      {comparedProjects.length > 0 && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 p-4 rounded-2xl shadow-2xl border flex items-center gap-4 transition-all animate-in fade-in slide-in-from-bottom-5 ${
          isDarkMode 
            ? 'bg-slate-900/95 border-slate-800 text-white backdrop-blur-xl' 
            : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-xl shadow-blue-500/10'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold">{lang === 'zh' ? `已选择对比项目 (${comparedProjects.length} / 3):` : `Projects Selected (${comparedProjects.length} / 3):`}</span>
          </div>

          <div className="flex items-center gap-2">
            {comparedProjects.map(p => (
              <span key={p.id} className={`px-2.5 py-1 text-xs font-mono rounded-lg border flex items-center gap-1.5 ${
                isDarkMode ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-slate-100 border-slate-200 text-blue-700'
              }`}>
                {p.applicationNo}
                <button 
                  onClick={() => handleToggleCompare(p)}
                  className="hover:text-red-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => setShowCompareModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all"
            >
              {lang === 'zh' ? '开始横向参数对比 ↗' : 'Start Cross-Comparison ↗'}
            </button>
            <button
              onClick={() => setComparedProjects([])}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {lang === 'zh' ? '清空' : 'Clear'}
            </button>
          </div>
        </div>
      )}

      {/* Project Detail Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
        lang={lang}
      />

      {/* Project Cross-Comparison Modal */}
      {showCompareModal && (
        <ProjectCompareModal
          comparedProjects={comparedProjects}
          onClose={() => setShowCompareModal(false)}
          onRemoveProject={(id) => setComparedProjects(comparedProjects.filter(p => p.id !== id))}
          isDarkMode={isDarkMode}
          lang={lang}
        />
      )}

    </div>
  );
}
