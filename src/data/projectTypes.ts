import { mapToList } from '@togglecorp/fujs';
import { StaticImageData } from 'next/image';

import researchImg from 'resources/research.png';
import techDevelopment from 'resources/development.png';
import consultation from 'resources/consultation.png';

import consultationBanner from 'resources/consulting/banner.jpeg';
import techDevelopmentBanner from 'resources/development/banner.jpeg';
import researchImgBanner from 'resources/researchAnalysis/banner.jpeg';

interface ProjectTypeItem {
    image: string | StaticImageData;
    bannerImage?: string | StaticImageData;
    title: string;
    description: string;
    link: string;
}

export const development: ProjectTypeItem = {
    image: techDevelopment,
    bannerImage: techDevelopmentBanner,
    title: 'Development',
    description:
        'Our magicians tailor solutions for your venture',
    link: '/services/development',
};

export const research: ProjectTypeItem = {
    image: researchImg,
    bannerImage: researchImgBanner,
    title: 'Tagging, Research and Analysis',
    description:
        'We turn mundane data into exciting visuals that tell a story',
    link: '/services/research',
};

export const consulting: ProjectTypeItem = {
    image: consultation,
    bannerImage: consultationBanner,
    title: 'Consultation',
    description:
        'We create and implement strategies that align your vision',
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
