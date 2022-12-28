import { mapToList } from '@togglecorp/fujs';

export interface Client {
    name: string;
    url: string;
    domain: string;
}

export const peopleInNeed: Client = {
    name: 'People In Need (PIN)',
    url: 'http://www.durablesolutionsnepal.org/npl',
    domain: 'Internal Displacement',
};

export const dfid: Client = {
    name: 'DFID',
    url: 'https://www.gov.uk/government/organisations/department-for-international-development',
    domain: 'Development',
};

export const smtm: Client = {
    name: 'SMTM Capital',
    url: 'https://www.smtmcapital.com.np',
    domain: 'Captial Market',
};

export const jips: Client = {
    name: 'JIPS',
    url: 'https://www.jips.org',
    domain: 'Displacement',
};

export const dfidukaid: Client = {
    name: 'DFID-UKAID(Nepal)',
    url: 'https://legacy.dvs-nepal.org/infographics',
    domain: 'Infographics',
};

export const goldenCommunity : Client = {
    name: 'Golden Community',
    url: '',
    domain: 'Survey',
};

export const worldVision: Client = {
    name: 'World Vision',
    url: '',
    domain: 'Education',
};

export const dfs: Client = {
    name: 'DFS',
    url: '',
    domain: 'Visualizations',
};

export const idmc: Client = {
    name: 'Internal Displacement Monitoring Center (IDMC)',
    url: '',
    domain: 'Visualizations',
};

export const hrrp: Client = {
    name: 'Housing Recovery and Reconstruction Platform',
    url: '',
    domain: 'Visualizations',
};

export const viamo: Client = {
    name: 'Viamo',
    url: '',
    domain: 'Research',
};

export const oxfam: Client = {
    name: 'Oxfam',
    url: '',
    domain: 'Research',
};

export const ifrc: Client = {
    name: 'Data Friendly Space for International Federation of Red Cross',
    url: '',
    domain: 'Research',
};

export const grc: Client = {
    name: 'Data Friendly Space for German Red Cross (GRC)',
    url: '',
    domain: 'Research',
};

export const gimac: Client = {
    name: 'Data Friendly Space for Global Information Management, Assessment, and Analysis Cell (GIMAC)',
    url: '',
    domain: 'Research',
};

export const drc: Client = {
    name: 'Data Friendly Space for Danish Refugee Council (DRC)',
    url: '',
    domain: 'Research',
};

export const okular: Client = {
    name: 'Okular Analytics for the International Federation of Red Cross (IFRC)',
    url: '',
    domain: 'Research',
};

export const okularAnalysis: Client = {
    name: 'Okular Analysis',
    url: '',
    domain: 'Research',
};

export const dfsNorwegian: Client = {
    name: 'Data Friendly Space for Norwegian Refugee Council',
    url: '',
    domain: 'Research',
};

export const dfsIMAC: Client = {
    name: 'Data Friendly Space for IMAC and REACH Initiative',
    url: '',
    domain: 'Research',
};

export const dfsimmap: Client = {
    name: 'Data Friendly Space for iMMAP',
    url: '',
    domain: 'Research',
};

export const undco: Client = {
    name: 'Data Friendly Space for United Nations Development Coordination Office ( UNDCO)',
    url: '',
    domain: 'Research',
};

const clientsMapping = {
    jips,
    smtm,
    dfid,
    dfs,
    idmc,
    hrrp,
    viamo,
    oxfam,
    ifrc,
    grc,
    gimac,
    drc,
    okular,
    undco,
    'dfs-immap': dfsimmap,
    'dfs-imac': dfsIMAC,
    'dfs-norwegian': dfsNorwegian,
    'okula-analysis': okularAnalysis,
    'dfid-ukaid': dfidukaid,
    'people-in-need': peopleInNeed,
    'golden-community': goldenCommunity,
    'world-vision': worldVision,
};

export type ClientId = keyof typeof clientsMapping;

export const clients = mapToList(
    clientsMapping,
    (item, key) => ({
        key: key as ClientId,
        title: item,
    }),
);

export function getClient(key: ClientId) {
    return clientsMapping[key];
}
