import type { MajorProject, ConsultantCategory } from '../types';

export const MAJOR_PROJECTS_DATA: MajorProject[] = [
  {
    id: 'proj-1',
    applicationNo: 'SSD-108864209',
    name: 'NEXTDC S4 Data Centre Phase 2, Horsley Park',
    sector: 'Data Center',
    lga: 'Fairfield City Council',
    address: 'Horsley Park Industrial Precinct, Horsley Park NSW 2175',
    applicant: 'NEXTDC Limited',
    stage: 'Prepare EIS',
    capacityMW: 134.4,
    investmentAmountAud: '$1.2 Billion',
    mainContractor: 'Multiplex',
    architect: 'HDR / Greenbox Architecture',
    planningConsultant: 'Urbis / Ethos Urban',
    description: 'Construction and operation of Phase 2 of NEXTDC S4 data centre facility with a maximum power capacity of 134.4 MW comprising two multi-storey data centre buildings, dedicated electrical substation, diesel fuel storage, and site infrastructure.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/nextdc-s4-data-centre-phase-2-horsley-park',
    lastUpdated: '2026-07-20',
    keyRisks: ['Transgrid High-Voltage Grid Connection', 'Diesel Storage Environmental Protection', 'Noise Emissions during Generator Testing', 'Bushfire Asset Protection Zone'],
    consultants: [
      { role: 'Main Contractor', companyName: 'Multiplex', category: 'Main Contractor', description: 'Early Contractor Involvement (ECI) & Head Construction Contractor' },
      { role: 'Architectural Design', companyName: 'HDR / Greenbox Architecture', category: 'Architectural', description: 'Master planning, façade design, and architectural layout' },
      { role: 'Town Planning & EIS Lead', companyName: 'Urbis / Ethos Urban', category: 'Planning', description: 'Environmental Impact Statement preparation and statutory approval management' },
      { role: 'Traffic & Transport Engineer', companyName: 'TTW (Taylor Thomson Whitting)', category: 'Traffic', description: 'Traffic impact assessment and heavy vehicle access design' },
      { role: 'Acoustic & Noise Specialist', companyName: 'SLR Consulting / Wilkinson Murray', category: 'Acoustic', description: 'Noise impact assessment for generators and cooling plant' },
      { role: 'Biodiversity Consultant', companyName: 'Eco Logical Australia', category: 'Environmental', description: 'Biodiversity Development Assessment Report (BDAR)' },
      { role: 'Bushfire Consultant', companyName: 'EMM Consulting', category: 'Environmental', description: 'Bushfire protection & hazard management strategy' },
      { role: 'Geotechnical & Soil Engineer', companyName: 'Douglas Partners / JK Environments', category: 'Engineering', description: 'Geotechnical investigation & Phase 2 Environmental Site Assessment' },
      { role: 'Accessibility Specialist', companyName: 'Morris-Goding Access Consulting', category: 'Access', description: 'Disability & BCA access compliance review' },
      { role: 'Civil & Stormwater Engineer', companyName: 'Jacobs / TTW', category: 'Engineering', description: 'Civil works, stormwater quality and quantity management' },
      { role: 'Aboriginal & Heritage', companyName: 'Artefact Heritage', category: 'Heritage', description: 'Aboriginal Cultural Heritage Assessment Report (ACHAR)' },
      { role: 'Air Quality & Dispersion', companyName: 'Aurecon', category: 'Environmental', description: 'Air quality dispersion modelling for diesel back-up generators' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural & Landscape Masterplan', author: 'HDR / Greenbox Architecture', summary: 'Comprehensive architectural plans, site layouts, building elevations, color schedules, and landscape treatment plans.' },
      { code: 'Appendix B', title: 'Planning Report & SEARs Compliance Matrix', author: 'Urbis', summary: 'Detailed statutory planning assessment against State Environmental Planning Policies and SEARs requirements.' },
      { code: 'Appendix C', title: 'Traffic and Transport Impact Assessment', author: 'TTW', summary: 'Traffic generation modelling, intersection impact analysis, sweep path analysis for heavy haulage vehicles.' },
      { code: 'Appendix D', title: 'Acoustic and Noise Impact Assessment', author: 'SLR Consulting', summary: '3D noise propagation modelling for cooling towers, chillers, and 50+ backup emergency diesel generators.' },
      { code: 'Appendix E', title: 'Biodiversity Development Assessment Report (BDAR)', author: 'Eco Logical Australia', summary: 'Assessment of native vegetation clearing, habitat impacts, and required biodiversity credits calculation.' },
      { code: 'Appendix F', title: 'Bushfire Protection Assessment', author: 'EMM Consulting', summary: 'Evaluation of Asset Protection Zones (APZ), emergency management plans, and compliance with Planning for Bush Fire Protection.' },
      { code: 'Appendix G', title: 'Geotechnical & Phase 2 Contamination Assessment', author: 'Douglas Partners', summary: 'Borehole sampling, soil salinity, contamination testing, and foundation engineering recommendations.' },
      { code: 'Appendix H', title: 'Accessibility Review Report', author: 'Morris-Goding Access Consulting', summary: 'Assessment against Disability Discrimination Act (DDA) and Building Code of Australia access compliance.' },
      { code: 'Appendix I', title: 'Civil Engineering & Stormwater Management Plan', author: 'Jacobs', summary: 'Design of on-site detention (OSD) basins, Water Sensitive Urban Design (WSUD), and erosion control during construction.' },
      { code: 'Appendix J', title: 'Aboriginal & Historic Cultural Heritage Report', author: 'Artefact Heritage', summary: 'Archeological test excavations, Aboriginal community consultation, and cultural heritage management recommendations.' },
      { code: 'Appendix K', title: 'Air Quality & Generator Emission Modelling', author: 'Aurecon', summary: 'AERMOD air dispersion modelling of NO2, SO2, and PM10 emissions during emergency diesel generator testing runs.' },
      { code: 'Appendix L', title: 'Social Impact & Stakeholder Engagement Report', author: 'Urbis', summary: 'Summary of community drop-in sessions, neighbor consultations, and social impact mitigation strategy.' }
    ]
  },
  {
    id: 'proj-2',
    applicationNo: 'SSD-27471926',
    name: 'AirTrunk SYD3 Data Centre Expansion, Kemps Creek',
    sector: 'Data Center',
    lga: 'Penrith City Council',
    address: 'Mamre Road Precinct, Kemps Creek NSW 2178',
    applicant: 'AirTrunk Operating Pty Ltd',
    stage: 'Approved',
    capacityMW: 320.0,
    investmentAmountAud: '$1.8 Billion',
    mainContractor: 'Laing O\'Rourke',
    architect: 'Scentre Group Design / Greenbox',
    planningConsultant: 'Ethos Urban',
    description: 'Development of a ultra-large scale 320MW hyper-scale data centre campus comprising four multi-storey data halls, 132kV high voltage substation, and liquid cooling infrastructure.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/airtrunk-syd3-kemps-creek',
    lastUpdated: '2026-06-15',
    keyRisks: ['132kV Substation Integration', 'Peak Water Consumption for Direct Liquid Cooling', 'Acoustic Barrier Enclosures'],
    consultants: [
      { role: 'Main Contractor', companyName: 'Laing O\'Rourke', category: 'Main Contractor', description: 'Design & Build head contractor' },
      { role: 'Architect', companyName: 'Greenbox Architecture', category: 'Architectural', description: 'Building envelope & master planning' },
      { role: 'Planning Lead', companyName: 'Ethos Urban', category: 'Planning', description: 'SSDA & Mod 2 approval management' },
      { role: 'Traffic Consultant', companyName: 'Arup', category: 'Traffic', description: 'Mamre Road corridor traffic assessment' },
      { role: 'Structural Engineer', companyName: 'Aurecon', category: 'Engineering', description: 'Structural steel & precast concrete design' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural Design Package', author: 'Greenbox', summary: 'Building design drawings and color visualisations.' },
      { code: 'Appendix B', title: 'Environmental Impact Statement', author: 'Ethos Urban', summary: 'Comprehensive environmental and statutory assessment.' },
      { code: 'Appendix C', title: 'Traffic Impact Study', author: 'Arup', summary: 'Construction traffic management plan for Mamre Rd.' }
    ]
  },
  {
    id: 'proj-3',
    applicationNo: 'SSD-39401284',
    name: 'Waratah Super Battery (BESS), Lake Munmorah',
    sector: 'BESS',
    lga: 'Central Coast Council',
    address: 'Former Munmorah Power Station Site, Lake Munmorah NSW 2259',
    applicant: 'Akaysha Energy / EnergyCo',
    stage: 'Approved',
    capacityMW: 850.0,
    investmentAmountAud: '$1.0 Billion',
    mainContractor: 'Consolidated Power Projects (CPP)',
    architect: 'SGA Design',
    planningConsultant: 'Urbis',
    description: 'Super-sized 850MW / 1680MWh Battery Energy Storage System (BESS) designed as System Integrity Protection Scheme (SIPS) to unlock transmission capacity in NSW.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/waratah-super-battery',
    lastUpdated: '2026-05-10',
    keyRisks: ['Thermal Runaway & Battery Fire Safety', 'High Voltage Substation Switched Cap', 'Noise from Cooling Fans'],
    consultants: [
      { role: 'Main EPC Contractor', companyName: 'Consolidated Power Projects', category: 'Main Contractor', description: 'EPC contractor for BESS and 330kV substation' },
      { role: 'Planning Lead', companyName: 'Urbis', category: 'Planning', description: 'Environmental assessment & SSD approvals' },
      { role: 'Fire Safety Specialist', companyName: 'GHD Group', category: 'Environmental', description: 'Hazard Analysis & Thermal Safety Plan' },
      { role: 'Grid Engineer', companyName: 'Aurecon', category: 'Engineering', description: 'Electrical grid integration & SIPS control logic' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'BESS Layout & Substation Single Line Diagrams', author: 'CPP', summary: 'Electrical single line diagrams and BESS container configuration.' },
      { code: 'Appendix B', title: 'Hazard & Operability Study (HAZOP)', author: 'GHD', summary: 'Battery thermal safety, gas suppression, and emergency response plan.' }
    ]
  },
  {
    id: 'proj-4',
    applicationNo: 'SSD-48291054',
    name: 'Equinix SY5 & SY6 Data Centre Campus, Rosebery',
    sector: 'Data Center',
    lga: 'City of Sydney',
    address: '189 O\'Riordan Street, Rosebery NSW 2018',
    applicant: 'Equinix Australia',
    stage: 'Assessment',
    capacityMW: 110.0,
    investmentAmountAud: '$850 Million',
    mainContractor: 'FDC Construction & Fitout',
    architect: 'Taylors Architects',
    planningConsultant: 'Architectus',
    description: 'Multi-phase expansion of Equinix SY5 and SY6 International Business Exchange (IBX) data centres offering cloud interconnectivity and high-density GPU hosting.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/equinix-sy5-sy6-expansion',
    lastUpdated: '2026-07-02',
    keyRisks: ['Urban Noise Limits', 'Traffic Management on O\'Riordan St', 'Air Emissions in Dense Urban Area'],
    consultants: [
      { role: 'Main Contractor', companyName: 'FDC Construction', category: 'Main Contractor', description: 'Fitout & Head contractor' },
      { role: 'Planner', companyName: 'Architectus', category: 'Planning', description: 'SSDA Planning Assessment' },
      { role: 'Acoustic Engineer', companyName: 'Acoustic Logic', category: 'Acoustic', description: 'City of Sydney noise compliance study' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural Drawings', author: 'Taylors Architects', summary: 'Site plans and elevations.' },
      { code: 'Appendix B', title: 'Urban Acoustic Impact Report', author: 'Acoustic Logic', summary: 'Chiller acoustic enclosure design.' }
    ]
  },
  {
    id: 'proj-5',
    applicationNo: 'SSD-58193021',
    name: 'Eraring 700MW BESS Stage 2, Eraring',
    sector: 'BESS',
    lga: 'Lake Macquarie City Council',
    address: 'Eraring Power Station Grounds, Eraring NSW 2264',
    applicant: 'Origin Energy',
    stage: 'Exhibition',
    capacityMW: 700.0,
    investmentAmountAud: '$750 Million',
    mainContractor: 'Wärtsilä Energy',
    architect: 'Jacobs Architecture',
    planningConsultant: 'AECOM',
    description: 'Stage 2 addition of 400MW / 1600MWh battery energy storage system at the coal-fired Eraring Power Station site undergoing clean energy transition.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/eraring-bess-stage-2',
    lastUpdated: '2026-07-14',
    keyRisks: ['Contaminated Land Remediation', 'Transgrid 330kV Connection Capacity', 'Bushfire Management'],
    consultants: [
      { role: 'Technology Provider', companyName: 'Wärtsilä Energy', category: 'Main Contractor', description: 'BESS equipment supplier & EPC' },
      { role: 'EIS Lead', companyName: 'AECOM', category: 'Planning', description: 'Environmental Assessment & Biodiversity Report' },
      { role: 'Geotechnical', companyName: 'Coffey Services', category: 'Engineering', description: 'Ash dam geotechnical stability review' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Site Masterplan & Layout', author: 'Jacobs', summary: 'BESS container layout and transformer yard.' },
      { code: 'Appendix B', title: 'Contamination Risk Assessment', author: 'Coffey', summary: 'Coal ash dam proximity soil study.' }
    ]
  },
  {
    id: 'proj-6',
    applicationNo: 'SSD-60192841',
    name: 'CDC Eastern Creek Data Centre Campus 3, Eastern Creek',
    sector: 'Data Center',
    lga: 'Blacktown City Council',
    address: 'Honeycomb Drive, Eastern Creek NSW 2766',
    applicant: 'CDC Data Centres',
    stage: 'Prepare EIS',
    capacityMW: 250.0,
    investmentAmountAud: '$1.5 Billion',
    mainContractor: 'BW Paving & Construction',
    architect: 'Greenbox Architects',
    planningConsultant: 'Ethos Urban',
    description: 'Construction of 250MW hyper-scale campus for government and commercial cloud workloads, including dual 132kV substations and off-grid diesel generation facility.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/cdc-eastern-creek-campus-3',
    lastUpdated: '2026-07-18',
    keyRisks: ['M4 Motorway Access Road Traffic', 'Cumulative Diesel Emissions', 'Western Sydney Airport Flight Path Height Limit'],
    consultants: [
      { role: 'Architect', companyName: 'Greenbox Architects', category: 'Architectural', description: 'Masterplan & architectural design' },
      { role: 'Planner', companyName: 'Ethos Urban', category: 'Planning', description: 'SSDA Planning lead' },
      { role: 'Traffic', companyName: 'TTW', category: 'Traffic', description: 'Heavy vehicle turning and access' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural Layout', author: 'Greenbox', summary: 'Building design & heights.' },
      { code: 'Appendix B', title: 'Aeronautical Obstacle Review', author: 'Aviation Projects', summary: 'WSA airport PANS-OPS radar height compliance.' }
    ]
  },
  {
    id: 'proj-7',
    applicationNo: 'SSD-71829301',
    name: 'Goodman Oakdale West Industrial Data Hub, Kemps Creek',
    sector: 'Data Center',
    lga: 'Penrith City Council',
    address: 'Oakdale West Estate, Kemps Creek NSW 2178',
    applicant: 'Goodman Property Services',
    stage: 'Approved',
    capacityMW: 180.0,
    investmentAmountAud: '$1.1 Billion',
    mainContractor: 'ATCO Structures & ATCO Gas',
    architect: 'SGA Architects',
    planningConsultant: 'Urbis',
    description: 'State Significant Development approval for master-planned data centre precinct accommodating up to 180MW IT load across 3 state-of-the-art facilities.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/oakdale-west-data-hub',
    lastUpdated: '2026-06-20',
    keyRisks: ['Regional Drainage & Creek Buffer', 'Noise Emission Limits', 'Biodiversity Offset Credits'],
    consultants: [
      { role: 'Planner', companyName: 'Urbis', category: 'Planning', description: 'Masterplan EIS & Submissions' },
      { role: 'Civil Engineer', companyName: 'Costin Roe Consulting', category: 'Engineering', description: 'Estate earthworks & stormwater' },
      { role: 'Ecology', companyName: 'Eco Logical Australia', category: 'Environmental', description: 'Creek riparian corridor BDAR' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Estate Masterplan', author: 'SGA Architects', summary: 'Building envelope footprint.' },
      { code: 'Appendix B', title: 'Stormwater Strategy', author: 'Costin Roe', summary: 'Detention basin & bio-retention designs.' }
    ]
  },
  {
    id: 'proj-8',
    applicationNo: 'SSD-82930122',
    name: 'Orana 500MW BESS & Solar Farm, Wellington',
    sector: 'Solar',
    lga: 'Dubbo Regional Council',
    address: 'Goolma Road, Wellington NSW 2820',
    applicant: 'Lightsource bp',
    stage: 'Approved',
    capacityMW: 500.0,
    investmentAmountAud: '$680 Million',
    mainContractor: 'GRS / Downer Utilities',
    architect: 'N/A Energy Infrastructure',
    planningConsultant: 'GHD Group',
    description: 'Hybrid renewable energy asset combining 400MW Solar PV generation with a 500MW / 1000MWh battery storage system in Central-West Orana REZ.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/orana-solar-bess-wellington',
    lastUpdated: '2026-05-28',
    keyRisks: ['Aboriginal Heritage Sites', 'Agricultural Land Clearance', 'Grid Transmission Constraint'],
    consultants: [
      { role: 'Planning Lead', companyName: 'GHD Group', category: 'Planning', description: 'EIS Lead & REZ Coordination' },
      { role: 'Heritage', companyName: 'OzArk Environmental', category: 'Heritage', description: 'Aboriginal Cultural Heritage Assessment' },
      { role: 'Acoustics', companyName: 'Müller Acoustic Consulting', category: 'Acoustic', description: 'Inverter & BESS noise modelling' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Solar Array & BESS Layout', author: 'Lightsource bp', summary: 'PV module tracker layout & BESS yard.' },
      { code: 'Appendix B', title: 'Cultural Heritage Management Plan', author: 'OzArk', summary: 'Protection of artifact scatter zones.' }
    ]
  },
  {
    id: 'proj-9',
    applicationNo: 'SSD-91823049',
    name: 'Microsoft SYD04 Data Centre Campus, Seven Hills',
    sector: 'Data Center',
    lga: 'Blacktown City Council',
    address: 'Station Road, Seven Hills NSW 2147',
    applicant: 'Microsoft Pty Ltd',
    stage: 'Assessment',
    capacityMW: 120.0,
    investmentAmountAud: '$900 Million',
    mainContractor: 'Buildcorp Group',
    architect: 'Architectus',
    planningConsultant: 'Ethos Urban',
    description: 'Next-generation cloud data centre facility optimized for AI training workloads with direct liquid cooling (DLC) and 100% renewable power purchase agreement (PPA).',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/microsoft-syd04-seven-hills',
    lastUpdated: '2026-07-08',
    keyRisks: ['Transformer Substation Noise', 'Traffic Impact on Station Rd', 'Urban Heat Island Impact'],
    consultants: [
      { role: 'Planner', companyName: 'Ethos Urban', category: 'Planning', description: 'SSDA Planning lead' },
      { role: 'Architect', companyName: 'Architectus', category: 'Architectural', description: 'Building & Facade design' },
      { role: 'ESD Specialist', companyName: 'Cundall', category: 'Environmental', description: 'LEED Gold & Net Zero Carbon strategy' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural Package', author: 'Architectus', summary: 'Data hall 3D drawings.' },
      { code: 'Appendix B', title: 'Sustainability Strategy', author: 'Cundall', summary: 'Water efficiency & energy performance.' }
    ]
  },
  {
    id: 'proj-10',
    applicationNo: 'SSD-10293841',
    name: 'New England Wind Farm Stage 1, Uralla',
    sector: 'Wind',
    lga: 'Uralla Shire Council',
    address: 'Thunderbolts Way, Uralla NSW 2358',
    applicant: 'ACEN Australia',
    stage: 'Approved',
    capacityMW: 720.0,
    investmentAmountAud: '$1.4 Billion',
    mainContractor: 'Elecnor / Vestas',
    architect: 'N/A Wind Farm',
    planningConsultant: 'ERM Australia',
    description: '720MW wind energy project comprising 107 wind turbines with maximum tip height of 250m, associated 330kV transmission lines and energy storage.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/new-england-wind-farm-stage-1',
    lastUpdated: '2026-04-12',
    keyRisks: ['Avian Species Impact (Regent Honeyeater)', 'Heavy Transport Oversize Loads', 'Visual Impact on Local Homesteads'],
    consultants: [
      { role: 'EIS Lead', companyName: 'ERM Australia', category: 'Planning', description: 'Environmental Assessment Lead' },
      { role: 'Ecology Specialist', companyName: 'BioNet / Niche Environment', category: 'Environmental', description: 'Avian & Bat Impact Study' },
      { role: 'Traffic Engineer', companyName: 'Matrix Traffic', category: 'Traffic', description: 'Turbine blade transport route analysis' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Turbine Layout Plan', author: 'Vestas', summary: 'GPS coordinates of 107 turbine locations.' },
      { code: 'Appendix B', title: 'Bird and Bat Management Plan', author: 'Niche', summary: 'Radar monitoring and turbine shut-off protocols.' }
    ]
  },
  {
    id: 'proj-11',
    applicationNo: 'SSD-11029384',
    name: 'AWS Data Centre Hub SYD54, Huntingwood',
    sector: 'Data Center',
    lga: 'Blacktown City Council',
    address: 'Huntingwood Drive, Huntingwood NSW 2148',
    applicant: 'Amazon Web Services Australia',
    stage: 'Prepare EIS',
    capacityMW: 160.0,
    investmentAmountAud: '$1.1 Billion',
    mainContractor: 'Paynter Dixon',
    architect: 'HDR Architecture',
    planningConsultant: 'Urbis',
    description: 'Purpose-built AWS cloud server facility with high-density server racks, liquid-to-chip cooling, and dedicated 132kV Endeavour Energy substation.',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/aws-syd54-huntingwood',
    lastUpdated: '2026-07-19',
    keyRisks: ['Substation Electromagnetic Field (EMF)', 'Diesel Generator Exhaust Dispersion', 'Acoustic Compliance'],
    consultants: [
      { role: 'Town Planner', companyName: 'Urbis', category: 'Planning', description: 'SSDA EIS Lead' },
      { role: 'Architect', companyName: 'HDR Architecture', category: 'Architectural', description: 'Building design' },
      { role: 'EMF Specialist', companyName: 'EMF Consulting', category: 'Engineering', description: 'Substation EMF field modelling' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Architectural Drawings', author: 'HDR', summary: 'Elevation & floor plans.' },
      { code: 'Appendix B', title: 'EMF Impact Statement', author: 'EMF Consulting', summary: 'Radiation and safety boundaries.' }
    ]
  },
  {
    id: 'proj-12',
    applicationNo: 'SSD-12039485',
    name: 'Central West REZ 500kV Transmission Hub, Merriwa',
    sector: 'Grid & Substation',
    lga: 'Upper Hunter Shire Council',
    address: 'Golden Highway, Merriwa NSW 2329',
    applicant: 'EnergyCo NSW / Transgrid',
    stage: 'Exhibition',
    capacityMW: 3000.0,
    investmentAmountAud: '$2.4 Billion',
    mainContractor: 'Transgrid Infrastructure Partnership',
    architect: 'Jacobs Design',
    planningConsultant: 'WSP Australia',
    description: 'Major 500kV high-voltage AC switching station and synchronous condenser hub to connect 3GW of renewable generation into the NSW National Electricity Market (NEM).',
    officialUrl: 'https://www.planningportal.nsw.gov.au/major-projects/projects/cwr-500kv-substation-hub',
    lastUpdated: '2026-07-10',
    keyRisks: ['Agricultural Land Severance', 'Bushfire Ignition Prevention', 'Landscape Visual Amenity'],
    consultants: [
      { role: 'Planning Consultant', companyName: 'WSP Australia', category: 'Planning', description: 'EIS & Community Consultation Lead' },
      { role: 'Grid Engineer', companyName: 'Jacobs Australia', category: 'Engineering', description: '500kV substation & syncon engineering' },
      { role: 'Agricultural Impact', companyName: 'AgEcon', category: 'Environmental', description: 'Agricultural land capability assessment' }
    ],
    appendices: [
      { code: 'Appendix A', title: 'Transmission Corridor Map', author: 'WSP', summary: 'Route mapping and easement widths.' },
      { code: 'Appendix B', title: 'Agricultural Assessment', author: 'AgEcon', summary: 'Impact on prime farming land.' }
    ]
  },
  ...Array.from({ length: 31 }).map((_, index) => {
    const projNum = index + 13;
    const sectors: MajorProject['sector'][] = ['Data Center', 'BESS', 'Solar', 'Wind', 'Grid & Substation'];
    const stages: MajorProject['stage'][] = ['Prepare EIS', 'SEARs', 'Exhibition', 'Assessment', 'Approved', 'Under Construction'];
    const lgas = ['Fairfield City Council', 'Blacktown City Council', 'Penrith City Council', 'City of Sydney', 'Lake Macquarie City Council', 'Wollongong City Council', 'Maitland City Council', 'Dubbo Regional Council', 'Tamworth Regional Council'];
    const consultantsList = ['Urbis', 'Ethos Urban', 'HDR', 'Greenbox Architecture', 'TTW', 'SLR Consulting', 'Aurecon', 'AECOM', 'GHD Group', 'WSP Australia', 'Jacobs'];
    const contractorList = ['Multiplex', 'Laing O\'Rourke', 'FDC Construction', 'Consolidated Power Projects', 'Downer Utilities', 'Buildcorp Group'];
    
    const sector = sectors[index % sectors.length];
    const stage = stages[index % stages.length];
    const lga = lgas[index % lgas.length];
    const capacityMW = sector === 'Data Center' ? 60 + (index * 15) : 100 + (index * 40);
    const applicantName = sector === 'Data Center' ? `Global Data Campus ${projNum} Pty Ltd` : `NSW Renewable Energy Infrastructure ${projNum} Ltd`;
    const planner = consultantsList[index % consultantsList.length];
    const headContractor = contractorList[index % contractorList.length];

    return {
      id: `proj-${projNum}`,
      applicationNo: `SSD-${13000000 + index * 98765}`,
      name: `${sector} Facility Phase ${index % 3 + 1}, ${lga.replace(' Council', '')}`,
      sector,
      lga,
      address: `Industrial Drive Zone ${projNum}, NSW`,
      applicant: applicantName,
      stage,
      capacityMW,
      investmentAmountAud: `$${300 + index * 45} Million`,
      mainContractor: headContractor,
      architect: index % 2 === 0 ? 'Greenbox Architecture' : 'HDR / Architectus',
      planningConsultant: planner,
      description: `State Significant Development project involving the construction and operation of a ${capacityMW}MW ${sector} infrastructure facility in ${lga}.`,
      officialUrl: `https://www.planningportal.nsw.gov.au/major-projects/projects/nsw-ssd-${projNum}`,
      lastUpdated: `2026-0${(index % 7) + 1}-15`,
      keyRisks: ['Grid Interconnection Timeline', 'Acoustic Compliance', 'Bushfire Asset Protection Zone'],
      consultants: [
        { role: 'Town Planner', companyName: planner, category: 'Planning' as ConsultantCategory, description: 'SSDA Planning lead' },
        { role: 'Main Contractor', companyName: headContractor, category: 'Main Contractor' as ConsultantCategory, description: 'Head Construction Contractor' },
        { role: 'Traffic Engineer', companyName: 'TTW', category: 'Traffic' as ConsultantCategory, description: 'Traffic Impact Study' },
        { role: 'Acoustic Specialist', companyName: 'SLR Consulting', category: 'Acoustic' as ConsultantCategory, description: 'Noise & Vibration Analysis' }
      ],
      appendices: [
        { code: 'Appendix A', title: 'Architectural & Site Plans', author: 'Design Team', summary: 'Building elevations and site layout drawings.' },
        { code: 'Appendix B', title: 'Environmental Impact Statement', author: planner, summary: 'Comprehensive statutory compliance report.' },
        { code: 'Appendix C', title: 'Traffic Impact Assessment', author: 'TTW', summary: 'Traffic generation and access routes.' },
        { code: 'Appendix D', title: 'Noise Impact Assessment', author: 'SLR Consulting', summary: 'Operational noise modelling.' }
      ]
    };
  })
];
