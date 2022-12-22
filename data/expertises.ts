import planningLogo from 'resources/planning.png';
import monitoringLogo from 'resources/monitoring.png';

export interface Expertise {
    key: string;
    title: string;
    description: string;
    image: string;
}

const expertises: Expertise[] = [
    {
        key: '1',
        title: 'Multicultural',
        description: 'Our team members come from different social and cultural background. Likewise, we work with clients from different socio-cultural background',
        image: planningLogo,
    },
    {
        key: '1',
        title: 'Monitoring',
        description: 'We conduct periodic and continuous monitoring and evaluation of the humanitarian efforts in emergency response',
        image: monitoringLogo,
    },
];

export default expertises;
