type Department = 'development' | 'analysis' | 'operations';

export type EmployeeId = 'tc-001'
    | 'tc-013'
    | 'tc-000'
    | 'tc-063'
    | 'tc-010'
    | 'tc-023'
    | 'tc-058'
    | 'tc-006'
    | 'tc-004'
    | 'tc-030'
    | 'tc-034'
    | 'tc-028'
    | 'tc-039'
    | 'tc-057'
    | 'tc-042'
    | 'tc-018'
    | 'tc-056'
    | 'tc-027'
    | 'tc-005'
    | 'tc-064'
    | 'tc-059'
    | 'tc-062'
    | 'tc-061'
    | 'tc-055'
    | 'tc-016'
    | 'tc-066'
    | 'tc-068'
    | 'tc-069'
    | 'tc-070'
    | 'tc-072'
    | 'tc-073'
    | 'tc-076'
    | 'tc-077'
    | 'tc-079'
    | 'tc-080'
    | 'tc-082'
    | 'tc-084';

export interface Employee {
    id: EmployeeId;
    name: string;
    funnyDescription?: string;
    description?: string;
    position: string;
    department: Department;

    // TODO: add more links
    linkedInLink?: string;
    instagramLink?: string;
    githubLink?: string;
    facebookLink?: string,
    blogLink?: string,
    twitterLink?: string,
    stackoverflowLink?: string,
}

const adityaKhatri: Employee = {
    id: 'tc-001',
    name: 'Aditya Khatri',
    position: 'Chief Technology Officer / Co-founder',
    funnyDescription: 'That\'s soo stewpid!',
    department: 'development',
    description: '"Aditya here! Come talk to me, or rather listen to me explain ideas and facts that you probably don\'t need to know. I like music, I like cooking and love food. I am constantly changing hobbies and trying out new things. I think everyone should appreciate effort more that the outcome. If we live everyday with an effort to be better than yesterday, the least we\'ll be is what we are right now, which is okay."',
    linkedInLink: 'https://www.linkedin.com/in/adityakhatri47/',
    instagramLink: 'https://www.instagram.com/adityakhatri47/',
};

const amarShahi: Employee = {
    id: 'tc-013',
    name: 'Amar Shahi',
    position: 'Operations Manager',
    description: 'My mom says she felt a small earthquake the day I was born, 26 years later it happened again on my birthday. That\'s my talent, earthquake is my thing. I also like airplanes which is why my favorite quote is "Startup world is like jumping off a cliff and assembling a plane on the way down."',
    funnyDescription: 'Thikai..',
    department: 'operations',
    twitterLink: 'https://twitter.com/amar_03',
    linkedInLink: 'https://www.linkedin.com/in/amar-shahi-03a23572/',
};

const ankitMehta: Employee = {
    id: 'tc-000',
    name: 'Ankit Mehta',
    position: 'Chief Executive Officer',
    funnyDescription: 'I\'m the CEO, plich',
    description: 'Let\'s keep this as a placeholder for now',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/frozenhelium/',
    githubLink: 'https://github.com/frozenhelium/',
};

const keyurKhadka: Employee = {
    id: 'tc-058',
    name: 'Keyur Khadka',
    position: 'Assistant Project Manager',
    funnyDescription: 'Stay hard! (P.S: Context is important!)',
    description: 'I am fun, I am casual, I am humorous, I am... K?',
    department: 'development',
    instagramLink: 'https://www.instagram.com/keyurkhadka',
    twitterLink: 'https://twitter.com/kopitek8',
    facebookLink: 'https://facebook.com/kopitek8',
    linkedInLink: 'https://www.linkedin.com/in/kopitek8',
    githubLink: 'https://github.com/kopitek8',
};

