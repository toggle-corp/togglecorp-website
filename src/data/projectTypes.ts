import researchImg from 'resources/research.png';
import techDevelopment from 'resources/development.png';
import consultation from 'resources/consultation.png';

import { mapToList } from '@togglecorp/fujs';

interface ProjectTypeItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

export const development: ProjectTypeItem = {
    image: techDevelopment,
    title: 'Development',
    description:
        'Our magicians tailor solutions for your business needs',
    link: '/services/development',
};

export const research: ProjectTypeItem = {
    image: researchImg,
    title: 'Research and Analysis',
    description:
        'We create a meaningful picture of data through research and analysis',
    link: '/services/research',
};

export const consulting: ProjectTypeItem = {
    image: consultation,
    title: 'Consultation',
    description:
        'We help organizations by providing practical and efficient solutions',
    link: '/services/consulting',
};

const projectTypesMapping = {
    development,
    research,
    consulting,
};

export type ProjectType = keyof typeof projectTypesMapping;

export const projectTypes = mapToList(projectTypesMapping, (item, key) => ({
    key: key as ProjectType,
    ...item,
}));

export function getProjectType(key: ProjectType) {
    return {
        key,
        ...projectTypesMapping[key],
    };
}
