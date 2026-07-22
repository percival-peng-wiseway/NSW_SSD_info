import type { IntelligenceItem, MonitoredSource, WeeklyReport } from '../types';

export const INITIAL_SOURCES: MonitoredSource[] = [
  {
    id: 'src-1',
    name: 'AEMO (Australian Energy Market Operator)',
    url: 'https://aemo.com.au/news',
    category: 'Market Regulator',
    checkIntervalMinutes: 15,
    lastScraped: '2026-07-20 14:30',
    status: 'active',
    reliabilityScore: 99,
    articlesFoundToday: 4,
  },
  {
    id: 'src-2',
    name: 'ARENA (Australian Renewable Energy Agency)',
    url: 'https://arena.gov.au/news/',
    category: 'Government & Policy',
    checkIntervalMinutes: 30,
    lastScraped: '2026-07-20 14:15',
    status: 'active',
    reliabilityScore: 98,
    articlesFoundToday: 2,
  },
  {
    id: 'src-3',
    name: 'RenewEconomy Australia',
    url: 'https://reneweconomy.com.au/',
    category: 'Industry Media',
    checkIntervalMinutes: 10,
    lastScraped: '2026-07-20 14:40',
    status: 'active',
    reliabilityScore: 95,
    articlesFoundToday: 9,
  },
  {
    id: 'src-4',
    name: 'PV Magazine Australia',
    url: 'https://www.pv-magazine-australia.com/',
    category: 'Industry Media',
    checkIntervalMinutes: 20,
    lastScraped: '2026-07-20 13:50',
    status: 'active',
    reliabilityScore: 94,
    articlesFoundToday: 5,
  },
  {
    id: 'src-5',
    name: 'Energy Storage News - Australia',
    url: 'https://www.energy-storage.news/category/markets/oceania/australia/',
    category: 'Industry Media',
    checkIntervalMinutes: 30,
    lastScraped: '2026-07-20 12:10',
    status: 'active',
    reliabilityScore: 92,
    articlesFoundToday: 3,
  },
  {
    id: 'src-6',
    name: 'DCD (Data Center Dynamics) APAC',
    url: 'https://www.datacenterdynamics.com/en/news/?region=australia',
    category: 'Industry Media',
    checkIntervalMinutes: 20,
    lastScraped: '2026-07-20 14:00',
    status: 'active',
    reliabilityScore: 96,
    articlesFoundToday: 3,
  },
  {
    id: 'src-7',
    name: 'DCCEEW (Federal Energy & Environment)',
    url: 'https://www.dcceew.gov.au/energy/news',
    category: 'Government & Policy',
    checkIntervalMinutes: 60,
    lastScraped: '2026-07-20 11:00',
    status: 'active',
    reliabilityScore: 99,
    articlesFoundToday: 1,
  },
  {
    id: 'src-8',
    name: 'NSW Energy & Climate Change Dept',
    url: 'https://www.energy.nsw.gov.au/news-events',
    category: 'Government & Policy',
    checkIntervalMinutes: 45,
    lastScraped: '2026-07-20 10:20',
    status: 'active',
    reliabilityScore: 97,
    articlesFoundToday: 2,
  }
];

