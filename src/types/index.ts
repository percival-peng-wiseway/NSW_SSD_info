export type SectorType = 'Data Center' | 'BESS' | 'Solar' | 'Wind' | 'Grid & Substation' | 'Grid & Policy';

export type StageType = 'Prepare EIS' | 'SEARs' | 'Exhibition' | 'Assessment' | 'Approved' | 'Under Construction';

export type ConsultantCategory = 'Planning' | 'Architectural' | 'Engineering' | 'Environmental' | 'Acoustic' | 'Traffic' | 'Heritage' | 'Access' | 'Main Contractor';

export interface ConsultantInfo {
  role: string;
  companyName: string;
  category: ConsultantCategory;
  description: string;
}

export interface AppendixInfo {
  code: string; // e.g. "Appendix A"
  title: string;
  author: string;
  summary: string;
  fileCount?: number;
}

export interface MajorProject {
  id: string;
  applicationNo: string;
  name: string;
  sector: SectorType;
  lga: string;
  address: string;
  applicant: string;
  stage: StageType;
  capacityMW?: number;
  investmentAmountAud?: string;
  mainContractor?: string;
  architect?: string;
  planningConsultant?: string;
  description: string;
  consultants: ConsultantInfo[];
  appendices: AppendixInfo[];
  officialUrl: string;
  lastUpdated: string;
  keyRisks: string[];
}

export type ViewMode = 'grid' | 'table' | 'consultants';

// Legacy Types for backwards compatibility
export type RegionType = 'Federal' | 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS';
export type ImpactRating = 1 | 2 | 3 | 4 | 5;

export interface IntelligenceItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  publishDate: string;
  sector: SectorType;
  region: RegionType;
  rating: ImpactRating;
  ratingReason: string;
  summary: string;
  keyInsights: string[];
  isPushed: boolean;
  isSaved: boolean;
  rawContent?: string;
  tags: string[];
}

export interface MonitoredSource {
  id: string;
  name: string;
  url: string;
  category: 'Government & Policy' | 'Industry Media' | 'Market Regulator';
  checkIntervalMinutes: number;
  lastScraped: string;
  status: 'active' | 'scraping' | 'error';
  reliabilityScore: number;
  articlesFoundToday: number;
}

export interface WeeklyReport {
  id: string;
  title: string;
  type: 'Monday_Strategic' | 'Wednesday_Operational';
  generatedDate: string;
  period: string;
  executiveSummary: string;
  policyRadarSummary: string;
  topItemIds: string[];
  keyTakeaways: string[];
  author: string;
}
