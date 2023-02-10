import amusementLogo from 'resources/amusement.svg';
import passionateLogo from 'resources/passionate.svg';
import mutiCultureLogo from 'resources/multi-cultural.svg';

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
        image: mutiCultureLogo,
    },
    {
        key: '2',
        title: 'Passionate & Enthusiastic',
        description: 'Give our team any problem or challenge, they are ready to solve it with sheer determination, passion, and enthusiasm',
        image: passionateLogo,
    },
    {
        key: '3',
        title: 'Amusement',
        description: 'Our young and energetic team are sure to brighten up your day be it with random dance, out-of-scale music, good food, or just by listening',
        image: amusementLogo,
    },
];

export default expertises;