export const INITIAL_INTELLIGENCE: IntelligenceItem[] = [
  {
    id: 'item-101',
    title: 'AEMO & Federal Govt Propose "Green Data Center Fast-Track Framework" for Grid Connections Associated with 4h+ BESS',
    source: 'AEMO (Australian Energy Market Operator)',
    sourceUrl: 'https://aemo.com.au/news/fast-track-green-dc-framework-2026',
    publishDate: '2026-07-20 13:45',
    sector: 'Data Center',
    region: 'Federal',
    rating: 5,
    ratingReason: 'Federal level policy shift. Direct priority grid access given to Data Centers backed by >200MW BESS / Solar colocation.',
    summary: 'AEMO paired with the Federal Energy Ministry to announce an accelerated grid queue mechanism for AI Data Centers. Facilities securing 100% renewable PPA with co-located 4-hour battery storage will receive priority connection assessment within 6 months.',
    keyInsights: [
      'Accelerates grid queue from typical 24 months down to 6 months for compliant facilities.',
      'Mandates a minimum 4-hour battery storage duration equal to 50% of peak Data Center load.',
      'Designed to prevent localized NEM transmission bottlenecks in NSW Hunter and QLD Renewable Energy Zones.'
    ],
    isPushed: true,
    isSaved: true,
    tags: ['AEMO', 'Grid Connection', 'Data Center', 'BESS Colocation', 'Federal Policy']
  },
  {
    id: 'item-102',
    title: 'NEXTDC Secures $2.1B Green Loan Facility for 300MW Hyperscale AI Campus in QLD Supported by 500MW Solar+Wind PPA',
    source: 'DCD (Data Center Dynamics) APAC',
    sourceUrl: 'https://www.datacenterdynamics.com/en/news/nextdc-secures-21b-green-loan-qld',
    publishDate: '2026-07-20 11:20',
    sector: 'Data Center',
    region: 'QLD',
    rating: 5,
    ratingReason: 'Massive capital commitment ($2.1B) directly tying Hyperscale Data Center demand to 500MW Solar+Wind asset buildout.',
    summary: 'NEXTDC has finalized a $2.1 billion sustainability-linked financing package for its flagship BNE02 Hyperscale campus. The operator simultaneously signed a 15-year PPA with Squadron Energy to off-take 500MW of solar and wind generation.',
    keyInsights: [
      'Largest single private green loan for an Australian data center project to date.',
      'Includes strict PUE target (< 1.18) powered by continuous 24/7 matching algorithms.',
      'Construction set to commence Q4 2026 in South East Queensland.'
    ],
    isPushed: true,
    isSaved: true,
    tags: ['NEXTDC', 'Hyperscale', 'Green Loan', 'PPA', 'Queensland', 'Solar Wind']
  },
  {
    id: 'item-103',
    title: 'NSW Government Establishes 2GW Renewable Energy Zone Substation Allocation for Battery Storage & Heavy Tech Load',
    source: 'NSW Energy & Climate Change Dept',
    sourceUrl: 'https://www.energy.nsw.gov.au/news/rez-2gw-substation-bess-allocation',
    publishDate: '2026-07-19 16:10',
    sector: 'BESS',
    region: 'NSW',
    rating: 4,
    ratingReason: 'State policy allocation. Dedicated capacity for grid-scale BESS in Central-West Orana REZ.',
    summary: 'The NSW Infrastructure Pipeline authority released tender guidelines for 2GW of network connection capacity reserved strictly for Standalone BESS and co-located industrial energy storage in Central-West Orana REZ.',
    keyInsights: [
      'Tenders open on August 15, 2026, targeting 4-hour and 8-hour duration storage projects.',
      'Streamlined planning pathways established under State Significant Infrastructure rules.',
      'Aims to buffer peak evening demand spikes caused by growing Sydney Data Center cluster.'
    ],
    isPushed: false,
    isSaved: true,
    tags: ['NSW REZ', 'BESS Tender', 'Network Capacity', 'Storage Duration']
  },
  {
    id: 'item-104',
    title: 'Neoen Commences Full Commercial Operation of 200MW / 400MWh Goyder South Battery Stage 1 in South Australia',
    source: 'Energy Storage News - Australia',
    sourceUrl: 'https://www.energy-storage.news/neoen-goyder-south-battery-sa-operational',
    publishDate: '2026-07-19 09:30',
    sector: 'BESS',
    region: 'SA',
    rating: 4,
    ratingReason: 'Major utility scale BESS asset operational milestone in SA high-renewable grid.',
    summary: 'Neoen confirmed that Stage 1 of Goyder South Battery (200MW/400MWh) has achieved full registration with AEMO and is now actively providing FCAS (Frequency Control Ancillary Services) and synthetic inertia to the South Australia network.',
    keyInsights: [
      'Features advanced grid-forming inverters supplied by Tesla Megapack.',
      'Supports the 412MW Goyder South Stage 1 Wind Farm integration.',
      'Backed by 14-year contract with BHP to power Olympic Dam operations.'
    ],
    isPushed: false,
    isSaved: true,
    tags: ['Neoen', 'BESS', 'South Australia', 'Grid-Forming', 'FCAS']
  },
  {
    id: 'item-105',
    title: 'ARENA Allocates $85M Grant to Pioneer 100% Off-Grid Solar+BESS Powered Data Center Hub in Western Australia',
    source: 'ARENA (Australian Renewable Energy Agency)',
    sourceUrl: 'https://arena.gov.au/news/off-grid-solar-bess-data-center-wa/',
    publishDate: '2026-07-18 14:00',
    sector: 'Solar',
    region: 'WA',
    rating: 4,
    ratingReason: 'Government grant for innovative off-grid renewable data center paradigm.',
    summary: 'ARENA announced $85 million in funding for a pilot 120MW solar farm coupled with 300MWh BESS and green hydrogen backup generator. The facility is designed to host edge computing data centers completely independent of the SWIS grid.',
    keyInsights: [
      'Solves SWIS transmission grid congestion by bypassing utility connection entirely.',
      'Demonstrates zero-carbon continuous uptime for AI inference workload hubs.',
      'Project completion target set for late 2027 near Geraldton.'
    ],
    isPushed: false,
    isSaved: true,
    tags: ['ARENA Grant', 'Off-Grid', 'Solar', 'WA', 'Edge Computing']
  },
  {
    id: 'item-106',
    title: 'Australian Energy Regulator (AER) Draft Rule: Connection Capacity Hoarding Penalties for Unbuilt Data Centers',
    source: 'AEMO (Australian Energy Market Operator)',
    sourceUrl: 'https://aer.gov.au/news/draft-rule-connection-capacity-hoarding-2026',
    publishDate: '2026-07-18 10:15',
    sector: 'Grid & Policy',
    region: 'Federal',
    rating: 5,
    ratingReason: 'Regulatory enforcement rule. Could forfeit reserved grid capacity for speculatively locked Data Center sites.',
    summary: 'The AER has published a draft rule change proposition targeting speculative "capacity squatting" in NEM connection queues. Under the proposed rule, connection agreements not reaching FID within 14 months will forfeit reserved MVA capacity.',
    keyInsights: [
      'Will release up to 4.2GW of clogged capacity across NSW, VIC, and QLD.',
      'Protects genuine clean energy and storage developers waiting in queue.',
      'Public submissions close August 30, 2026.'
    ],
    isPushed: true,
    isSaved: true,
    tags: ['AER Rule Change', 'Grid Capacity', 'Speculation Penalty', 'Federal Regulation']
  },
  {
    id: 'item-107',
    title: 'Victoria DEECA Announces $40M Neighborhood Battery & Solar Community Grant Scheme Phase 3',
    source: 'RenewEconomy Australia',
    sourceUrl: 'https://reneweconomy.com.au/vic-deeca-neighborhood-battery-phase-3/',
    publishDate: '2026-07-17 15:40',
    sector: 'Solar',
    region: 'VIC',
    rating: 3,
    ratingReason: 'Distribution level storage and solar policy update in Victoria.',
    summary: 'Victoria State Government launched Phase 3 of its Neighborhood Battery Program, providing matching funds for local councils and distribution network service providers (DNSPs) to deploy community batteries.',
    keyInsights: [
      'Total budget: $40M across 65 community sites.',
      'Focuses on suburban transformer relief and midday solar absorption.',
      'Applications close in October 2026.'
    ],
    isPushed: false,
    isSaved: false,
    tags: ['Victoria', 'Community Battery', 'Distribution Grid', 'Rooftop Solar']
  },
  {
    id: 'item-108',
    title: 'Windlab Proposes 1.2GW Upper Burdekin Wind Farm Expansion with Integrated 400MW BESS in North Queensland',
    source: 'PV Magazine Australia',
    sourceUrl: 'https://www.pv-magazine-australia.com/windlab-upper-burdekin-1-2gw-wind-bess/',
    publishDate: '2026-07-17 11:20',
    sector: 'Wind',
    region: 'QLD',
    rating: 3,
    ratingReason: 'Large scale wind project proposal with BESS integration.',
    summary: 'Developer Windlab has submitted environmental impact documentation for the 1.2GW Upper Burdekin Wind Farm expansion, incorporating a 400MW/1600MWh battery storage facility to firm nocturnal wind generation.',
    keyInsights: [
      'Will feature 180 high-capacity turbines.',
      'Directly feeds Northern QLD Renewable Energy Zone high-voltage corridor.',
      'Commercial operation target 2028.'
    ],
    isPushed: false,
    isSaved: false,
    tags: ['Windlab', 'Wind Farm', 'Queensland', 'Long Duration BESS']
  }
];

