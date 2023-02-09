import workListOne from 'resources/work-list-1.webp';
import yomari from '../../resources/aboutUs/collage/yomari.jpeg';
import samosa from '../../resources/aboutUs/collage/samosa.jpeg';
import chatpatey_party from '../../resources/aboutUs/collage/chatpatey_party.jpeg';
import fifa from '../../resources/aboutUs/collage/fifa.jpeg';
import meeting from '../../resources/aboutUs/collage/meeting.jpeg';
import celebration from '../../resources/aboutUs/collage/celebration.jpeg';
import movie from '../../resources/aboutUs/collage/movie.jpeg';

interface GalleryItem {
    id: string;
    image: string;
    imageAlt: string,
    caption: string;
}

const gallery: GalleryItem[] = [
    {
        id: '1',
        image: celebration,
        imageAlt: 'logo',
        caption: 'When we have a “big win," we celebrate with cakes and donuts and sometimes with chatpate or our favorite suntala/bhogate sadeko (tangy combo of pomelo and oranges under the sun).',
    },
    {
        id: '2',
        image: yomari,
        imageAlt: 'logo',
        caption: 'Being a foodie has a perk. Some are still hungry after eating a full thali for lunch, so they opt for more. Sometimes we wonder if we came here to work or to eat….. Just Kidding!!!',
    },
    {
        id: '3',
        image: chatpatey_party,
        imageAlt: 'logo',
        caption: 'From panipuri eating competition to playing sequence, just name it and we do it!',
    },
    {
        id: '4',
        image: samosa,
        imageAlt: 'logo',
        caption: 'What do we do when get to the office and get hungry? Samosa comes to our rescue (and our stomach).',
    },
    {
        id: '5',
        image: movie,
        imageAlt: 'logo',
        caption: 'Let\'s not forget our weekly movie night. A Harry Potter fan?? How about a marathon with popcorn and momos?',
    },
    {
        id: '6',
        image: meeting,
        imageAlt: 'logo',
        caption: 'Meeting at the office? Nah! How about a dinner meeting with a view, fire, good food, and good company? Yes, count me in!',
    },
    {
        id: '7',
        image: fifa,
        imageAlt: 'logo',
        caption: 'As the great Dani Rojas once said, "Football is life!". From playing futsal in real life to futsal in PS4, we do it all.',
    },
    {
        id: '8',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'Be it blasting through the speakers or playing it ourselves in instruments, music flows through Togglecorp',
    },
];

export default gallery;
