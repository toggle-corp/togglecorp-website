import researchImage from 'resources/research.png';
import developmentImage from 'resources/development.png';
import consultationImage from 'resources/consultation.png';

// FIXME: move this to about-us

interface ServiceItem {
    key: 'tech-development' | 'research-and-analysis' | 'consultation';
    image: string;
    title: string;
    description: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        key: 'tech-development',
        image: developmentImage,
        title: 'Tech Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed volutpat odio. Etiam ullamcorper velit vitae felis molestie facilisis. Cras.',
        link: '/services/technology',
    },
    {
        key: 'research-and-analysis',
        image: researchImage,
        title: 'Research and Analysis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, suscipit quis mi quis, porttitor feugiat nibh. Aliquam non.',
        link: '/services/analysis',
    },
    {
        key: 'consultation',
        image: consultationImage,
        title: 'Consultation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat luctus efficitur. Vivamus blandit ultricies velit, a convallis lacus pharetra.',
        link: '/services/consulting',
    },
];

export default services;
