import workListOne from 'resources/work-list-1.webp';

interface SocialResponsibility {
    id: string;
    image: string;
    imageAlt: string,
    caption: string;
}

const socialResponsibilities: SocialResponsibility[] = [
    {
        id: '1',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'An open-sourced library to do something really cool',
    },
    {
        id: '1',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'Teaching and learning with under-priviliedged kids from Jawalakhel',
    },
];

export default socialResponsibilities;