const udayMaharjan: Employee = {
    id: 'tc-057',
    name: 'Uday Maharjan',
    position: 'Assistant Project Manager',
    funnyDescription: 'What is your school\'s name? School Maharjan',
    description: 'Meet Uday, a 28-year-old man who is still trying to figure out what he wants to be when he grows up (because let\'s be real, at 28 you\'re basically a grown-up, right?). Despite his indecisiveness, Uday is a pretty cool dude. He\'s always up for a good time, whether it\'s cracking jokes with his friends or trying out a new restaurant in town. Uday is also an avid Liverpool FC fan, and can often be found cheering on his favorite team on game day.When he\'s not rooting for the home team, you might catch him going on hikes with his buddies or going on bike rides. In his spare time, Uday enjoys partying, playing video games, collecting KinderJoy toys and listening to music.He\'s also been known to dance every now and then (just don\'t ask him to dance). Overall, Uday is a fun- loving, easy-going guy who is always up for an adventure.',
    department: 'development',
    instagramLink: 'https://www.instagram.com/udaynwa',
    facebookLink: 'https://www.facebook.com/udaynwa',
    linkedInLink: 'https://www.linkedin.com/in/uday-maharjan-74076b195/',
    githubLink: 'https://github.com/udaynwa',
};

const subinaRajopadhyay: Employee = {
    id: 'tc-016',
    name: 'Subina Sharma',
    position: 'Designer | Developer',
    description: 'Front-end developer, Designer, Illustrator and aspiring Calligrapher by passion, Aspiring Data Scientist, Dog-lover, Potterhead, & a Massive Liverpool supporter #YNWA',
    funnyDescription: 'Subina ta Su bina Bina hudo raichha',
    department: 'development',
    githubLink: 'https://github.com/subinasr',
    twitterLink: 'https://twitter.com/SharmaSubina',
    linkedInLink: 'https://www.linkedin.com/in/subina-sharma-5106a0130/',
    instagramLink: 'https://www.instagram.com/subinabecker1/',
};

const smritiKafle: Employee = {
    id: 'tc-061',
    name: 'Smriti Kafle',
    position: 'UI/UX Designer',
    description: 'Oh, crop!',
    funnyDescription: 'Kadak! Clk! Clk!',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/smriti-kafle-109a7a178',
};

const shubhDhital: Employee = {
    id: 'tc-062',
    name: 'Shubh Dhital',
    position: 'QA Engineer',
    description: 'I go up to the mountains or I go find flaws in your work. Also, sometimes all you need to do is change that altitude.',
    funnyDescription: 'Yo description padhirako FIIIIIXXXX ho!',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/shubhdhital',
    githubLink: 'https://github.com/Shhhhhubh',
};

const safarLigal: Employee = {
    id: 'tc-005',
    name: 'Safar Sanu Ligal',
    position: 'Developer',
    description: 'No man ever steps in th same river twice, for it\'s not the same river and he\'s not the same man.',
    funnyDescription: 'Mazza ayena, eh!',
    department: 'development',
    githubLink: 'https://github.com/tnagorra/',
};

const navinAyer: Employee = {
    id: 'tc-004',
    name: 'Navin Ayer',
    position: 'Backend Developer',
    description: '¯\\_(ツ)_/¯',
    funnyDescription: 'Hajuuuuuuuuuuuuuuuur',
    department: 'development',
    githubLink: 'https://github.com/thenav56',
    linkedInLink: 'https://www.linkedin.com/in/navin-ayer-6453b8b4',
};

const nikaShakya: Employee = {
    id: 'tc-030',
    name: 'Nika Shakya',
    position: 'Data Analyst',
    description: 'Hi, I am Nika Shakya. I received my bachelors degree in public health and currently i am working as junior data analyst. Talking about my personal interests i enjoy doing art stuffs, listening to music and love spending time in nature. Adding to that i love watching series in my free time.',
    funnyDescription: 'Khureey! Arasso!',
    department: 'analysis',
    linkedInLink: 'https://www.linkedin.com/in/nika-shakya-00b825200/',
};

const prinishaBaidya: Employee = {
    id: 'tc-028',
    name: 'Prinisha Baidya',
    position: 'Data Analyst/Team Lead/Communications and Digital Content Manager',
    description: 'A fun loving girl who likes to be in a happy environment. Is an optimist, interested in music, sings and dances, keeps others happiness first, gets easily inspired. An altruist and a proud Leo member who enjoys helping others. Needs K-Pop and K-Drama doses at times.',
    funnyDescription: 'Aasey aasey',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/prinisha.baidya',
    linkedInLink: 'https://www.linkedin.com/in/prinisha-baidya-394b74187',
};

