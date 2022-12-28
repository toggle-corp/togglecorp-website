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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed volutpat odio. Etiam ullamcorper velit vitae felis molestie facilisis. Cras.',
    link: '/services/development',
};

export const research: ProjectTypeItem = {
    image: researchImage,
    title: 'Research and Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, suscipit quis mi quis, porttitor feugiat nibh. Aliquam non.',
    link: '/services/research',
};

export const consulting: ProjectTypeItem = {
    image: consultationImage,
    title: 'Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat luctus efficitur. Vivamus blandit ultricies velit, a convallis lacus pharetra.',
    link: '/services/consulting',
};

const projectTypesMapping = {
    development,
    research,
    consulting,
};

export type ProjectType = keyof typeof projectTypesMapping;

export const projectTypes = mapToList(
    projectTypesMapping,
    (item, key) => ({
        key: key as ProjectType,
        ...item,
    }),
);

export function getProjectType(key: ProjectType) {
    return {
        key,
        ...projectTypesMapping[key],
    };
}
