import type { IntelligenceItem, ImpactRating, SectorType, RegionType, WeeklyReport } from '../types';
import { INITIAL_INTELLIGENCE, MOCK_REPORTS } from '../data/mockData';

// Simulated Real-time Crawler Feed Pool
const CRAWLER_CANDIDATES = [
  {
    title: 'Clean Energy Council (CEC) Demands 6GW National BESS Storage Mandate by 2030 to Power Data Center Surge',
    source: 'RenewEconomy Australia',
    sourceUrl: 'https://reneweconomy.com.au/cec-demands-6gw-bess-mandate-2030-data-centers/',
    sector: 'BESS' as SectorType,
    region: 'Federal' as RegionType,
    summary: 'The Clean Energy Council of Australia issued a whitepaper calling on state and federal energy ministers to enforce a 6GW battery storage capacity quota specifically dedicated to backing up hyper-scale digital infrastructure.',
    tags: ['CEC', 'Policy Target', 'BESS Mandate', 'Data Center Surge']
  },
  {
    title: 'Equinix & Origin Energy Sign 10-Year 150MW Solar PPA to Supply Sydney SY5 & SY6 Data Center Campuses',
    source: 'DCD (Data Center Dynamics) APAC',
    sourceUrl: 'https://www.datacenterdynamics.com/en/news/equinix-origin-energy-150mw-solar-ppa-sydney/',
    sector: 'Data Center' as SectorType,
    region: 'NSW' as RegionType,
    summary: 'Equinix has sealed a long-term corporate Power Purchase Agreement with Origin Energy linked to a new solar farm in the Riverina district, achieving 100% renewable match for Sydney facilities.',
    tags: ['Equinix', 'Origin Energy', 'Corporate PPA', 'Sydney DC', 'Solar']
  },
  {
    title: 'AEMO Issues Early Warning Notification on QLD-NSW Interconnector (QNI) Thermal Limits During Summer Peak',
    source: 'AEMO (Australian Energy Market Operator)',
    sourceUrl: 'https://aemo.com.au/news/qni-thermal-limit-warning-summer-2026',
    sector: 'Grid & Policy' as SectorType,
    region: 'Federal' as RegionType,
    summary: 'AEMO has published an updated Reliability and Emergency Reserve Trader (RERT) notice warning of potential transmission congestion between Queensland and NSW, urging fast deployment of grid-forming BESS.',
    tags: ['AEMO', 'Interconnector', 'Grid Congestion', 'Transmission']
  }
];

export class IntelligenceService {
  private items: IntelligenceItem[] = [...INITIAL_INTELLIGENCE];
  private reports: WeeklyReport[] = [...MOCK_REPORTS];

  public getItems(): IntelligenceItem[] {
    return this.items;
  }

  public getReports(): WeeklyReport[] {
    return this.reports;
  }

