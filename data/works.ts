import workListOne from 'resources/work-list-1.webp';
import {
    Organization,

    peopleInNeed,
    dfid,
    smtmCapital,
    jips,
} from './organizations';

export type WorkType = 'research' | 'development' | 'consulting';

export interface Work {
    id: 'ifrc-go' | 'dfid' | 'npstocks' | 'innovation-project';
    projectType: WorkType;
    projectTitle: string;
    projectDuration: string;
    client: Organization;
    summary: string;
    whatWeDid: string[];
    skillsUsed: string;
    projectUrl: string;
}

const works: Work[] = [
    {
        id: 'ifrc-go',
        projectType: 'development',
        projectTitle: 'IFRC Go Development',
        projectDuration: 'Ongoing',
        client: peopleInNeed,
        summary: 'Durable Solutions is a UKAID funded program that implements resettlement programs. The Durable Solutions Dashboard came into existence to track displacements in a set number of districts. It is a platform to visualize geohazard-affected communities in a set number of districts. The dashboard is used to track the number of relief a displaced person or family has received and the amount they have received. It displays data at the municipality level in those districts. Additionally, the dashboard tracks the starting point of displacement to the ending point. It also displays the number of displaced people',
        whatWeDid: [
            'Internal and external discussions to gather requirements and information',
            'Integrate Leaflet library into the React application',
            'Inject React application into WordPress',
            'Work with external backend team to integrate data into the React application',
            'Create required API in Python Django',
        ],
        skillsUsed: 'React on Wordpress, Django, Leaflet',
        projectUrl: 'https://go.ifrc.org/',
    },
    {
        id: 'dfid',
        projectType: 'development',
        projectTitle: 'DFID Dashboard',
        projectDuration: 'Ongoing',
        client: dfid,
        summary: 'Platform to visually identify the vulnerable areas and the regions that DFID has its presence in. The visualization is used to identify gaps during the COVID crisis and allocate more resources in areas that are most affected. DFID dashboard is a platform built to visualize the vulnerable areas and regions that DFID has its presence in. The platform allowed the user to track the organizations in different parts of Nepal with an interactive visualization of the country’s map. Some features within the platform include generating different graphs, dynamic comparison tool, segregating the map into geographical regions, generating infographics according to location, and more.',
        whatWeDid: [
            'Multiple meetings with DFID members',
            'Communication with external backend team',
            'Multiple communication tools',
            'Work with external backend team to integrate data into the React application',
            'Project management tool (Trello) to keep track of tasks',
        ],
        projectUrl: 'https://www.dvs-nepal.org',
        skillsUsed: 'ReactJS, Mapbox, Django',
    },
    {
        id: 'npstocks',
        projectType: 'consulting',
        projectTitle: 'NPstocks',
        projectDuration: 'Ongoing',
        client: smtmCapital,
        summary: 'NPstocks is a stock application created for Nepali stock market. It is an application that aids the users with decision making in investing in the secondary share market with real-time share market data and multiple appealing visual charts. NPstocks has a plethora of features such as maintaining a portfolio, keeping an eye on a certain company’s stock, tracking NEPSE’s trend, broker activity, company trends, visualizations (in weeks, months, quarters, half-year, and year), historical activities, and more.',
        whatWeDid: [
            'Initial requirements gathering along with mockups discussion',
            'Multiple discussions with SMTM as the app integrated their backend',
            'Divide the project into two phases',
            'Phase 1: work with less data, load data quickly, and work on android phones at the time',
            'Introduce React Native to the project as the app was to work on iOS devices as well',
            'Phase 2: animations, multiple visualizations, and night mode',
        ],
        skillsUsed: 'React Native, Websocket, NodeJS, and Firebase (for authentication and analytics)',
        projectUrl: 'https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks&hl=en&gl=US&pli=1',
    },
    {
        id: 'innovation-project',
        projectType: 'research',
        projectTitle: 'Innovation Project',
        projectDuration: 'Ongoing',
        client: jips,
        summary: 'The aim of the Innovation project is to allow different organizations to collaboratively process and compute data within their premises without any trust issues. We collaborated with Flowminder who had been working in a similar domain working mostly with anonymized data. For initial MVP deliverable, we chose telecommunication data which Flowminder had been working on. Using the technology and tools along with help from Flowminder, we set up the data processing pipeline and initial computations.',
        whatWeDid: [
            'Requirements gathering',
            'Project Plan',
            'System Design',
            'Collaboration with Polto and Flowminder',
        ],
        skillsUsed: 'Docker, Docker Swarm, Flowkit, Airflow',
        projectUrl: 'https://www.jips.org',
    },
];

// NOTE: we need to separate out images because they cannot be passed throught
// getStaticProps
const workCoverImages: {
    [key in Work['id']]: string;
} = {
    'ifrc-go': workListOne,
    dfid: workListOne,
    npstocks: workListOne,
    'innovation-project': workListOne,
};
export function getWorkCoverImage(workId: Work['id']) {
    return workCoverImages[workId];
}

const workTitles: {
    [key in WorkType]: string;
} = {
    research: 'Research',
    development: 'Development',
    consulting: 'Consulting',
};
export function getProjectTypeTitle(projectType: WorkType) {
    return workTitles[projectType];
}

export default works;
