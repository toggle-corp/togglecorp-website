import { TagId } from 'data/tags';
import { ProjectType } from 'data/projectTypes';
import { SkillId } from 'data/skills';
import { ClientId } from 'data/clients';

export type ProjectId = 'ifrc-go' | 'dfid' | 'npstocks' | 'innovation-project' | 'durable-solutions' | 'dfid-infographics' | 'management-information-system' | 'sustain' | 'kitab-bazar' | 'deep' | 'idmc-media' | 'idmc-gidd' | 'helix' | 'sikka' | 'child-sponsor' | 'paalika' | 'pdm' | 'lgbtiq' | 'fragility-study' | 'refugee-situation' | 'hno-support' | 'covid-19' | 'urban-context' | 'emr' | 'ifrc-appeal' | 'humanitarian-access' | 'lebanon-yemen' | 'ifrc-questionaire' | 'ebola-review' | 'ukraine-russia-war' | 'global-covid-19' | 'sdg-analysis' | 'scoring-matrix';

export interface Project {
    id: ProjectId;
    projectType: ProjectType;
    projectTitle: string;
    projectDuration: string;
    projectUrl: string;
    summary: string;
    client: ClientId;
    tags: TagId[];
    skills: SkillId[];
}

const projects: Project[] = [
    {
        id: 'ifrc-go',
        projectType: 'development',
        projectTitle: 'IFRC Go Development',
        projectDuration: 'Ongoing',
        client: 'ifrc',
        summary: 'GO is a Red Cross Red Crescent platform to connect information on emergency needs with the right response.',
        skills: ['react', 'typescript', 'django', 'mapbox'],
        projectUrl: 'https://go.ifrc.org/',
        tags: ['secondary-data-review'],
    },
    {
        id: 'dfid',
        projectType: 'development',
        projectTitle: 'DFID Dashboard',
        projectDuration: 'Ongoing',
        client: 'dfid',
        summary: 'Platform to visually identify the vulnerable areas and the regions that DFID has its presence in. The visualization is used to identify gaps during the COVID crisis and allocate more resources in areas that are most affected. DFID dashboard is a platform built to visualize the vulnerable areas and regions that DFID has its presence in. The platform allowed the user to track the organizations in different parts of Nepal with an interactive visualization of the country’s map. Some features within the platform include generating different graphs, dynamic comparison tool, segregating the map into geographical regions, generating infographics according to location, and more.',
        projectUrl: 'https://www.dvs-nepal.org',
        skills: ['react', 'mapboxgl', 'django'],
        tags: ['data-analysis'],
    },
    {
        id: 'npstocks',
        projectType: 'development',
        projectTitle: 'NPstocks',
        projectDuration: 'Ongoing',
        client: 'smtm',
        summary: 'NPstocks is a stock application created for Nepali stock market. It is an application that aids the users with decision making in investing in the secondary share market with real-time share market data and multiple appealing visual charts. NPstocks has a plethora of features such as maintaining a portfolio, keeping an eye on a certain company’s stock, tracking NEPSE’s trend, broker activity, company trends, visualizations (in weeks, months, quarters, half-year, and year), historical activities, and more.',
        skills: ['react-native', 'nodeJs', 'websocket', 'firebase'],
        projectUrl: 'https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks&hl=en&gl=US&pli=1',
        tags: ['report-writing'],
    },
    {
        id: 'innovation-project',
        projectType: 'development',
        projectTitle: 'Innovation Project',
        projectDuration: 'Ongoing',
        client: 'jips',
        summary: 'The aim of the Innovation project is to allow different organizations to collaboratively process and compute data within their premises without any trust issues. We collaborated with Flowminder who had been working in a similar domain working mostly with anonymized data. For initial MVP deliverable, we chose telecommunication data which Flowminder had been working on. Using the technology and tools along with help from Flowminder, we set up the data processing pipeline and initial computations.',
        skills: ['docker', 'docker-swarm', 'flowkit', 'airflow'],
        projectUrl: 'https://www.jips.org',
        tags: ['report-writing'],
    },
    {
        id: 'durable-solutions',
        projectType: 'development',
        projectTitle: 'Durable Solutions',
        projectDuration: 'Completed',
        client: 'people-in-need',
        summary: 'Durable Solutions is a UKAID funded program that implements resettlement programs. The Durable Solutions Dashboard came into existence to track displacements in a set number of districts. It is a platform to visualize geohazard-affected communities in a set number of districts. The dashboard is used to track the number of relief a displaced person or family has received and the amount they have received. It displays data at the municipality level in those districts. Additionally, the dashboard tracks the starting point of displacement to the ending point. It also displays the number of displaced people, households, relocated numbers, reliefs distributed in three tranches, and others with ease.',
        skills: ['react-on-wordpress', 'django', 'leaflet'],
        projectUrl: 'http://www.durablesolutionsnepal.org',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'dfid-infographics',
        projectType: 'development',
        projectTitle: 'DFID Infographics',
        projectDuration: 'Completed',
        client: 'dfid-ukaid',
        summary: 'DFID Infographics was a UKAID infographics project regarding key indicators such as poverty, gender, disaster, education, health, and more across Nepal. The whole project was divided into two components. The first component focused on the data specific to DFID areas whereas the second component was a campaign named ‘Orange the World’. The 16 day campaign focused on spreading awareness to end different types of domestic violence against women using one infographic every day.',
        skills: ['illustrator', 'inDesign'],
        projectUrl: 'https://www.dvs-nepal.org/',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'management-information-system',
        projectType: 'development',
        projectTitle: 'Management Information System (MIS)',
        projectDuration: 'Completed',
        client: 'golden-community',
        summary: 'Golden Community’s Management Information System is a system to manage information in a more fluent way. Within the system, its users can check employee profiles, attendance, calculate costs, and other details',
        skills: ['django', 'react', 'd3'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'sustain',
        projectType: 'development',
        projectTitle: 'Sustain',
        projectDuration: 'Completed',
        client: 'golden-community',
        summary: 'Golden Community’s main work revolves around improving the health of newborn babies. Hence, Sustain is a project created to support newborn babies’ health and reduce infant mortality rate. It is a progressive web application (PWA) used to collect information from a logical set of questionnaires. Sustain used the information collected from the application for analysis, creating reports, and journals. While the Sustain app can run on all devices, its primary target were tablets. Sustain supports around 100 users per day.',
        skills: ['django', 'react', 'pwa'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'kitab-bazar',
        projectType: 'development',
        projectTitle: 'Kitab Bazar',
        projectDuration: 'Completed',
        client: 'world-vision',
        summary: 'Golden Community’s main work revolves around improving the health of newborn babies. Hence, Sustain is a project created to support newborn babies’ health and reduce infant mortality rate. It is a progressive web application (PWA) used to collect information from a logical set of questionnaires. Sustain used the information collected from the application for analysis, creating reports, and journals. While the Sustain app can run on all devices, its primary target were tablets. Sustain supports around 100 users per day.',
        skills: ['django', 'react', 'mapbox', 'd3'],
        projectUrl: 'https://www.kitabbazar.org/',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'deep',
        projectType: 'development',
        projectTitle: 'Deep',
        projectDuration: 'Completed',
        client: 'dfs',
        summary: 'Platform to explore and centralised data from different sources and generate reports and interactive visualizations',
        skills: ['django', 'postgres', 'mapbox', 'd3', 'react', 'post-gis'],
        projectUrl: 'https://beta.thedeep.io/',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'idmc-media',
        projectType: 'development',
        projectTitle: 'IDMC Media Monitoring Platform',
        projectDuration: 'Completed',
        client: 'idmc',
        summary: 'Platform to explore and centralised data from different sources and generate reports and interactive visualizations',
        skills: ['mapbox', 'd3', 'react'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'idmc-gidd',
        projectType: 'development',
        projectTitle: 'IDMC GIDD Dashboard',
        projectDuration: 'Completed',
        client: 'idmc',
        summary: 'Dashboard that visualizes the internal displacement around the globe',
        skills: ['d3', 'react', 'recharts'],
        projectUrl: 'https://www.internal-displacement.org/database/displacement-data',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'helix',
        projectType: 'development',
        projectTitle: 'Helix',
        projectDuration: 'Completed',
        client: 'idmc',
        summary: '',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'sikka',
        projectType: 'development',
        projectTitle: 'Sikka',
        projectDuration: 'Completed',
        client: 'world-vision',
        summary: 'Dashboard to keep track of the Sikka tokens to managers.  It’s an Ethereum token contract to manage the creation, distribution, and validation of all transactions within humanitarian aid programming. Sikka is a digital platform that facilitates the distribution of cash to beneficiaries in a seamless digital token through the use of blockchain technology. It is an Hyperledger token contract to manage the creation, distribution, track, and validation of all transactions within humanitarian aid programming. The main aim of the project was to remove the chances of misuse of cash, loss of possession, stealing, and damage of goods. Sikka is a revolutionary concept where beneficiaries are sent an SMS text message and from where they can head to the nearest vendor shop to claim the relief (in amount or goods). Upon claiming the relief, the vendor sends an SMS that transfers the token to the recipient.',
        skills: ['react', 'd3', 'blockchain'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'child-sponsor',
        projectType: 'development',
        projectTitle: 'Child sponsership and Data Visualization',
        projectDuration: 'Completed',
        client: 'world-vision',
        summary: 'World Vision runs a child sponsorship program where a donor can sponsor the education of a child in a remote area. It is a platform to upload data from XML, and visualize in an appealing manner. The platform allows the users to grasp data quickly via visualizations done in various charts. Initially, data tracking was done using older technology hosted in the US which resulted in slow and not-so-user-friendly experience.',
        skills: ['react', 'd3', 'mapbox', 'django'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'paalika',
        projectType: 'development',
        projectTitle: 'Paalika Profile Generator',
        projectDuration: 'Completed',
        client: 'hrrp',
        summary: 'Paalika Profile Generator is a dashboard to upload excel sheets, visualize the data, and print the charts and data in PDF format. The dashboard automatically generates profiles of municipalities to access damaged and reconstructed houses using municipality level data. The dashboard is used to track the utilization of the funds from the government.',
        skills: ['react', 'django', 'qgis'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'pdm',
        projectType: 'research',
        projectTitle: 'Post Distribution Monitoring (PDM) of the BHAKARI Program by Mercy Corps',
        projectDuration: 'February 2022 - Completed',
        client: 'viamo',
        summary: 'This project’s main objective is to examine how the Mercy Corps’ BHAKARI program in Nepal was received. The BHAKARI initiative placed a heavy emphasis on gender equality and social participation to increase long-term food security while simultaneously addressing short-term emergency shocks. To gather and assess Mercy Corps assistance in the affected communities in Nepal’s six districts—Kalikot, Mugu, Dailekh, Accham, Jumla, and Surkhet—we closely collaborated with the Viamo team. Power Bi is further used to display and present the obtained data in the Dashboard.',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'lgbtiq',
        projectType: 'research',
        projectTitle: 'Study On Violence Against LGBTIQ+ Persons In Nepal',
        projectDuration: 'May - October 2022',
        client: 'viamo',
        summary: 'The main objective of this research was to explore the social and personal experiences of a member of the LGBTIQ+ communities in Nepal. The study also aimed to understand the factors that affect their quality of life, their safety, and well-being. Furthermore, the research is to strengthen activities and shape policies aimed at preventing and responding to threats to the security and well-being of LGBTIQ+ persons.',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'fragility-study',
        projectType: 'research',
        projectTitle: 'Fragility Study in Post Conflict Context of Nepal',
        projectDuration: 'March - April 2022',
        client: 'oxfam',
        summary: 'The main objective of this project was to understand fragility and conflict in connection to the One Programme Approach of Oxfam Nepal. The drivers and the causes of fragility that cause and escalate conflicts and risks in the post-conflict situation were identified and Oxfam’s response to these risks and peacebuilding opportunities was analyzed. The appropriate tools, techniques, and approaches were recommended to Oxfam for post-conflict situations.',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'refugee-situation',
        projectType: 'research',
        projectTitle: 'Refugee Situational Analysis',
        projectDuration: 'January 2020 - Until now',
        client: 'ifrc',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey, which constitutes primarily Syrian refugees. The project aims to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, and increased demand for essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions of discrimination as barriers to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        skills: ['secondary-data-review', 'description-analysis'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'hno-support',
        projectType: 'research',
        projectTitle: 'HNO Support',
        projectDuration: 'August 2021 - November 2021',
        client: 'dfs',
        summary: 'Humanitarian Needs Overview (HNOs) are created to assist the Humanitarian Country Team in building shared knowledge of the impact and progress of a disaster, as well as to inform response strategy. We carried out situation and response monitoring to help identify the needs of the affected population to produce better assessments for four countries viz. Sudan, South Sudan, Somalia, and Afghanistan. We collaborated with Data Friendly Space (DFS) to develop a repository of well-tagged documents in DEEP to make well-informed HNO reports for the year 2022.',
        skills: ['secondary-data-review', 'qualitative-analysis'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'covid-19',
        projectType: 'research',
        projectTitle: 'COVID - 19 Information Management',
        projectDuration: 'November 2020 - May 2021',
        client: 'gimac',
        summary: 'This project was focused on improving situational awareness, enhancing the understanding of the global and country-specific COVID-19 impacts from an inter-sectoral perspective, informing humanitarian programming and response, and providing evidence for decision-making at the global and country level. We performed a secondary data review of the available reports and systematized the relevant information in the customized analytical framework to assist in the fast retrieval of information to better assist in response planning. The pre and post-epidemic situation-related impacts were overviewed and weighed up to have a comparative understanding of the magnitude and intensity of the impact of the epidemic, which would facilitate the humanitarian agencies to identify the severity of the sectoral need, and response gaps and plan the assistance and response accordingly.',
        skills: ['secondary-data-review', 'qualitative-analysis'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'urban-context',
        projectType: 'research',
        projectTitle: 'Humanitarian Assistance in an Urban Context',
        projectDuration: 'January 2021',
        client: 'grc',
        summary: 'This project aimed to systematize and catalog information related to the lessons learned from past humanitarian interventions to enhance response planning in the urban context. We collated the required information from the relevant documents into a customized thematic analytical framework.',
        skills: ['secondary-data-review', 'comprehension-skills'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'emr',
        projectType: 'research',
        projectTitle: 'Evaluation of Emergency Response Mechanism (ERM)',
        projectDuration: 'December 2020',
        client: 'drc',
        summary: 'Emergency Response Mechanism is a rapid response facility funded by ECHO that aims to provide immediate, life-saving assistance to affected populations- primarily through multi-purpose cash, protection, and WASH assistance. It is currently implemented across 33 of Afghanistan’s 34 provinces. Evaluation of Emergency Response Mechanism was commissioned by DRC to evaluate ERM with a focus mainly on changes made to the cycle of ERM 10. We supported this project by conducting a secondary data review of the relevant documents provided by the DRC team. We collated and analyzed the provided documents as per the tailored analytical framework to highlight the key changes that occurred between ERM 9 and 10.  We also evaluated the performance of the ERM and adherence to the Core Humanitarian Standards (CHS), including effectiveness and timeliness of assistance, the relevance of the design, targeting, and modalities, efficiency of the mechanism, level of coordination, and complementarity with other actors.',
        skills: ['transcribing', 'data-labeling'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'ifrc-appeal',
        projectType: 'research',
        projectTitle: 'IFRC Appeal Documents',
        projectDuration: 'March 2019',
        client: 'okular',
        summary: 'This project focused on assessing the impact of natural disasters on crisis-affected countries. We supported IFRC by developing a well-organized data set for 134 countries and identifying the extent of damage, the priority needs of the affected population, and documenting the type of disaster and the impact it had on the pre-existing conflict situation.',
        skills: ['secondary-data-review', 'data-labeling'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'lebanon-yemen',
        projectType: 'research',
        projectTitle: ' Lebanon and Yemen Situational Analysis',
        projectDuration: 'July 2021',
        client: 'okular',
        summary: 'This project primarily focused on assessing the severity of the humanitarian situation in Lebanon and Yemen, including identifying the number of people in need in those countries. We supported this by analyzing situation analysis reports of Lebanon and Yemen published in 2021 to inform the Solidarites International annual programming for 2022. We identified the current and forecasted priority needs in Yemens West Coast (Ta’izz and Hodeidah Governorate) and Lebanon’s (North and Beqaa Governorate). We collated the relevant information in the respective framework in DEEP.',
        skills: ['review-country'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'humanitarian-access',
        projectType: 'research',
        projectTitle: 'Humanitarian Access',
        projectDuration: 'October - November 2021',
        client: 'dfs-norwegian',
        summary: 'The goal of this project was to gain a detailed understanding of current humanitarian access measurement practices, including definitions, frameworks, and methodologies, to generate further reflections on existing trends, gaps, and evolution possibilities, and ultimately provide recommendations, with a special emphasis on the dimension of people in need’s access to essential services and aid. Furthermore, it aimed to present a picture of the current state of the art in humanitarian access measurement, particularly in terms of planning and design, data collection and collation, analysis, communication, and dissemination.',
        skills: ['secondary-data-review', 'data-labeling'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'ifrc-questionaire',
        projectType: 'research',
        projectTitle: 'IFRC Questionnaire',
        projectDuration: 'May 2021 - November 2021',
        client: 'ifrc',
        summary: 'This project aimed at creating an organized and verified set of survey questions regarding various humanitarian crises and making them available in the inbuilt-designed data collection tool and IFRC’s Kobo Toolbox. We performed segregation of data and data labeling of households, focus group discussions (FGDs), and key informant interviews (KIIs)  taken by IFRC globally.',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'ebola-review',
        projectType: 'research',
        projectTitle: 'Ebola Review',
        projectDuration: 'August 2019',
        client: 'okular',
        summary: 'We supported IFRC in the program evaluation of the Ebola outbreak centered in West Africa. We evaluated and categorized the program reports based on their relevance/appropriateness, connectedness, coherence, coverage, efficiency, effectiveness, and impact. The project focused on the response evaluation of Ebola of Nord-Kivu, Equateur, and Regional.',
        skills: [],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'ukraine-russia-war',
        projectType: 'research',
        projectTitle: 'Situational Analysis of the Ukraine-Russia War',
        projectDuration: 'March 2022 -June 2022 and September onwards',
        client: 'dfs-imac',
        summary: 'This project synthesis of information collected and tagged using the DEEP platform from publicly available sources and supplemented by assessment data provided by humanitarian partners working in Ukraine and neighboring countries.',
        skills: ['secondary-data-review', 'data-analysis', 'report-writing'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'global-covid-19',
        projectType: 'research',
        projectTitle: 'Global COVID-19 Situational Analysis',
        projectDuration: 'August 2020 - October 2021',
        client: 'dfs-immap',
        summary: 'Funded by USAID, this project focused on providing extensive information regarding the impact of COVID-19 on refugees and migrants and identifying the unmet needs of affected people due to COVID-19 and the pre-existing humanitarian crisis in Columbia, Burkina Faso, DRC, Nigeria, Syria, and Bangladesh. We closely worked with Data Friendly Space (DFS), the main implementing partner of the project in monitoring the situation in Nigeria, Syria, and Bangladesh from various secondary sources that mainly focused on COVID-19 and tracked reports regularly followed by standardized steps in accumulating necessary data, analyzing them, and aiding in report writing every month. We also provided assistance in putting down annual reports on pandemics relating to various fields.',
        skills: ['secondary-data-review', 'data-analysis', 'report-writing'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'sdg-analysis',
        projectType: 'research',
        projectTitle: 'SDG Analysis',
        projectDuration: 'February 2020 and January 2022',
        client: 'undco',
        summary: 'Our role was to support  UNDCO Okular Analytics in reviewing the reform of the coordination architecture and the progress towards the 17 Sustainable Development Goals (SDGs) through reviewing and analyzing the responses. The questions focused on changes in the government’s response towards the United Nations Country Team (UNCT) in response to the reform environment; changes in the UNCT’s work responding to the new reform environment during the given year; modalities of engagement with the UNDCO regional team in terms of support received, achievements and challenges; most significant achievements in delivering together for the 2030 Agenda; support to the national government in the advancing the achievement so the SDGs and key challenges in joint work collaborating to achieve SDGs. We produced a dataset containing all findings from the six questions structured by country and region and sorted the information using a tailored analytical framework, assisting in the development of one global report and five regional reports and recommendations for future rounds with the support of experts.',
        skills: ['secondary-data-review', 'qualitative-analysis', 'report-writing'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
    {
        id: 'scoring-matrix',
        projectType: 'research',
        projectTitle: 'Scoring Matrix',
        projectDuration: '',
        client: 'okular',
        summary: '',
        skills: ['data-review', 'critical-thinking', 'm&e-skills'],
        projectUrl: '',
        tags: ['monitoring-and-evaluation'],
    },
];

export default projects;