export const MOCK_REPORTS: WeeklyReport[] = [
  {
    id: 'rep-2026-w30-mon',
    title: 'Weekly Australia Clean Energy & Data Center Executive Briefing (Monday Strategy)',
    type: 'Monday_Strategic',
    generatedDate: '2026-07-20 08:00',
    period: '2026-07-13 至 2026-07-20',
    executiveSummary: '本周澳洲市场迎来重大政策与商业双重突破。联邦政府与 AEMO 联合出台“绿色数据中心快速审批通道”，规定配备 4 小时以上 BESS 的 AI 数据中心可享 6 个月内极速电网并网评估；同时 NEXTDC 斩获 21 亿澳元绿债推进 300MW 昆州园区并签署 500MW 风光 PPA。监管方面，AER 启动防“囤积电网容量”的新规规则拟定。',
    policyRadarSummary: '1. 联邦政策：AEMO & 联邦能源部推行 BESS+数据中心并网绿道；AER 拟强制清理未动工项目占用的 4.2GW 申请额度。\n2. 州级政策：新州 Central-West Orana REZ 开放 2GW BESS 专项招标；维州启动第3期社区电池计划。',
    topItemIds: ['item-101', 'item-102', 'item-106', 'item-103'],
    keyTakeaways: [
      '新能源与数据中心协同（Colocation）已成为获得澳洲电网优先并网权的最高关键要务（Key Gatekeeper）。',
      '未落地 FID 的数据中心意向项目面临 AER 容量收回风险，市场将加速出清虚高储备。',
      '昆州与新州成为大容量储能（BESS）与 Gigawatt 级数据中心投资最为活跃的热土。'
    ],
    author: 'Antigravity AI Intelligence System'
  },
  {
    id: 'rep-2026-w29-wed',
    title: 'Australia Energy Storage & Infrastructure Operational Update (Wednesday Mid-week)',
    type: 'Wednesday_Operational',
    generatedDate: '2026-07-15 08:00',
    period: '2026-07-08 至 2026-07-15',
    executiveSummary: '年中例行简报：Neoen 200MW 南澳 Goyder 电池项目准备接入 AEMO 市场调频，新州及西澳离线式光储微电网数据中心探索步入试验阶段。',
    policyRadarSummary: '西澳 SWIS 电网压力上升，ARENA 加大对独立离网光储中心的支持力道。',
    topItemIds: ['item-104', 'item-105', 'item-107'],
    keyTakeaways: [
      'Tesla Megapack 与构网型逆变器（Grid-Forming）在南澳市场应用趋于 mature。',
      '离网（Off-grid）光储方案开始被部分计算边缘设施采纳作为应对电网阻塞的备选方案。'
    ],
    author: 'Antigravity AI Intelligence System'
  }
];
