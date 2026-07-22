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
