import researchImage from 'resources/analyst.jpeg';
import developmentImage from 'resources/development.jpeg';
import consultationImage from 'resources/consulting.jpeg';

import { mapToList } from '@togglecorp/fujs';

interface ProjectTypeItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

export const development: ProjectTypeItem = {
    image: developmentImage,
    title: 'Development',
    description:
        'Our magicians tailor solutions for your business needs.',
    link: '/services/development',
};

export const research: ProjectTypeItem = {
    image: researchImage,
    title: 'Research and Analysis',
    description:
        'We create a meaningful picture of data through research and analysis.',
    link: '/services/research',
};

export const consulting: ProjectTypeItem = {
    image: consultationImage,
    title: 'Consultation',
    description:
        'We help your business by providing practical and efficient solutions.',
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
