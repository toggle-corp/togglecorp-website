import { StaticImageData } from 'next/image';

import guitar from 'resources/aboutUs/collage/guitar.jpeg';
import panipuri from 'resources/aboutUs/collage/panipuri.jpeg';
import yomari from 'resources/aboutUs/collage/yomari.jpeg';
import samosa from 'resources/aboutUs/collage/samosa.jpeg';
import chatpateyParty from 'resources/aboutUs/collage/chatpatey-party.jpeg';
import fifa from 'resources/aboutUs/collage/fifa.jpeg';
import meeting from 'resources/aboutUs/collage/meeting.jpeg';
import celebration from 'resources/aboutUs/collage/celebration.jpeg';
import movie from 'resources/aboutUs/collage/movie.jpeg';

interface GalleryItem {
    id: string;
    image: string | StaticImageData;
    imageAlt: string,
    caption: string;
}

const gallery: GalleryItem[] = [
    {
        id: '1',
        image: celebration,
        imageAlt: 'life-at-TC',
        caption: 'When we have a “big win," we celebrate with cakes and donuts and sometimes with chatpate or our favorite suntala/bhogate sadeko (tangy combo of pomelo and oranges under the sun).',
    },
    {
        id: '2',
        image: yomari,
        imageAlt: 'life-at-TC',
        caption: 'Being a foodie has a perk. Some are still hungry after eating a full thali for lunch, so they opt for more. Sometimes we wonder if we came here to work or to eat….. Just Kidding!!!',
    },
    {
        id: '3',
        image: chatpateyParty,
        imageAlt: 'life-at-TC',
        caption: '"Guys, let\'s gather up at the kitchen. We have a special treat for you. Hurry up, you don\'t want to miss it". Whenever any one of us hears this, we can be sure we\'re going to have fun (and something good).',
    },
    {
        id: '4',
        image: samosa,
        imageAlt: 'life-at-TC',
        caption: 'What do we do when get to the office and get hungry? Samosa comes to our rescue (and our stomach).',
    },
    {
        id: '5',
        image: panipuri,
        imageAlt: 'life-at-TC',
        caption: 'From panipuri eating competition to playing sequence, just name it and we do it!',
    },
    {
        id: '6',
        image: meeting,
        imageAlt: 'life-at-TC',
        caption: 'Meeting at the office? Nah! How about a dinner meeting with a view, fire, good food, and good company? Yes, count me in!',
    },
    {
        id: '7',
        image: guitar,
        imageAlt: 'life-at-TC',
        caption: 'Be it blasting through the speakers or a live gig from our in-house band, music flows through Togglecorp',
    },
    {
        id: '8',
        image: fifa,
        imageAlt: 'life-at-TC',
        caption: 'As the great Dani Rojas once said, "Football is life!". From playing futsal in real life to futsal in PS4, we do it all.',
    },
    {
        id: '9',
        image: movie,
        imageAlt: 'life-at-TC',
        caption: 'Let\'s not forget our weekly movie night. A Harry Potter fan?? How about a marathon with popcorn and momos?',
    },
];

export default gallery;
