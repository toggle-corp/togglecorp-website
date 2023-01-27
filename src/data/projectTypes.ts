import researchImage from 'resources/research.png';
import developmentImage from 'resources/development.png';
import consultationImage from 'resources/consultation.png';

import { mapToList } from '@togglecorp/fujs';

interface ProjectTypeItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

export const development: ProjectTypeItem = {
    image: developmentImage,
    title: 'Tech Development',
    description:
        'Our magicians tailor solutions for your business needs',
    link: '/services/development',
};

export const research: ProjectTypeItem = {
    image: researchImage,
    title: 'Research and Analysis',
    description:
        'We specialize in secondary data review on various reports',
    link: '/services/research',
};

export const consulting: ProjectTypeItem = {
    image: consultationImage,
    title: 'Consultation',
    description:
        'We aim to help your business strive by providing practical solutions.',
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
