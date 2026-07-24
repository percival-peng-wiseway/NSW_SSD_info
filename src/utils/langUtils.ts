/**
 * Dual-language dictionary mapping utility for SSD project roles and consultant domains.
 */

export function translateRole(role: string, lang: 'zh' | 'en' = 'zh'): string {
  if (!role) return lang === 'zh' ? '参建顾问' : 'Consultant Firm';

  const r = role.toLowerCase().trim();

  if (lang === 'zh') {
    if (r.includes('town') || r.includes('planning') || r.includes('planner')) return '城市规划与EIS报告';
    if (r.includes('architect') || r.includes('architectural')) return '建筑设计';
    if (r.includes('traffic') || r.includes('transport')) return '交通工程与路网';
    if (r.includes('acoustic') || r.includes('noise')) return '声学与降噪';
    if (r.includes('civil') || r.includes('structural')) return '土木与结构工程';
    if (r.includes('water') || r.includes('stormwater') || r.includes('hydrology')) return '水务与雨水处理';
    if (r.includes('aboriginal') || r.includes('achar')) return '原住民文化遗产';
    if (r.includes('heritage')) return '历史遗产保护';
    if (r.includes('ecology') || r.includes('biodiversity')) return '生态与生物多样性';
    if (r.includes('bushfire') || r.includes('fire')) return '丛林火灾与消防';
    if (r.includes('economic') || r.includes('sia') || r.includes('social')) return '社会与经济评估';
    if (r.includes('contamination') || r.includes('waste')) return '污染与废弃物处理';
    if (r.includes('qs') || r.includes('cost') || r.includes('quantity')) return '造价与工费评估';
    if (r.includes('contractor')) return '施工总包';
    if (r.includes('landscape')) return '景观建筑设计';
    if (r.includes('access')) return '无障碍设施';
    if (r.includes('state authority')) return '主导审批机构';
    return role;
  }

  // English Translation Dictionary (Comprehensive Coverage)
  if (r.includes('噪声') || r.includes('声学') || r.includes('acoustic') || r.includes('noise')) return 'Acoustic & Noise Assessment';
  if (r.includes('交通') || r.includes('路网') || r.includes('车辆') || r.includes('traffic') || r.includes('transport')) return 'Traffic & Transport Planning';
  if (r.includes('总规划') || r.includes('规划') || r.includes('eis') || r.includes('town planner')) return 'Town Planner & EIS Lead';
  if (r.includes('建筑') || r.includes('设计') || r.includes('architectural')) return 'Architectural Design';
  if (r.includes('原住民') || r.includes('文化遗产') || r.includes('aboriginal') || r.includes('achar')) return 'Aboriginal Cultural Heritage (ACHAR)';
  if (r.includes('历史遗产') || r.includes('heritage')) return 'Historic Heritage Assessment';
  if (r.includes('生物多样性') || r.includes('生态') || r.includes('bdar') || r.includes('ecology')) return 'Ecology & Biodiversity (BDAR)';
  if (r.includes('水文') || r.includes('雨水') || r.includes('水务') || r.includes('供水') || r.includes('osd') || r.includes('water')) return 'Hydrology, Water & Stormwater';
  if (r.includes('土木') || r.includes('结构') || r.includes('地质') || r.includes('岩土') || r.includes('civil') || r.includes('structural')) return 'Civil & Structural Engineering';
  if (r.includes('经济') || r.includes('社会') || r.includes('sia') || r.includes('economic') || r.includes('social')) return 'Social & Economic Impact (SIA)';
  if (r.includes('丛林火灾') || r.includes('消防') || r.includes('火灾') || r.includes('bushfire') || r.includes('fire')) return 'Bushfire Protection & Fire Safety';
  if (r.includes('污染') || r.includes('土壤') || r.includes('废弃物') || r.includes('contamination') || r.includes('waste')) return 'Contamination & Waste Management';
  if (r.includes('危险品') || r.includes('sepp 33') || r.includes('hazards')) return 'Hazardous Goods & SEPP 33';
  if (r.includes('施工') || r.includes('总包') || r.includes('contractor') || r.includes('builder')) return 'Main Contractor / Builder';
  if (r.includes('工费') || r.includes('造价') || r.includes('成本') || r.includes('qs')) return 'Quantity Surveyor & Costing';
  if (r.includes('景观') || r.includes('绿化') || r.includes('landscape')) return 'Landscape Architecture';
  if (r.includes('无障碍') || r.includes('access') || r.includes('dda')) return 'Accessibility & DDA';
  if (r.includes('航空') || r.includes('空域') || r.includes('aviation')) return 'Aviation Clearance';
  if (r.includes('审批') || r.includes('政府') || r.includes('state authority')) return 'State Authority Approval';

  return role;
}

export function translateRoleShort(role: string, lang: 'zh' | 'en' = 'zh'): string {
  const full = translateRole(role, lang);
  if (lang === 'zh') {
    if (full.includes('规划')) return '规划';
    if (full.includes('建筑')) return '建筑';
    if (full.includes('交通')) return '交通';
    if (full.includes('声学')) return '声学';
    if (full.includes('土木')) return '土木';
    if (full.includes('水务')) return '水务';
    return full.slice(0, 4);
  } else {
    if (full.includes('Planner')) return 'Planning';
    if (full.includes('Architectural')) return 'Architecture';
    if (full.includes('Traffic')) return 'Traffic';
    if (full.includes('Acoustic')) return 'Acoustic';
    if (full.includes('Civil')) return 'Civil/Structural';
    if (full.includes('Hydrology') || full.includes('Water')) return 'Water/Stormwater';
    if (full.includes('Heritage')) return 'Heritage';
    if (full.includes('Ecology')) return 'Ecology';
    return full.split(' ')[0];
  }
}
