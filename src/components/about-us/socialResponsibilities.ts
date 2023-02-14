import sanitizer from 'resources/aboutUs/socialResponsibility/sanitizers.webp';
import foodDistribution from 'resources/aboutUs/socialResponsibility/food-distribution.webp';
import students from 'resources/aboutUs/socialResponsibility/students.webp';
import tempCheck from 'resources/aboutUs/socialResponsibility/temp-check.webp';
import childAwareness from 'resources/aboutUs/socialResponsibility/child-awareness.webp';
// import awareness from 'resources/aboutUs/socialResponsibility/awareness.webp';
import lunchDistribution from 'resources/aboutUs/socialResponsibility/lunch-distribution.webp';

interface SocialResponsibility {
    id: string;
    image: string;
    imageAlt: string,
}

const socialResponsibilities: SocialResponsibility[] = [
    {
        id: '1',
        image: sanitizer,
        imageAlt: 'logo',
    },
    {
        id: '2',
        image: foodDistribution,
        imageAlt: 'logo',
    },
    {
        id: '3',
        image: students,
        imageAlt: 'logo',
    },
    {
        id: '4',
        image: tempCheck,
        imageAlt: 'logo',
    },
    {
        id: '5',
        image: childAwareness,
        imageAlt: 'logo',
    },
    {
        id: '6',
        image: lunchDistribution,
        imageAlt: 'logo',
    },
];

export default socialResponsibilities;
