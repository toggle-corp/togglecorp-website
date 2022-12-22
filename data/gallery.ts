import workListOne from 'resources/work-list-1.webp';

interface GalleryItem {
    id: string;
    image: string;
    imageAlt: string,
    caption: string;
}

const gallery: GalleryItem[] = [
    {
        id: '1',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'Let\'s not forget our weekly movie night. A Harry Potter fan?? How about a marathon with popcorn and momos?',
    },
    {
        id: '2',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'From panipuri eating competition to playing bingo, just name it and we do it!',
    },
    {
        id: '3',
        image: workListOne,
        imageAlt: 'logo',
        caption: 'When we have a \'big win\', we celebrate with cakes and donuts and sometimes with chatpate or our favorite suntala/bhogate sadeko (tangy combo of pomelo and oranges under the sun).',
    },
];

export default gallery;