const bimalSaud: Employee = {
    id: 'tc-063',
    name: 'Bimal Saud',
    position: 'Accounts and Operations Officer',
    description: 'I\'m passionate about my work and I know how to get the job done.',
    funnyDescription: 'Yo ja bata ako utai farkaideu',
    department: 'operations',
    linkedInLink: 'https://www.linkedin.com/mwlite/in/bimal-saud-37635a207',
};

const sadikshyaHamal: Employee = {
    id: 'tc-064',
    name: 'Sadikshya Hamal',
    position: 'HR Manager',
    description: 'Hi there, I am Sadikshya. I\'m a Human Resources Personnel by day, but by night I transform into a craziest and all- around fun-loving person with my family or close friends. In my free time, you can find me going on a hike, travelling and learning new things. I\'m always up for a good time and love creating beautiful memories to cherish for a lifetime. Overall, I\'m just a regular person trying to walk through this crazy thing we call life. :)',
    funnyDescription: 'Ma direct anda chai khadina',
    department: 'operations',
    linkedInLink: 'https://www.linkedin.com/in/sadikshya-hamal',
};

const kanchiTamang: Employee = {
    id: 'tc-010',
    name: 'Kanchi Tamang',
    position: 'Office Assistant',
    description: 'Kripaya office sakdo safa sugar rakhdinu hola',
    funnyDescription: 'Good morning! Aaipugnu bho?',
    department: 'operations',
};

const champaDeviChaudhary: Employee = {
    id: 'tc-068',
    name: 'Champha Devi Chaudhary',
    position: 'Office Assistant',
    description: 'Ma khusi chu',
    funnyDescription: 'Vaihalcha',
    department: 'operations',
};

const rubyThapaliya: Employee = {
    id: 'tc-027',
    name: 'Ruby Thapaliya',
    position: 'Data Analyst / Team Lead',
    description: 'Myself Ruby from Western Nepal. I\'ve always been outspoken, energetic and inquisitive to new things. I believe making someone laugh everyday makes my life worth living. I often give advice to people and have been keen to learn from their mistakes. As long as there\'s life, there\'s hope so everyone should keep striving to their desired purpose.',
    funnyDescription: 'Affff cooourse!',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/ruby_thapaliya/',
    facebookLink: 'https://www.facebook.com/profile.php?id=100007191255458',
};

const shreeyashShrestha: Employee = {
    id: 'tc-059',
    name: 'Shreeyash Laya La Shrestha',
    position: 'Developer',
    description: 'Crafting code and building beautiful solutions with a passion for continuous learning and growth. Always striving to create and inspire change through technology.',
    funnyDescription: 'Haule haule saajna; dheere dheere baalma. O ho ho hmm hmm hmm...',
    department: 'development',
    instagramLink: 'https://www.instagram.com/shreeyash__',
    facebookLink: 'https://www.facebook.com/shreeyash07',
    linkedInLink: 'https://www.linkedin.com/in/shreeyash-shrestha',
};

const rupRanjanshi: Employee = {
    id: 'tc-055',
    name: 'Rup Narayan Rajbanshi',
    position: 'Backend Developer',
    description: 'I am what I am. I am in my own world',
    funnyDescription: 'Oh sathi!',
    department: 'development',
    githubLink: 'https://github.com/Rup-Narayan-Rajbanshi',
    facebookLink: 'https://www.facebook.com/rupnarayan.rajbanshi',
    instagramLink: 'https://www.instagram.com/rup_narayan_123',
};

const ranjanShrestha: Employee = {
    id: 'tc-042',
    name: 'Ranjan Shrestha',
    position: 'ML Engineer',
    description: 'My interests change over time. It used to be Traveling and Photography but now it is driving. Wish for better road infrastructure so that I can drive over 100 kph.',
    funnyDescription: 'Soooooo yesterday i worked on the',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/ranjan-shrestha-25779164/',
};

const pratikshyaBhattarai: Employee = {
    id: 'tc-066',
    name: 'Pratikshya Bhattarai',
    position: 'Data Analyst',
    description: 'Social Vegan Era, avoiding meet.',
    funnyDescription: 'Malai lame jokes haru ekdam man parcha',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/___pratikshya/',
};