  public toggleSaveItem(id: string): IntelligenceItem | undefined {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.isSaved = !item.isSaved;
    }
    return item;
  }

  public addItem(item: IntelligenceItem): void {
    this.items.unshift(item);
  }

  // Automatic AI Rating Engine Simulation
  public calculateRating(title: string, summary: string, sector: SectorType, _region: RegionType): { rating: ImpactRating; reason: string } {
    const text = (title + ' ' + summary).toLowerCase();
    
    // Critical Keywords (Grade 5)
    if (
      text.includes('aemo') && (text.includes('fast-track') || text.includes('rule') || text.includes('framework')) ||
      text.includes('aer') && text.includes('penalty') ||
      (text.includes('billion') || text.includes('2.1b') || text.includes('gw')) && text.includes('data center') ||
      text.includes('grid connection queue')
    ) {
      return {
        rating: 5,
        reason: 'National policy/regulatory impact, high-value ($1B+) capital investment, or major AEMO grid access rule change.'
      };
    }

    // High Keywords (Grade 4)
    if (
      text.includes('arena') ||
      text.includes('bess tender') ||
      text.includes('neoen') ||
      text.includes('ppa') ||
      text.includes('rez') ||
      text.includes('storage duration')
    ) {
      return {
        rating: 4,
        reason: 'State policy initiative, large utility-scale renewable PPA, or major ARENA grant funding.'
      };
    }

    // Medium Keywords (Grade 3)
    if (sector === 'Solar' || sector === 'Wind' || sector === 'BESS') {
      return {
        rating: 3,
        reason: 'Regional renewable asset development, commissioning phase, or local distribution network policy.'
      };
    }

    return {
      rating: 2,
      reason: 'General industry update or minor market movement.'
    };
  }

  // Trigger simulated live web scraping
  public triggerLiveScrape(): { newItem: IntelligenceItem; isPushTriggered: boolean } {
    const candidate = CRAWLER_CANDIDATES[Math.floor(Math.random() * CRAWLER_CANDIDATES.length)];
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16).replace('T', ' ');

    const { rating, reason } = this.calculateRating(candidate.title, candidate.summary, candidate.sector, candidate.region);
    const isPushed = rating === 5; // Automatic push notification for Grade 5

    const newItem: IntelligenceItem = {
      id: 'live-' + Date.now(),
      title: candidate.title,
      source: candidate.source,
      sourceUrl: candidate.sourceUrl,
      publishDate: formattedDate,
      sector: candidate.sector,
      region: candidate.region,
      rating: rating,
      ratingReason: reason,
      summary: candidate.summary,
      keyInsights: [
        `Direct impact on ${candidate.region} region power planning.`,
        'Extracted automatically via AI Intelligence Crawler at ' + formattedDate,
        `Relevance Score: ${rating * 20}%`
      ],
      isPushed: isPushed,
      isSaved: rating >= 4, // Auto-save grade 4 & 5
      tags: candidate.tags
    };

    this.items.unshift(newItem);
    return { newItem, isPushTriggered: isPushed };
  }

  // Generate Automated Monday or Wednesday Report Page
  public generateWeeklyReport(type: 'Monday_Strategic' | 'Wednesday_Operational'): WeeklyReport {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const topItems = this.items.filter(i => i.rating >= 4).slice(0, 4);

    const isMon = type === 'Monday_Strategic';
    const reportTitle = isMon
      ? `Australia Clean Energy & Data Center Weekly Strategic Page (${dateStr})`
      : `Australia Energy & Grid Infrastructure Operational Update Page (${dateStr})`;

    const execSummary = isMon
      ? `【周一战略速报】在过去一周内，澳洲新能源与数据中心领域捕获到 ${this.items.length} 条有效情报，其中高权重（Grade 4-5）重要政策与项目达 ${topItems.length} 项。AEMO 与 AER 重磅政策出台，数据中心与 BESS 构网联合已成为获得快速并网许可的决定性前提。`
      : `【周三中周运营简报】本中周聚焦于澳洲各州配网、社区储能（Community BESS）以及跨州互联线（Interconnector）运营动态。各企业加速通过 long-term PPA 锁定理电池与太阳能容量。`;

    const policySummary = `1. 联邦/AEMO: 推进高评级规则落地，防止炒作性挤占并网容量。\n2. 各州动态 (NSW/QLD/VIC): 新州 Central-West Orana REZ 及昆州 Gigawatt 级园区加速推展。`;

    const newReport: WeeklyReport = {
      id: `rep-${Date.now()}`,
      title: reportTitle,
      type: type,
      generatedDate: now.toISOString().slice(0, 16).replace('T', ' '),
      period: `近期 7 天情报精选`,
      executiveSummary: execSummary,
      policyRadarSummary: policySummary,
      topItemIds: topItems.map(i => i.id),
      keyTakeaways: [
        '绿色数据中心（Green Data Center）需求持续驱动大容量 BESS 储能系统及 PPA 签约暴涨。',
        '建议重点监控 AEMO Connections Procedure 细则调整及 NSW REZ 第二批招标窗口。',
        '针对五级极高重要性情报，系统已完成实时推送，建议优先评估其对投资决策与商业模式的影响。'
      ],
      author: 'Antigravity Automated Intelligence System'
    };

    this.reports.unshift(newReport);
    return newReport;
  }
}

export const intelligenceService = new IntelligenceService();
