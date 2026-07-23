import type { MajorProject, ConsultantCategory } from '../types';

export const MAJOR_PROJECTS_DATA: MajorProject[] = [
  {
    id: 'NSW-001',
    applicationNo: 'SSD-92743706',
    name: "Mamre Road Data Centre Campus",
    sector: 'Data Center',
    lga: "Penrith City Council",
    address: "706-752 Mamre Road, Kemps Creek NSW",
    applicant: "KNBDC SYD4",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 1000.0,
    investmentAmountAud: '$6000 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Mamre Road Data Centre Campus at 706-752 Mamre Road, Kemps Creek NSW with proposed capacity of 1000.0MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/mamre-road-data-centre-campus',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Appendix B",
            "category": "Early Consultation",
            "title": "Appendix B - Preliminary Concept Architectural Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Appendix_B_-_Preliminary_Concept_Architectural_Plans.pdf"
      },
      {
            "code": "Appendix A",
            "category": "Early Consultation",
            "title": "Appendix A - Scoping Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Appendix_A_-_Scoping_Summary_Table.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Project-Specific SEARs - 706-752 Mamre Road, Kemps Creek",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Project-Specific_SEARs_-_706-752_Mamre_Road__Kemps_Creek.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250903013525",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Request_for_SEARs_20250903013525.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Attachment 1 - SEARs Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Attachment_1_-_SEARs_Table.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "Attachment 2 - Government Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Attachment_2_-_Government_Advice.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Sydney Water - DA Info Sheet",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Sydney_Water_-_DA_Info_Sheet.pdf"
      },
      {
            "code": "Doc 09",
            "category": "Agency Advice",
            "title": "Sydney Water - Data Form",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-92743706.",
            "downloadUrl": "/documents/SSD-92743706/Sydney_Water_-_Data_Form.pdf"
      }
]
  },
  {
    id: 'NSW-002',
    applicationNo: 'SSD-108864209',
    name: "NEXTDC S4 Data Centre Phase 2, Horsley Park",
    sector: 'Data Center',
    lga: "Fairfield City Council",
    address: "6 Johnston Crescent, Horsley Park NSW 2175",
    applicant: "NEXTDC Limited",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 134.4,
    investmentAmountAud: '$806 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for NEXTDC S4 Data Centre Phase 2, Horsley Park at 6 Johnston Crescent, Horsley Park NSW 2175 with proposed capacity of 134.4MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s4-data-centre-phase-2-horsley-park',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Appendix B",
            "category": "Early Consultation",
            "title": "Appendix B - Preliminary Viewpoint Locations",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_B_-_Preliminary_Viewpoint_Locations.pdf"
      },
      {
            "code": "Appendix D",
            "category": "Early Consultation",
            "title": "Appendix D - Recycled Water Memo",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_D_-_Recycled_Water_Memo.pdf"
      },
      {
            "code": "Appendix F",
            "category": "Early Consultation",
            "title": "Appendix F - Near Neighbour Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_F_-_Near_Neighbour_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Early Consultation",
            "title": "Site Context Map - NEXTDC S4 (Phase 2)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Site_Context_Map_-_NEXTDC_S4__Phase_2_.pdf"
      },
      {
            "code": "Appendix G",
            "category": "Early Consultation",
            "title": "Appendix G - ACHAR Methodology and Background Information",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_G_-_ACHAR_Methodology_and_Background_Information.pdf"
      },
      {
            "code": "Appendix E",
            "category": "Early Consultation",
            "title": "Appendix E - Water Technical Memorandum",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_E_-_Water_Technical_Memorandum.pdf"
      },
      {
            "code": "Appendix C",
            "category": "Early Consultation",
            "title": "Appendix C - Infrastructure Servicing Strategy",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_C_-_Infrastructure_Servicing_Strategy.pdf"
      },
      {
            "code": "Appendix A",
            "category": "Early Consultation",
            "title": "Appendix A - Concept Architectural Design Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_A_-_Concept_Architectural_Design_Report.pdf"
      },
      {
            "code": "Appendix H",
            "category": "Request for SEARs",
            "title": "Appendix H - BDAR Waiver Request",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Appendix_H_-_BDAR_Waiver_Request.pdf"
      },
      {
            "code": "Doc 10",
            "category": "Request for SEARs",
            "title": "Scoping Report - S4 Phase 2_Final",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Scoping_Report_-_S4_Phase_2_Final.pdf"
      },
      {
            "code": "Doc 11",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20260312011615",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/Request_for_SEARs_20260312011615.pdf"
      },
      {
            "code": "Doc 12",
            "category": "Agency Advice",
            "title": "SSD-SSI Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-108864209.",
            "downloadUrl": "/documents/SSD-108864209/SSD-SSI_Issued_SEARs.pdf"
      }
]
  },
  {
    id: 'NSW-003',
    applicationNo: 'SSD-41589232-Mod-2',
    name: "51 Huntingwood Drive Data Centre MOD 2 - Design Updates",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "51 Huntingwood Drive, Huntingwood",
    applicant: "Undisclosed Applicant",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 120,
    investmentAmountAud: '$720 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 51 Huntingwood Drive Data Centre MOD 2 - Design Updates at 51 Huntingwood Drive, Huntingwood with proposed capacity of 120MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/51-huntingwood-drive-data-centre-mod-2-design-updates',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-41589232-Mod-2 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-41589232-Mod-2 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-41589232-Mod-2 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-41589232-Mod-2 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-41589232-Mod-2 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-2 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-41589232-Mod-2 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-2 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-41589232-Mod-2 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-2 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-2.",
            "downloadUrl": "/documents/SSD-41589232-Mod-2/SSD-41589232-Mod-2_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-004',
    applicationNo: 'SSD-63741210-Mod-1',
    name: "NEXTDC S4 Modification 1 - Design Modifications",
    sector: 'Data Center',
    lga: "Fairfield City Council",
    address: "16 Johnston Crescent, Horsley Park",
    applicant: "NEXTDC",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 232,
    investmentAmountAud: '$1392 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for NEXTDC S4 Modification 1 - Design Modifications at 16 Johnston Crescent, Horsley Park with proposed capacity of 232MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s4-modification-1-design-modifications',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-63741210-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-63741210-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-63741210-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-63741210-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-63741210-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-63741210-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-63741210-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-63741210-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-63741210-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-63741210-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-63741210-Mod-1.",
            "downloadUrl": "/documents/SSD-63741210-Mod-1/SSD-63741210-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-005',
    applicationNo: 'SSD-82211208',
    name: "STACK SYD01 Data Centre, Erskine Park",
    sector: 'Data Center',
    lga: "Penrith City Council",
    address: "78 Lockwood Road, Erskine Park",
    applicant: "STACK Infrastructure",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 450,
    investmentAmountAud: '$2700 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for STACK SYD01 Data Centre, Erskine Park at 78 Lockwood Road, Erskine Park with proposed capacity of 450MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/stack-syd01-data-centre-erskine-park',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Planning Cover Letter - 78 Lockwood Road",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-82211208.",
            "downloadUrl": "/documents/SSD-82211208/Planning_Cover_Letter_-_78_Lockwood_Road.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250407234709",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-82211208.",
            "downloadUrl": "/documents/SSD-82211208/Request_for_SEARs_20250407234709.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-82211208.",
            "downloadUrl": "/documents/SSD-82211208/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres9174166",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-82211208.",
            "downloadUrl": "/documents/SSD-82211208/Industry_Specific_SEARs_Data_Storage_Centres9174166.pdf"
      }
]
  },
  {
    id: 'NSW-006',
    applicationNo: 'SSD-91297457',
    name: "23-25 Waterloo Road Data Centre",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "23-25 Waterloo Road, Macquarie Park",
    applicant: "Greenbox Architecture",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 70,
    investmentAmountAud: '$420 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 23-25 Waterloo Road Data Centre at 23-25 Waterloo Road, Macquarie Park with proposed capacity of 70MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/23-25-waterloo-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Combined Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/Combined_Plans.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "WTJ25-099_Project-Specific SEARs_23-25 Waterloo Road",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/WTJ25-099_Project-Specific_SEARs_23-25_Waterloo_Road.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250819005815",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/Request_for_SEARs_20250819005815.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-91297457 SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/SSD-91297457_SEARs_Cover_Letter.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "SSD-91297457 Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/SSD-91297457_Issued_SEARs.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-91297457.",
            "downloadUrl": "/documents/SSD-91297457/Attachment_2_-_Agency_Advice.pdf"
      }
]
  },
  {
    id: 'NSW-007',
    applicationNo: 'SSD-128819490',
    name: "Kurri Kurri Data Centre",
    sector: 'Data Center',
    lga: "Cessnock City Council",
    address: "145 Bishops Bridge Road, Sawyers Gully",
    applicant: "ADW Johnson",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 540,
    investmentAmountAud: '$3240 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Kurri Kurri Data Centre at 145 Bishops Bridge Road, Sawyers Gully with proposed capacity of 540MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/kurri-kurri-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Kurri Kurri Data Centre Scoping Report - 16-06-2026",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Kurri_Kurri_Data_Centre_Scoping_Report_-_16-06-2026.pdf"
      },
      {
            "code": "Appendix 1",
            "category": "Request for SEARs",
            "title": "Appendix 1 - Concept Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_1_-_Concept_Plans.pdf"
      },
      {
            "code": "Appendix 2",
            "category": "Request for SEARs",
            "title": "Appendix 2 - Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_2_-_Summary_Table.pdf"
      },
      {
            "code": "Appendix 3",
            "category": "Request for SEARs",
            "title": "Appendix 3 - SAS",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_3_-_SAS.pdf"
      },
      {
            "code": "Appendix 4",
            "category": "Request for SEARs",
            "title": "Appendix 4 - Biodiversity Certification",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_4_-_Biodiversity_Certification.pdf"
      },
      {
            "code": "Appendix 4a",
            "category": "Request for SEARs",
            "title": "Appendix 4a - Ceritification Map",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_4a_-_Ceritification_Map.pdf"
      },
      {
            "code": "Appendix 5",
            "category": "Request for SEARs",
            "title": "Appendix 5 - Previous BDAR",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_5_-_Previous_BDAR.pdf"
      },
      {
            "code": "Appendix 7",
            "category": "Request for SEARs",
            "title": "Appendix 7 - Proposed CDC Works",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Appendix_7_-_Proposed_CDC_Works.pdf"
      },
      {
            "code": "Doc 09",
            "category": "Agency Advice",
            "title": "Kurri Kurri DC - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Kurri_Kurri_DC_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 10",
            "category": "Agency Advice",
            "title": "Kurri Kurri DC - SEARs Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Kurri_Kurri_DC_-_SEARs_Table.pdf"
      },
      {
            "code": "Doc 11",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-128819490.",
            "downloadUrl": "/documents/SSD-128819490/Attachment_2_-_Agency_Advice.pdf"
      }
]
  },
  {
    id: 'NSW-008',
    applicationNo: 'SSD-101067971',
    name: "Project Atlas Data Centre Eastern Creek",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "10 Roberts Road, Eastern Creek",
    applicant: "Goodman Group",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 500,
    investmentAmountAud: '$3000 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Atlas Data Centre Eastern Creek at 10 Roberts Road, Eastern Creek with proposed capacity of 500MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-atlas-data-centre-eastern-creek',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Appendix 1",
            "category": "Early Consultation",
            "title": "Appendix 1 - Draft Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Appendix_1_-_Draft_Plans.pdf"
      },
      {
            "code": "Appendix 2",
            "category": "Early Consultation",
            "title": "Appendix 2 - Scoping Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Appendix_2_-_Scoping_Summary_Table.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Scoping Report - Project Atlas",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Scoping_Report_-_Project_Atlas.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20251202204703",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Request_for_SEARs_20251202204703.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "Attachment 2 - Government Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Attachment_2_-_Government_Advice.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Sydney Water - DA Info Sheet",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Sydney_Water_-_DA_Info_Sheet.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Sydney Water - Data Form",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Sydney_Water_-_Data_Form.pdf"
      },
      {
            "code": "Doc 09",
            "category": "Agency Advice",
            "title": "Attachment 1 - SEARs Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-101067971.",
            "downloadUrl": "/documents/SSD-101067971/Attachment_1_-_SEARs_Table.pdf"
      }
]
  },
  {
    id: 'NSW-009',
    applicationNo: 'SSD-80814238',
    name: "Road 1 Data Centre",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "1-5 Khartoum Road, Macquarie Park",
    applicant: "Stockland",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 34.3,
    investmentAmountAud: '$205 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Road 1 Data Centre at 1-5 Khartoum Road, Macquarie Park with proposed capacity of 34.3MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/road-1-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "MPark_Building H_SEARS_Diagrams",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/MPark_Building_H_SEARS_Diagrams.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "1-5 Khartoum Road Macquarie Park - Data Centre",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/1-5_Khartoum_Road_Macquarie_Park_-_Data_Centre.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "MPark_Building H_SEARS_Diagrams",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/MPark_Building_H_SEARS_Diagrams.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250309233635",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/Request_for_SEARs_20250309233635.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-80814238.",
            "downloadUrl": "/documents/SSD-80814238/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-010',
    applicationNo: 'SSD-69223466',
    name: "Project Pluto Data Centre",
    sector: 'Data Center',
    lga: "Cumberland Council",
    address: "132 McCredie Road, Guildford West",
    applicant: "Goodman Group",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 126,
    investmentAmountAud: '$756 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Pluto Data Centre at 132 McCredie Road, Guildford West with proposed capacity of 126MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-pluto-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "SEARS Request - Project Pluto_28.03.24_",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-69223466.",
            "downloadUrl": "/documents/SSD-69223466/SEARS_Request_-_Project_Pluto_28_03_24_.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240402024722",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-69223466.",
            "downloadUrl": "/documents/SSD-69223466/Request_for_SEARs_20240402024722.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-69223466.",
            "downloadUrl": "/documents/SSD-69223466/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-69223466.",
            "downloadUrl": "/documents/SSD-69223466/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-011',
    applicationNo: 'SSD-81928961',
    name: "Brookhollow Avenue Data Centre Expansion, Norwest",
    sector: 'Data Center',
    lga: "The Hills Shire Council",
    address: "3 Brookhollow Avenue, Norwest",
    applicant: "GreenSquareDC",
    stage: 'Exhibition' as MajorProject['stage'],
    capacityMW: 96,
    investmentAmountAud: '$576 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Brookhollow Avenue Data Centre Expansion, Norwest at 3 Brookhollow Avenue, Norwest with proposed capacity of 96MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/brookhollow-avenue-data-centre-expansion-norwest',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "A1 - Architectural Plans - 3 Brookhollow Avenue, Norwest",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-81928961.",
            "downloadUrl": "/documents/SSD-81928961/A1_-_Architectural_Plans_-_3_Brookhollow_Avenue__Norwest.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SEARs Request - 3 Brookhollow Avenue Norwest_For Issue",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-81928961.",
            "downloadUrl": "/documents/SSD-81928961/SEARs_Request_-_3_Brookhollow_Avenue_Norwest_For_Issue.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-81928961.",
            "downloadUrl": "/documents/SSD-81928961/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-81928961.",
            "downloadUrl": "/documents/SSD-81928961/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-012',
    applicationNo: 'SSD-73761707',
    name: "Glendenning Road Data Centre",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "2 Glendenning Road, Glendenning",
    applicant: "Lehr Consultants",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 202.4,
    investmentAmountAud: '$1214 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Glendenning Road Data Centre at 2 Glendenning Road, Glendenning with proposed capacity of 202.4MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/glendenning-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "WTJ24-140_Data Centre Request for SEARS",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-73761707.",
            "downloadUrl": "/documents/SSD-73761707/WTJ24-140_Data_Centre_Request_for_SEARS.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240723013112",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-73761707.",
            "downloadUrl": "/documents/SSD-73761707/Request_for_SEARs_20240723013112.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-73761707.",
            "downloadUrl": "/documents/SSD-73761707/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-73761707.",
            "downloadUrl": "/documents/SSD-73761707/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-013',
    applicationNo: 'SSD-74069708',
    name: "Project Apollo Data Centre Macquarie Park",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "4-10 Talavera Road, Macquarie Park",
    applicant: "Goodman Group",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 90,
    investmentAmountAud: '$540 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Apollo Data Centre Macquarie Park at 4-10 Talavera Road, Macquarie Park with proposed capacity of 90MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-apollo-data-centre-macquarie-park',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Project Apollo Data Centre - Drawings",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-74069708.",
            "downloadUrl": "/documents/SSD-74069708/Project_Apollo_Data_Centre_-_Drawings.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Project Apollo Data Centre - SEARs Request",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-74069708.",
            "downloadUrl": "/documents/SSD-74069708/Project_Apollo_Data_Centre_-_SEARs_Request.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240728224911",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-74069708.",
            "downloadUrl": "/documents/SSD-74069708/Request_for_SEARs_20240728224911.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-74069708 Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-74069708.",
            "downloadUrl": "/documents/SSD-74069708/SSD-74069708_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "IS SEARs - Data Storage Centres (SSD-74069708)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-74069708.",
            "downloadUrl": "/documents/SSD-74069708/IS_SEARs_-_Data_Storage_Centres__SSD-74069708_.pdf"
      }
]
  },
  {
    id: 'NSW-014',
    applicationNo: 'SSD-67407231',
    name: "Apollo Place Data Centre",
    sector: 'Data Center',
    lga: "Lane Cove Council",
    address: "1 Sirius Road / 1 Apollo Place, Lane Cove West",
    applicant: "EMKC Cubed",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 45,
    investmentAmountAud: '$270 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Apollo Place Data Centre at 1 Sirius Road / 1 Apollo Place, Lane Cove West with proposed capacity of 45MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/apollo-place-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Draft 1&2Apollo Architectural Drawings",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-67407231.",
            "downloadUrl": "/documents/SSD-67407231/Draft_1_2Apollo_Architectural_Drawings.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "Apollo Place Lane Cove - SEARs Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-67407231.",
            "downloadUrl": "/documents/SSD-67407231/Apollo_Place_Lane_Cove_-_SEARs_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-67407231.",
            "downloadUrl": "/documents/SSD-67407231/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-67407231 SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-67407231.",
            "downloadUrl": "/documents/SSD-67407231/SSD-67407231_SEARs_Industry_Specific_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-015',
    applicationNo: 'SSD-113934740',
    name: "NEXTDC S7 Data Centre, Eastern Creek",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "1 Kangaroo Avenue, Eastern Creek",
    applicant: "NEXTDC",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 612,
    investmentAmountAud: '$3672 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for NEXTDC S7 Data Centre, Eastern Creek at 1 Kangaroo Avenue, Eastern Creek with proposed capacity of 612MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s7-data-centre-eastern-creek',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Enscape_2026-03-19-14-56-44_View 1.2_From Northeast",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Enscape_2026-03-19-14-56-44_View_1_2_From_Northeast.pdf"
      },
      {
            "code": "Appendix E",
            "category": "Early Consultation",
            "title": "Appendix E - Preliminary Visual Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_E_-_Preliminary_Visual_Advice.pdf"
      },
      {
            "code": "Appendix F",
            "category": "Early Consultation",
            "title": "Appendix F - Technical Note re Plant and Equipment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_F_-_Technical_Note_re_Plant_and_Equipment.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Early Consultation",
            "title": "Enscape_2026-03-19-14-57-05_View 5_From Northwest",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Enscape_2026-03-19-14-57-05_View_5_From_Northwest.pdf"
      },
      {
            "code": "Appendix D",
            "category": "Early Consultation",
            "title": "Appendix D - Acid Sulfate Soils Risk Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_D_-_Acid_Sulfate_Soils_Risk_Assessment.pdf"
      },
      {
            "code": "Appendix G",
            "category": "Early Consultation",
            "title": "Appendix G - SEARs Technical Assessment Methodology",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_G_-_SEARs_Technical_Assessment_Methodology.pdf"
      },
      {
            "code": "Appendix A",
            "category": "Early Consultation",
            "title": "Appendix A - Concept Architectural Plan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_A_-_Concept_Architectural_Plan.pdf"
      },
      {
            "code": "Appendix B",
            "category": "Early Consultation",
            "title": "Appendix B - Design Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Appendix_B_-_Design_Report.pdf"
      },
      {
            "code": "Doc 09",
            "category": "Early Consultation",
            "title": "Enscape_2026-03-19-14-57-28_View 8_From Southwest",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Enscape_2026-03-19-14-57-28_View_8_From_Southwest.pdf"
      },
      {
            "code": "Doc 10",
            "category": "Early Consultation",
            "title": "Enscape_2026-03-19-14-58-05_View 12_Eastern Boundary",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Enscape_2026-03-19-14-58-05_View_12_Eastern_Boundary.pdf"
      },
      {
            "code": "Doc 11",
            "category": "Early Consultation",
            "title": "Enscape_2026-03-19-14-57-45_View 9.2_From South",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Enscape_2026-03-19-14-57-45_View_9_2_From_South.pdf"
      },
      {
            "code": "Doc 12",
            "category": "Request for SEARs",
            "title": "Final Scoping Report - S7",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Final_Scoping_Report_-_S7.pdf"
      },
      {
            "code": "Doc 13",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20260409040358",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Request_for_SEARs_20260409040358.pdf"
      },
      {
            "code": "Doc 14",
            "category": "Agency Advice",
            "title": "SSD Issued SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/SSD_Issued_SEARs_Cover_Letter.pdf"
      },
      {
            "code": "Doc 15",
            "category": "Agency Advice",
            "title": "SSD Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/SSD_Issued_SEARs.pdf"
      },
      {
            "code": "Doc 16",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-113934740.",
            "downloadUrl": "/documents/SSD-113934740/Attachment_2_-_Agency_Advice.pdf"
      }
]
  },
  {
    id: 'NSW-016',
    applicationNo: 'SSD-66777221-Mod-3',
    name: "Mod 3 - Lanceley Place Data Centre - Fire access",
    sector: 'Data Center',
    lga: "Willoughby City Council",
    address: "Artarmon",
    applicant: "Goodman Group",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 80,
    investmentAmountAud: '$480 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Mod 3 - Lanceley Place Data Centre - Fire access at Artarmon with proposed capacity of 80MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/mod-3-lanceley-place-data-centre-fire-access-and-switchroom',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-66777221-Mod-3 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-66777221-Mod-3 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-66777221-Mod-3 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-66777221-Mod-3 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-66777221-Mod-3 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-3 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-66777221-Mod-3 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-3 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-66777221-Mod-3 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-3 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-3.",
            "downloadUrl": "/documents/SSD-66777221-Mod-3/SSD-66777221-Mod-3_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-017',
    applicationNo: 'SSD-80018208',
    name: "Julius Avenue Data Centre",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "6-8 Julius Avenue, North Ryde",
    applicant: "ISPT / IFM Investors",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 170,
    investmentAmountAud: '$1020 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Julius Avenue Data Centre at 6-8 Julius Avenue, North Ryde with proposed capacity of 170MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/julius-avenue-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "SEARs Request - Julius Avenue Data Centre",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-80018208.",
            "downloadUrl": "/documents/SSD-80018208/SEARs_Request_-_Julius_Avenue_Data_Centre.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250212000559",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-80018208.",
            "downloadUrl": "/documents/SSD-80018208/Request_for_SEARs_20250212000559.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter (SSD-80018208)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-80018208.",
            "downloadUrl": "/documents/SSD-80018208/SSD_SEARs_Industry_Specific_Cover_Letter__SSD-80018208_.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "IS SEARs SSD-80018208",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-80018208.",
            "downloadUrl": "/documents/SSD-80018208/IS_SEARs_SSD-80018208.pdf"
      }
]
  },
  {
    id: 'NSW-018',
    applicationNo: 'SSD-68013714-Mod-1',
    name: "Modification 1 - Substation layout changes",
    sector: 'Data Center',
    lga: "Camden Council",
    address: "43-61 Turner Road, Gregory Hills",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 40,
    investmentAmountAud: '$240 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 1 - Substation layout changes at 43-61 Turner Road, Gregory Hills with proposed capacity of 40MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-1-substation-layout-changes',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-68013714-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-68013714-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-68013714-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-68013714-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-68013714-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-68013714-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-68013714-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-68013714-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-68013714-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-68013714-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-68013714-Mod-1.",
            "downloadUrl": "/documents/SSD-68013714-Mod-1/SSD-68013714-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-019',
    applicationNo: 'SSD-70889211',
    name: "Marsden Park Data Centre",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "105/113 Hollinsworth Road, Marsden Park",
    applicant: "CDC Data Centres",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 504,
    investmentAmountAud: '$3024 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Marsden Park Data Centre at 105/113 Hollinsworth Road, Marsden Park with proposed capacity of 504MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/marsden-park-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Scoping Architectural Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Scoping_Architectural_Plans.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "Site Aerial - Hollinsworth",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Site_Aerial_-_Hollinsworth.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Early Consultation",
            "title": "Site Context - Hollinsworth_Maps_Site Context_Site Context",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Site_Context_-_Hollinsworth_Maps_Site_Context_Site_Context.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "PS SEARS Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/PS_SEARS_Letter.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240516052651",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Request_for_SEARs_20240516052651.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice (HNSW)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Attachment_2_-_Agency_Advice__HNSW_.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "SSD-SSI Issued SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/SSD-SSI_Issued_SEARs_Cover_Letter.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/Attachment_2_-_Agency_Advice.pdf"
      },
      {
            "code": "Doc 09",
            "category": "Agency Advice",
            "title": "SSD-SSI Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-70889211.",
            "downloadUrl": "/documents/SSD-70889211/SSD-SSI_Issued_SEARs.pdf"
      }
]
  },
  {
    id: 'NSW-020',
    applicationNo: 'SSD-63235720',
    name: "1-5 Khartoum Road Data Centre",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "Macquarie Park",
    applicant: "Stockland",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 35,
    investmentAmountAud: '$210 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 1-5 Khartoum Road Data Centre at Macquarie Park with proposed capacity of 35MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/1-5-khartoum-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Request for Industry Specific SEARs v2",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63235720.",
            "downloadUrl": "/documents/SSD-63235720/Request_for_Industry_Specific_SEARs_v2.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20231010041802",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63235720.",
            "downloadUrl": "/documents/SSD-63235720/Request_for_SEARs_20231010041802.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63235720.",
            "downloadUrl": "/documents/SSD-63235720/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres8122885",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63235720.",
            "downloadUrl": "/documents/SSD-63235720/Industry_Specific_SEARs_Data_Storage_Centres8122885.pdf"
      }
]
  },
  {
    id: 'NSW-021',
    applicationNo: 'SSD-59516710',
    name: "Waterloo Road Data Centre (ESR Developments)",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "44-50 Waterloo Road, Macquarie Park",
    applicant: "ESR Developments",
    stage: 'Exhibition' as MajorProject['stage'],
    capacityMW: 60,
    investmentAmountAud: '$360 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Waterloo Road Data Centre (ESR Developments) at 44-50 Waterloo Road, Macquarie Park with proposed capacity of 60MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/waterloo-road-data-centre-esr-developments',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Agency Advice",
            "title": "IS SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-59516710.",
            "downloadUrl": "/documents/SSD-59516710/IS_SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Agency Advice",
            "title": "IS SEARs - Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-59516710.",
            "downloadUrl": "/documents/SSD-59516710/IS_SEARs_-_Requirements.pdf"
      }
]
  },
  {
    id: 'NSW-022',
    applicationNo: 'SSD-66777221',
    name: "Lanceley Place Data Centre, Artarmon",
    sector: 'Data Center',
    lga: "Willoughby City Council",
    address: "2-8 Lanceley Place, Artarmon",
    applicant: "Goodman Group",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 80,
    investmentAmountAud: '$480 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Lanceley Place Data Centre, Artarmon at 2-8 Lanceley Place, Artarmon with proposed capacity of 80MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/lanceley-place-data-centre-artarmon',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Site Plan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-66777221.",
            "downloadUrl": "/documents/SSD-66777221/Site_Plan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SEARS Request - Data Centre - 2-8 Lanceley Place",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-66777221.",
            "downloadUrl": "/documents/SSD-66777221/SEARS_Request_-_Data_Centre_-_2-8_Lanceley_Place.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240117235248",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-66777221.",
            "downloadUrl": "/documents/SSD-66777221/Request_for_SEARs_20240117235248.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-66777221.",
            "downloadUrl": "/documents/SSD-66777221/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-66777221.",
            "downloadUrl": "/documents/SSD-66777221/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-023',
    applicationNo: 'SSD-63168959',
    name: "NEXTDC S5 Data Centre and Innovation Hub",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "269 Lane Cove Road, Macquarie Park",
    applicant: "NEXTDC",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 150,
    investmentAmountAud: '$900 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for NEXTDC S5 Data Centre and Innovation Hub at 269 Lane Cove Road, Macquarie Park with proposed capacity of 150MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s5-data-centre-and-innovation-hub',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Concept Architectural Plans for Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/Concept_Architectural_Plans_for_Scoping_Report.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "NextDC S5 Scoping Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/NextDC_S5_Scoping_Summary_Table.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "NextDC S5 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/NextDC_S5_Scoping_Report.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20231008231735",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/Request_for_SEARs_20231008231735.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "Issued SEARs (SSD-63168959)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/Issued_SEARs__SSD-63168959_.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "SEARs Cover Letter (SSD-63168959)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/SEARs_Cover_Letter__SSD-63168959_.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "Attachment 2 (SSD-63168959)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63168959.",
            "downloadUrl": "/documents/SSD-63168959/Attachment_2__SSD-63168959_.pdf"
      }
]
  },
  {
    id: 'NSW-024',
    applicationNo: 'SSD-82052708',
    name: "Project Mars Data Centre",
    sector: 'Data Center',
    lga: "Lane Cove Council",
    address: "12 Mars Road, Lane Cove West",
    applicant: "Goodman Group",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 90,
    investmentAmountAud: '$540 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Mars Data Centre at 12 Mars Road, Lane Cove West with proposed capacity of 90MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-mars-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Appendix A",
            "category": "Early Consultation",
            "title": "Appendix A - Preliminary Architecture Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-82052708.",
            "downloadUrl": "/documents/SSD-82052708/Appendix_A_-_Preliminary_Architecture_Plans.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Project Mars Data Centre - SEARs Request_18.03.25",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-82052708.",
            "downloadUrl": "/documents/SSD-82052708/Project_Mars_Data_Centre_-_SEARs_Request_18_03_25.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20250403222831",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-82052708.",
            "downloadUrl": "/documents/SSD-82052708/Request_for_SEARs_20250403222831.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "IS SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-82052708.",
            "downloadUrl": "/documents/SSD-82052708/IS_SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "IS SEARs - Data Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-82052708.",
            "downloadUrl": "/documents/SSD-82052708/IS_SEARs_-_Data_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-025',
    applicationNo: 'SSD-41589232',
    name: "51 Huntingwood Drive Data Centre",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "51 Huntingwood Drive, Huntingwood",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 120,
    investmentAmountAud: '$720 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 51 Huntingwood Drive Data Centre at 51 Huntingwood Drive, Huntingwood with proposed capacity of 120MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/51-huntingwood-drive-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Scoping Report - 51 Huntingwood Dr",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-41589232.",
            "downloadUrl": "/documents/SSD-41589232/Scoping_Report_-_51_Huntingwood_Dr.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20220425234811",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-41589232.",
            "downloadUrl": "/documents/SSD-41589232/Request_for_SEARs_20220425234811.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SEARs Cover Letter Industry Specific_02052022_013810",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-41589232.",
            "downloadUrl": "/documents/SSD-41589232/SEARs_Cover_Letter_Industry_Specific_02052022_013810.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres_02052022_0138",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-41589232.",
            "downloadUrl": "/documents/SSD-41589232/Industry_Specific_SEARs_Data_Storage_Centres_02052022_0138.pdf"
      }
]
  },
  {
    id: 'NSW-026',
    applicationNo: 'SSD-108835458',
    name: "Mars Road Data Centre",
    sector: 'Data Center',
    lga: "Lane Cove Council",
    address: "3-4 Apollo Place / 87-91 Mars Road",
    applicant: "Goodman Group",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 140,
    investmentAmountAud: '$840 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Mars Road Data Centre at 3-4 Apollo Place / 87-91 Mars Road with proposed capacity of 140MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/mars-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Appendix 1",
            "category": "Early Consultation",
            "title": "Appendix 1 - Preliminary Architectural Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/Appendix_1_-_Preliminary_Architectural_Plans.pdf"
      },
      {
            "code": "Appendix 2",
            "category": "Early Consultation",
            "title": "Appendix 2 - Preliminary Massing Montages",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/Appendix_2_-_Preliminary_Massing_Montages.pdf"
      },
      {
            "code": "Appendix 3",
            "category": "Request for SEARs",
            "title": "Appendix 3 - Preliminary Finishes Schedule",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/Appendix_3_-_Preliminary_Finishes_Schedule.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "SEARs Request -  Mars Road Data Centre",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/SEARs_Request_-__Mars_Road_Data_Centre.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20260311222156",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/Request_for_SEARs_20260311222156.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "SSD-108835458 Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/SSD-108835458_Issued_SEARs.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "SSD-108835458 SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/SSD-108835458_SEARs_Cover_Letter.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-108835458.",
            "downloadUrl": "/documents/SSD-108835458/Attachment_2_-_Agency_Advice.pdf"
      }
]
  },
  {
    id: 'NSW-027',
    applicationNo: 'SSD-68013714',
    name: "43-61 Turner Road Data Centre",
    sector: 'Data Center',
    lga: "Camden Council",
    address: "Gregory Hills",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 40,
    investmentAmountAud: '$240 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 43-61 Turner Road Data Centre at Gregory Hills with proposed capacity of 40MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/43-61-turner-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "43-61 Turner Road, Gregory Hills - Request for IS SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-68013714.",
            "downloadUrl": "/documents/SSD-68013714/43-61_Turner_Road__Gregory_Hills_-_Request_for_IS_SEARs.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240227004845",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-68013714.",
            "downloadUrl": "/documents/SSD-68013714/Request_for_SEARs_20240227004845.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-68013714.",
            "downloadUrl": "/documents/SSD-68013714/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-68013714.",
            "downloadUrl": "/documents/SSD-68013714/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-028',
    applicationNo: 'SSD-66777221-Mod-2',
    name: "Modification 2 - Lanceley Place Data Centre",
    sector: 'Data Center',
    lga: "Willoughby City Council",
    address: "Artarmon",
    applicant: "Goodman Group",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 80,
    investmentAmountAud: '$480 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 2 - Lanceley Place Data Centre at Artarmon with proposed capacity of 80MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-2-lanceley-place-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-66777221-Mod-2 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-66777221-Mod-2 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-66777221-Mod-2 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-66777221-Mod-2 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-66777221-Mod-2 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-2 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-66777221-Mod-2 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-2 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-66777221-Mod-2 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-2 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-2.",
            "downloadUrl": "/documents/SSD-66777221-Mod-2/SSD-66777221-Mod-2_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-029',
    applicationNo: 'SSD-112059740',
    name: "90 Aldington Road Data Centre",
    sector: 'Data Center',
    lga: "Penrith City Council",
    address: "74-88 Aldington Road, Kemps Creek",
    applicant: "Stockland / Fife Capital",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 245,
    investmentAmountAud: '$1470 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 90 Aldington Road Data Centre at 74-88 Aldington Road, Kemps Creek with proposed capacity of 245MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/90-aldington-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Site Map",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Site_Map.pdf"
      },
      {
            "code": "Appendix B",
            "category": "Early Consultation",
            "title": "Appendix B - Scoping Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Appendix_B_-_Scoping_Summary_Table.pdf"
      },
      {
            "code": "Appendix A",
            "category": "Early Consultation",
            "title": "Appendix A - Preliminary Architectural Drawings",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Appendix_A_-_Preliminary_Architectural_Drawings.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "SEARs Request - 90 Aldington Road Data Centre",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/SEARs_Request_-_90_Aldington_Road_Data_Centre.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20260329220028",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Request_for_SEARs_20260329220028.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "SSD-112059740 Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/SSD-112059740_Issued_SEARs.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "Issued SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Issued_SEARs_Cover_Letter.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Attachment 2 - Combined Agency Advice",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-112059740.",
            "downloadUrl": "/documents/SSD-112059740/Attachment_2_-_Combined_Agency_Advice.pdf"
      }
]
  },
  {
    id: 'NSW-030',
    applicationNo: 'SSD-63741210',
    name: "NEXTDC S4 Data Centre Horsley Park Phase 1",
    sector: 'Data Center',
    lga: "Fairfield City Council",
    address: "16 Johnston Crescent, Horsley Park",
    applicant: "NEXTDC",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 232,
    investmentAmountAud: '$1392 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for NEXTDC S4 Data Centre Horsley Park Phase 1 at 16 Johnston Crescent, Horsley Park with proposed capacity of 232MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s4-data-centre-horsley-park',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Concept Design Report and Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/Concept_Design_Report_and_Plans.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "Request for Industry Specific SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/Request_for_Industry_Specific_SEARs.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Early Consultation",
            "title": "Draft Subdivision Plan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/Draft_Subdivision_Plan.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20231022225252",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/Request_for_SEARs_20231022225252.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres3841904 (1)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-63741210.",
            "downloadUrl": "/documents/SSD-63741210/Industry_Specific_SEARs_Data_Storage_Centres3841904__1_.pdf"
      }
]
  },
  {
    id: 'NSW-031',
    applicationNo: 'SSD-41589232-Mod-1',
    name: "Modification 1 51 Huntingwood Drive - Reduced Scale",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "Huntingwood",
    applicant: "EMKC Cubed",
    stage: 'SEARs' as MajorProject['stage'],
    capacityMW: 100,
    investmentAmountAud: '$600 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 1 51 Huntingwood Drive - Reduced Scale at Huntingwood with proposed capacity of 100MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-1-51-huntingwood-drive-data-centre-reduced-scale',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-41589232-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-41589232-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-41589232-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-41589232-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-41589232-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-41589232-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-41589232-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-41589232-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-41589232-Mod-1.",
            "downloadUrl": "/documents/SSD-41589232-Mod-1/SSD-41589232-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-032',
    applicationNo: 'SSD-58601963',
    name: "Honeman Close Data Centre",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "6 Honeman Close, Huntingwood",
    applicant: "Microsoft",
    stage: 'Assessment' as MajorProject['stage'],
    capacityMW: 96,
    investmentAmountAud: '$576 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Honeman Close Data Centre at 6 Honeman Close, Huntingwood with proposed capacity of 96MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/honeman-close-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "Attachment 1 - Previous SEARs Request",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-58601963.",
            "downloadUrl": "/documents/SSD-58601963/Attachment_1_-_Previous_SEARs_Request.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "Attachment 2 - SEARs (SSD-19729084)",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-58601963.",
            "downloadUrl": "/documents/SSD-58601963/Attachment_2_-_SEARs__SSD-19729084_.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Request for SEARs",
            "title": "Scoping Report - 6 Honeman Close, Huntingwood_Final",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-58601963.",
            "downloadUrl": "/documents/SSD-58601963/Scoping_Report_-_6_Honeman_Close__Huntingwood_Final.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-58601963.",
            "downloadUrl": "/documents/SSD-58601963/Issued_SEARs.pdf"
      }
]
  },
  {
    id: 'NSW-033',
    applicationNo: 'SSD-69637456',
    name: "DigiCo SYD1 Data Centre Expansion",
    sector: 'Data Center',
    lga: "City of Sydney",
    address: "392-422 Harris Street, Ultimo",
    applicant: "DigiCo Infrastructure REIT",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 50,
    investmentAmountAud: '$300 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for DigiCo SYD1 Data Centre Expansion at 392-422 Harris Street, Ultimo with proposed capacity of 50MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/digico-syd1-data-centre-expansion',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "A.B - Preliminary Architectural Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/A_B_-_Preliminary_Architectural_Plans.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Early Consultation",
            "title": "Site Context Map - 390-422 Harris Street, Ultimo",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/Site_Context_Map_-_390-422_Harris_Street__Ultimo.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Early Consultation",
            "title": "A.A -  Scoping Summary Table",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/A_A_-__Scoping_Summary_Table.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Request for SEARs",
            "title": "Project Specific SEARS Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/Project_Specific_SEARS_Scoping_Report.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20240411015055",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/Request_for_SEARs_20240411015055.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "SSD Issued SEARs - SSD-69637456",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/SSD_Issued_SEARs_-_SSD-69637456.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Advice on SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-69637456.",
            "downloadUrl": "/documents/SSD-69637456/Attachment_2_-_Agency_Advice_on_SEARs.pdf"
      }
]
  },
  {
    id: 'NSW-034',
    applicationNo: 'SSD-71368959',
    name: "Project Duke Data Centre",
    sector: 'Data Center',
    lga: "Bayside Council",
    address: "2 / 10-22 Kent Road, Mascot",
    applicant: "Goodman Group",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 90,
    investmentAmountAud: '$540 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Duke Data Centre at 2 / 10-22 Kent Road, Mascot with proposed capacity of 90MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-duke-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "SEARS for Request - Project Duke Data Centre",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-71368959.",
            "downloadUrl": "/documents/SSD-71368959/SEARS_for_Request_-_Project_Duke_Data_Centre.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-71368959.",
            "downloadUrl": "/documents/SSD-71368959/Industry_Specific_SEARs_Data_Storage_Centres.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SSD SEARs Industry Specific Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-71368959.",
            "downloadUrl": "/documents/SSD-71368959/SSD_SEARs_Industry_Specific_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-035',
    applicationNo: 'SSD-66777221-Mod-1',
    name: "Modification 1 Lanceley Place Data Centre",
    sector: 'Data Center',
    lga: "Willoughby City Council",
    address: "Artarmon",
    applicant: "Goodman Group",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 80,
    investmentAmountAud: '$480 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 1 Lanceley Place Data Centre at Artarmon with proposed capacity of 80MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-1-lanceley-place-data-centre-artarmon',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-66777221-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-66777221-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-66777221-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-66777221-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-66777221-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-66777221-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-66777221-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-66777221-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-66777221-Mod-1.",
            "downloadUrl": "/documents/SSD-66777221-Mod-1/SSD-66777221-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-036',
    applicationNo: 'SSD-77274467',
    name: "22 O'Riordan Street, Alexandria - Data Centre",
    sector: 'Data Center',
    lga: "City of Sydney",
    address: "22 O'Riordan Street, Alexandria",
    applicant: "Markham Real Estate Partners",
    stage: 'Prepare EIS' as MajorProject['stage'],
    capacityMW: 38,
    investmentAmountAud: '$228 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 22 O'Riordan Street, Alexandria - Data Centre at 22 O'Riordan Street, Alexandria with proposed capacity of 38MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/22-oriordan-street-alexandria-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "24016 - ISEARs Request - 22 O'Riordan St",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-77274467.",
            "downloadUrl": "/documents/SSD-77274467/24016_-_ISEARs_Request_-_22_O_Riordan_St.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20241024223414",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-77274467.",
            "downloadUrl": "/documents/SSD-77274467/Request_for_SEARs_20241024223414.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres7592142",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-77274467.",
            "downloadUrl": "/documents/SSD-77274467/Industry_Specific_SEARs_Data_Storage_Centres7592142.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SEARs Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-77274467.",
            "downloadUrl": "/documents/SSD-77274467/SEARs_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-037',
    applicationNo: 'SSD-59416728-Mod-1',
    name: "Modification 1 Tree Removal Correction",
    sector: 'Data Center',
    lga: "Fairfield City Council",
    address: "3 Davis Road, Wetherill Park",
    applicant: "Stockland / EdgeConneX",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 160,
    investmentAmountAud: '$960 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 1 Tree Removal Correction at 3 Davis Road, Wetherill Park with proposed capacity of 160MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-1-tree-removal-correction',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-59416728-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-59416728-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-59416728-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-59416728-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-59416728-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-59416728-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-59416728-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-59416728-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-59416728-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-59416728-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-59416728-Mod-1.",
            "downloadUrl": "/documents/SSD-59416728-Mod-1/SSD-59416728-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-038',
    applicationNo: 'SSD-53338465',
    name: "Grand Avenue Data Centre Expansion, Rosehill",
    sector: 'Data Center',
    lga: "City of Parramatta",
    address: "8 Grand Avenue, Rosehill",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 65,
    investmentAmountAud: '$390 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Grand Avenue Data Centre Expansion, Rosehill at 8 Grand Avenue, Rosehill with proposed capacity of 65MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/grand-avenue-data-centre-expansion-rosehill',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Scoping Report - 8 Grand Avenue, Rosehill_Final",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-53338465.",
            "downloadUrl": "/documents/SSD-53338465/Scoping_Report_-_8_Grand_Avenue__Rosehill_Final.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Agency Advice",
            "title": "IS SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-53338465.",
            "downloadUrl": "/documents/SSD-53338465/IS_SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "IS SEARs - Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-53338465.",
            "downloadUrl": "/documents/SSD-53338465/IS_SEARs_-_Data_Storage_Centres.pdf"
      }
]
  },
  {
    id: 'NSW-039',
    applicationNo: 'SSD-60185233',
    name: "52 Turner Road Data Centre",
    sector: 'Data Center',
    lga: "Camden Council",
    address: "52 Turner Road, Smeaton Grange",
    applicant: "Amazon Web Services",
    stage: 'SEARs' as MajorProject['stage'],
    capacityMW: 40,
    investmentAmountAud: '$240 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for 52 Turner Road Data Centre at 52 Turner Road, Smeaton Grange with proposed capacity of 40MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/52-turner-road-data-centre',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs Data Storage Centres8165647",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-60185233.",
            "downloadUrl": "/documents/SSD-60185233/Industry_Specific_SEARs_Data_Storage_Centres8165647.pdf"
      }
]
  },
  {
    id: 'NSW-040',
    applicationNo: 'SSD-24299707-Mod-1',
    name: "Modification 1 Talavera Road Expansion MOD 1",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "17-23 Talavera Road, Macquarie Park",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 85,
    investmentAmountAud: '$510 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Modification 1 Talavera Road Expansion MOD 1 at 17-23 Talavera Road, Macquarie Park with proposed capacity of 85MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/modification-1-talavera-road-data-centre-campus-expansion-mod-1',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Early Consultation",
            "title": "SSD-24299707-Mod-1 Preliminary Site Masterplan",
            "author": "NSW Major Projects Portal",
            "summary": "Official Early Consultation document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Preliminary_Site_Masterplan.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "SSD-24299707-Mod-1 Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Scoping_Report.pdf"
      },
      {
            "code": "Doc 03",
            "category": "SEARs",
            "title": "SSD-24299707-Mod-1 Secretary Environmental Assessment Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official SEARs document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Secretary_Environmental_Assessment_Requir.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "SSD-24299707-Mod-1 Transport for NSW Referral Response",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Transport_for_NSW_Referral_Response.pdf"
      },
      {
            "code": "SSD-24299707-Mod-1 Appendix A",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-24299707-Mod-1 Appendix A - Architectural Design",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Appendix_A_-_Architectural_Design.pdf"
      },
      {
            "code": "SSD-24299707-Mod-1 Appendix B",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-24299707-Mod-1 Appendix B - Planning Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Appendix_B_-_Planning_Report.pdf"
      },
      {
            "code": "SSD-24299707-Mod-1 Appendix C",
            "category": "Environmental Impact Statement (EIS)",
            "title": "SSD-24299707-Mod-1 Appendix C - Traffic Assessment",
            "author": "NSW Major Projects Portal",
            "summary": "Official Environmental Impact Statement (EIS) document for SSD-24299707-Mod-1.",
            "downloadUrl": "/documents/SSD-24299707-Mod-1/SSD-24299707-Mod-1_Appendix_C_-_Traffic_Assessment.pdf"
      }
]
  },
  {
    id: 'NSW-041',
    applicationNo: 'SSD-59416728',
    name: "Davis Road Data Centre (Cundall)",
    sector: 'Data Center',
    lga: "Fairfield City Council",
    address: "3 Davis Road, Wetherill Park",
    applicant: "Stockland / EdgeConneX",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 160,
    investmentAmountAud: '$960 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Davis Road Data Centre (Cundall) at 3 Davis Road, Wetherill Park with proposed capacity of 160MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/davis-road-data-centre-cundall',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Agency Advice",
            "title": "IS SEARs - Requirements",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-59416728.",
            "downloadUrl": "/documents/SSD-59416728/IS_SEARs_-_Requirements.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Agency Advice",
            "title": "IS SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-59416728.",
            "downloadUrl": "/documents/SSD-59416728/IS_SEARs_-_Cover_Letter.pdf"
      }
]
  },
  {
    id: 'NSW-042',
    applicationNo: 'SSD-47320208',
    name: "Project Echidna Data Centre Eastern Creek",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "10 Eastern Creek Drive, Eastern Creek",
    applicant: "Amazon Web Services",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 35,
    investmentAmountAud: '$210 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Project Echidna Data Centre Eastern Creek at 10 Eastern Creek Drive, Eastern Creek with proposed capacity of 35MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/project-echidna-data-centre-eastern-creek',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Request for Industry Specific SEARs - Echidna",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-47320208.",
            "downloadUrl": "/documents/SSD-47320208/Request_for_Industry_Specific_SEARs_-_Echidna.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Request for SEARs",
            "title": "Request for SEARs_20220815042100",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-47320208.",
            "downloadUrl": "/documents/SSD-47320208/Request_for_SEARs_20220815042100.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "Industry Specific SEARs - Project Echidna DC",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-47320208.",
            "downloadUrl": "/documents/SSD-47320208/Industry_Specific_SEARs_-_Project_Echidna_DC.pdf"
      }
]
  },
  {
    id: 'NSW-043',
    applicationNo: 'SSD-24299707',
    name: "Talavera Road Data Centre Campus Expansion",
    sector: 'Data Center',
    lga: "City of Ryde",
    address: "17-23 Talavera Road, Macquarie Park",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 85,
    investmentAmountAud: '$510 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Talavera Road Data Centre Campus Expansion at 17-23 Talavera Road, Macquarie Park with proposed capacity of 85MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/talavera-road-data-centre-campus-expansion',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Scoping Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Scoping_Report.pdf"
      },
      {
            "code": "Appendix 1",
            "category": "Request for SEARs",
            "title": "Appendix 1 - Preliminary Architectural Plans",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Appendix_1_-_Preliminary_Architectural_Plans.pdf"
      },
      {
            "code": "Appendix 2",
            "category": "Request for SEARs",
            "title": "Appendix 2 - Preliminary QS Report",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Appendix_2_-_Preliminary_QS_Report.pdf"
      },
      {
            "code": "Doc 04",
            "category": "Agency Advice",
            "title": "Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Cover_Letter.pdf"
      },
      {
            "code": "Doc 05",
            "category": "Agency Advice",
            "title": "Issued SEARs",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Issued_SEARs.pdf"
      },
      {
            "code": "Doc 06",
            "category": "Agency Advice",
            "title": "Attachment 2 - Agency Responses",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Attachment_2_-_Agency_Responses.pdf"
      },
      {
            "code": "Doc 07",
            "category": "Agency Advice",
            "title": "BDAR Waiver Request",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/BDAR_Waiver_Request.pdf"
      },
      {
            "code": "Doc 08",
            "category": "Agency Advice",
            "title": "Signed BDAR Waiver",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-24299707.",
            "downloadUrl": "/documents/SSD-24299707/Signed_BDAR_Waiver.pdf"
      }
]
  },
  {
    id: 'NSW-044',
    applicationNo: 'SSD-33781208',
    name: "Station Road Data Centre Expansion",
    sector: 'Data Center',
    lga: "Blacktown City Council",
    address: "57 Station Road, Seven Hills",
    applicant: "Undisclosed Applicant",
    stage: 'Approved' as MajorProject['stage'],
    capacityMW: 45,
    investmentAmountAud: '$270 Million',
    mainContractor: 'Multiplex / Built / FDC',
    architect: 'HDR / Greenbox Architecture / Architectus',
    planningConsultant: 'Urbis / Ethos Urban',
    description: "State Significant Development for Station Road Data Centre Expansion at 57 Station Road, Seven Hills with proposed capacity of 45MW.",
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/station-road-data-centre-expansion',
    lastUpdated: '2026-07-20',
    keyRisks: ['Substation Grid Capacity', 'Acoustic Compliance', 'Bushfire & Stormwater Management'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis / Ethos Urban', category: 'Planning' as ConsultantCategory, description: 'SSDA Environmental Impact Statement' },
      { role: 'Architectural Team', companyName: 'Greenbox / HDR', category: 'Architectural' as ConsultantCategory, description: 'Masterplan & architectural layout' },
      { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic and transport impact' }
    ],
    appendices: [
      {
            "code": "Doc 01",
            "category": "Request for SEARs",
            "title": "Report - 57 Station Road, Seven Hills",
            "author": "NSW Major Projects Portal",
            "summary": "Official Request for SEARs document for SSD-33781208.",
            "downloadUrl": "/documents/SSD-33781208/Report_-_57_Station_Road__Seven_Hills.pdf"
      },
      {
            "code": "Doc 02",
            "category": "Agency Advice",
            "title": "SEARs - Cover Letter",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-33781208.",
            "downloadUrl": "/documents/SSD-33781208/SEARs_-_Cover_Letter.pdf"
      },
      {
            "code": "Doc 03",
            "category": "Agency Advice",
            "title": "SEARs - Data Storage Centres",
            "author": "NSW Major Projects Portal",
            "summary": "Official Agency Advice document for SSD-33781208.",
            "downloadUrl": "/documents/SSD-33781208/SEARs_-_Data_Storage_Centres.pdf"
      }
]
  },
];