const babinKarmacharya: Employee = {
    id: 'tc-070',
    name: 'Babin Kumar Karmacharya',
    position: 'QA Engineer',
    description: 'Breaking things professionally with a smile – I\'m the QA Engineer who turns software glitches into comedy gold. Finding bugs is my superpower, fixing them is just a bonus',
    funnyDescription: 'Malai Shreya le last bully hancha!',
    department: 'development',
    instagramLink: 'https://instagram.com/babin_karmacharya',
    linkedInLink: 'https://www.linkedin.com/in/babin-kumar-karmacharya-b1789b220/',
};

const sushilTiwari: Employee = {
    id: 'tc-072',
    name: 'Sushil Tiwari',
    position: 'Backend Developer',
    description: 'Waasssssssssup Bro?',
    funnyDescription: 'Mero aaja futsal aauna namilney bho',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/susilnem/',
    githubLink: 'https://github.com/susilnem',
};

const sudipKhanal: Employee = {
    id: 'tc-076',
    name: 'Sudip Khanal',
    position: 'Backend Developer',
    description: 'Om Namah Shivaya....🙏🏻',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/sudip-khanal-59b815270',
    githubLink: 'https://github.com/sudip-khanal',
    instagramLink: 'https://www.instagram.com/sudip057/profilecard/?igsh=MXMxNXljc2w3NXg0Yw==',
};

const sandeshThapa: Employee = {
    id: 'tc-077',
    name: 'Sandesh Thapa',
    position: 'ML Engineer',
    description: 'I am veg on Tuesday and Thursday. Sorry for the inconvenience.',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/sandesh-thapa-18375b215/',
};

const ashmitaPaudel: Employee = {
    id: 'tc-079',
    name: 'Ashmita Paudel',
    position: 'Project Manager',
    description: 'Hi, I\'m Ashmita, an explorer of ideas, places and good food. Behind my serious looking face, I\'m always up for a good laugh, a stimulating brainstorming session, or a good travel story. If you find me staring into the nothingness, I\'m either pondering the meaning of existence, or planning my next vacation.',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/ashmitapaudel/',
};

const cyrusShrestha: Employee = {
    id: 'tc-080',
    name: 'Cyrus Shrestha',
    position: 'Frontend Developer',
    description: 'Learning new things, making small wins, and enjoying the journey.',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/crsstha/',
    githubLink: 'https://github.com/crsstha',
};

const safalShrestha: Employee = {
    id: 'tc-082',
    name: 'Safal Shrestha',
    position: 'UI/UX Designer',
    description: 'Designing clean and user-friendly experiences by day, gaming by night and occasionally judging the UI of both.',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/safalxtha/',
    facebookLink: 'https://www.facebook.com/safalshrestha619',
    instagramLink: 'https://www.instagram.com/safal_xtha/',

};

const amritBhusal: Employee = {
    id: 'tc-084',
    name: 'Amrit Bhusal',
    position: 'Frontend Developer',
    funnyDescription: 'Chiya khane ho?',
    description: 'Powered by chiya, curiosity, and clean code. Believes that every challenge has a solution.',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/amrit-bhusal1/',
    githubLink: 'https://github.com/AmritBhusal',
    instagramLink: 'https://www.instagram.com/bhusalamrit14',
};


const employees: Employee[] = [
    ankitMehta,
    adityaKhatri,
    amarShahi,
    navinAyer,
    safarLigal,
    udayMaharjan,
    keyurKhadka,
    subinaRajopadhyay,
    smritiKafle,
    prinishaBaidya,
    rubyThapaliya,
    nikaShakya,
    shreeyashShrestha,
    shubhDhital,
    bimalSaud,
    sadikshyaHamal,
    kanchiTamang,
    champaDeviChaudhary,
    rupRanjanshi,
    ranjanShrestha,
    pratikshyaBhattarai,
    babinKarmacharya,
    sushilTiwari,
    sudipKhanal,
    sandeshThapa,
    ashmitaPaudel,
    cyrusShrestha,
    safalShrestha,
    amritBhusal,
];

export default employees;
