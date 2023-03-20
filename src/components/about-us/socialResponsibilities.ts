import { StaticImageData } from 'next/image';

import sanitizer from 'resources/aboutUs/socialResponsibility/sanitizers.webp';
import volunteers from 'resources/aboutUs/socialResponsibility/volunteers.jpeg';
import bloodDonation from 'resources/aboutUs/socialResponsibility/blood_donation.jpeg';
import tempCheck from 'resources/aboutUs/socialResponsibility/temp-check.webp';
import childAwareness from 'resources/aboutUs/socialResponsibility/child-awareness.webp';
import lunchDistribution from 'resources/aboutUs/socialResponsibility/lunch-distribution.webp';

interface SocialResponsibility {
    id: string;
    image: string | StaticImageData;
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
        image: volunteers,
        imageAlt: 'logo',
    },
    {
        id: '3',
        image: tempCheck,
        imageAlt: 'logo',
    },
    {
        id: '4',
        image: childAwareness,
        imageAlt: 'logo',
    },
    {
        id: '5',
        image: lunchDistribution,
        imageAlt: 'logo',
    },
    {
        id: '6',
        image: bloodDonation,
        imageAlt: 'logo',
    },
];

export default socialResponsibilities;
