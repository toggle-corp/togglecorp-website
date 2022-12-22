type OrganizationKey = 'people-in-need' | 'dfid' | 'smtm-capital' | 'jips';

export interface Organization {
    id: OrganizationKey;
    name: string;
    url: string;
    domain: string;
}

export const peopleInNeed: Organization = {
    id: 'people-in-need',
    name: 'People In Need (PIN)',
    url: 'http://www.durablesolutionsnepal.org/npl',
    domain: 'Internal Displacement',
};

export const dfid: Organization = {
    id: 'dfid',
    name: 'DFID',
    url: 'https://www.gov.uk/government/organisations/department-for-international-development',
    domain: 'Development',
};

export const smtmCapital: Organization = {
    id: 'smtm-capital',
    name: 'SMTM Capital',
    url: 'https://www.smtmcapital.com.np',
    domain: 'Captial Market',
};

export const jips: Organization = {
    id: 'jips',
    name: 'JIPS',
    url: 'https://www.jips.org',
    domain: 'Displacement',
};

const organizations: Organization[] = [
    peopleInNeed,
    dfid,
    smtmCapital,
    jips,
];

export default organizations;
