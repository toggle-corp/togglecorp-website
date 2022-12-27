import researchImage from 'resources/research.png';
import developmentImage from 'resources/development.png';
import consultationImage from 'resources/consultation.png';

import { WorkType } from 'data/works';

// FIXME: move this to about-us

interface ServiceItem {
    key: WorkType;
    image: string;
    title: string;
    description: string;
    link: string;
}

export const techService: ServiceItem = {
    key: 'development',
    image: developmentImage,
    title: 'Tech Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed volutpat odio. Etiam ullamcorper velit vitae felis molestie facilisis. Cras.',
    link: '/services/technology',
};

export const researchService: ServiceItem = {
    key: 'research',
    image: researchImage,
    title: 'Research and Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, suscipit quis mi quis, porttitor feugiat nibh. Aliquam non.',
    link: '/services/analysis',
};

export const consultationService: ServiceItem = {
    key: 'consulting',
    image: consultationImage,
    title: 'Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat luctus efficitur. Vivamus blandit ultricies velit, a convallis lacus pharetra.',
    link: '/services/consulting',
};

const services: ServiceItem[] = [
    techService,
    researchService,
    consultationService,
];

export default services;
