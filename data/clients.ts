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
const clientsMapping = {
    jips,
    smtm,
    dfid,
    'people-in-need': peopleInNeed,
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
