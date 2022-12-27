import { TagId } from 'data/tags';
import { ProjectType } from 'data/projectTypes';
import { SkillId } from 'data/skills';
import { ClientId } from 'data/clients';

export type ProjectId = 'ifrc-go' | 'dfid' | 'npstocks' | 'innovation-project';

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
        client: 'people-in-need',
        summary: 'Durable Solutions is a UKAID funded program that implements resettlement programs. The Durable Solutions Dashboard came into existence to track displacements in a set number of districts. It is a platform to visualize geohazard-affected communities in a set number of districts. The dashboard is used to track the number of relief a displaced person or family has received and the amount they have received. It displays data at the municipality level in those districts. Additionally, the dashboard tracks the starting point of displacement to the ending point. It also displays the number of displaced people',
        skills: ['react', 'django', 'leaflet'],
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
        projectType: 'consulting',
        projectTitle: 'NPstocks',
        projectDuration: 'Ongoing',
        client: 'smtm',
        summary: 'NPstocks is a stock application created for Nepali stock market. It is an application that aids the users with decision making in investing in the secondary share market with real-time share market data and multiple appealing visual charts. NPstocks has a plethora of features such as maintaining a portfolio, keeping an eye on a certain company’s stock, tracking NEPSE’s trend, broker activity, company trends, visualizations (in weeks, months, quarters, half-year, and year), historical activities, and more.',
        skills: ['react-native', 'node', 'firebase'],
        projectUrl: 'https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks&hl=en&gl=US&pli=1',
        tags: ['report-writing'],
    },
    {
        id: 'innovation-project',
        projectType: 'research',
        projectTitle: 'Innovation Project',
        projectDuration: 'Ongoing',
        client: 'jips',
        summary: 'The aim of the Innovation project is to allow different organizations to collaboratively process and compute data within their premises without any trust issues. We collaborated with Flowminder who had been working in a similar domain working mostly with anonymized data. For initial MVP deliverable, we chose telecommunication data which Flowminder had been working on. Using the technology and tools along with help from Flowminder, we set up the data processing pipeline and initial computations.',
        skills: ['docker'],
        projectUrl: 'https://www.jips.org',
        tags: ['report-writing'],
    },
];

export default projects;
