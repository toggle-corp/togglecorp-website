import { StaticImageData } from 'next/image';

import partnership from 'resources/aboutUs/values/partnership.jpeg';
import extraMile from 'resources/aboutUs/values/5-extra-mile.webp';
import embrace from 'resources/aboutUs/values/3-embrace-and-drive-change.jpeg';
import freedom from 'resources/aboutUs/values/7-freedom-to-express.webp';
import fun from 'resources/aboutUs/values/8-fun-and-humor.webp';
import listen from 'resources/aboutUs/values/6-listen.webp';
import back from 'resources/aboutUs/values/2-got-your-back.webp';
import humble from 'resources/aboutUs/values/4-humble.webp';
import team from 'resources/aboutUs/values/9-take-care-of-each-other.webp';
import serve from 'resources/aboutUs/values/serve-community.jpeg';
import kind from 'resources/aboutUs/values/10-kind.webp';

// FIXME: move this to about-us

interface Culture {
    key: string;
    title: string;
    description: string;
    image: string | StaticImageData;
}

const cultures: Culture[] = [
    {
        key: 'kind',
        title: 'Be kind to each other',
        description: 'Being kind is what we are good at. We don’t look down at others, we value every single opinion and we give equal importance to everyone. This is what sets us apart. We are kind and we will always be kind.',
        image: kind,
    },
    {
        key: 'mile',
        title: 'Go that extra mile',
        description: 'At Togglecorp, we don’t stop at good enough. We are not an average company, if our clients asks us to deliver X, we deliver X+1. We put extra effort to take it one step further be it coloring key figures in the reports or developing an extra feature. Going the extra mile is key to improving as an individual and as an organization.',
        image: extraMile,
    },
    {
        key: 'embrace',
        title: 'Embrace and drive change',
        description: 'Change is the only constant. Changes are bound to happen and therefore we will keep an open mind towards new ideas and processes. We don’t want to become complacent just because that’s the way things have always been done. We challenge it, we drive the change!',
        image: embrace,
    },
    {
        key: 'freedom',
        title: 'Freedom to express',
        description: 'We encourage people to make mistakes, to learn from it and to outgrow it. We want people to come up with sentences such as “Hey I saw this thing on Instagram and it looks like fun, let’s do it”. We want people to talk about the problems they are facing and to give solutions to overcome them. If you find a process that is not working or can be improved, we want you to start talking about it so that we can grow as a team.',
        image: freedom,
    },
    {
        key: 'fun',
        title: 'Fun and humor',
        description: 'We look for both fun and humor in our daily work. We are not looking for crazy or extreme freak, we just want a touch of weirdness to make life more interesting and fun for everyone. We function the best when we crack insider jokes. If you are witty, you are one of us.',
        image: fun,
    },
    {
        key: 'listen',
        title: 'We listen',
        description: 'We go the extra mile to listen to feedback from our team and our clients. We want you to think about us as your “venting” machine. Going through a break up? You dog is sick? Have a suggestion on the next office retreat? We are all ears.',
        image: listen,
    },
    {
        key: 'team',
        title: 'A team and a family',
        description: 'We want to create an environment that is friendly, warm and something that reminds you of home. We believe that in general, the best ideas and decisions can come from the bottom up. We believe that the best teams are those that not only work with each other, but also interact with each other outside of the office. Many of the company’s best ideas come while sipping a cup of tea at a coffee shop.',
        image: team,
    },
    {
        key: 'serve',
        title: 'Serve community',
        description: 'At Togglecorp, one of the core values that binds us together is the sense of serving the community either through direct contributions or through the work we do. We take pride in our partnerships with our clients and help them build solutions that will benefit the society as a whole. We want to do more and give back to the society in the years to come.',
        image: serve,
    },
    {
        key: 'humble',
        title: 'Be humble',
        description: 'We believe that no matter what happens, we should always be respectful of everyone. We are not arrogant and we do not treat others differently from how we would want to be treated.',
        image: humble,
    },
    {
        key: 'back',
        title: 'We have got your back',
        description: 'We are willing to defend and look out for someone in case they need assistance. At Togglecorp, we are not just colleagues, we share a bond and we genuinely care for our people. Don’t worry if you sent the wrong file to the client, or if you made a blunder at work, we will fix it together. We will always be there for you.',
        image: back,
    },
    {
        key: 'partnership',
        title: 'Value partnerships',
        description: 'We know our clients and our vendors all want to solve a problem and be successful at what they do. When we take on a work, we are in a journey with them. Similarly, when someone joins Togglecorp, we value what they bring to the table and want them to learn and succeed during their time with us.',
        image: partnership,
    },
];

export default cultures;
