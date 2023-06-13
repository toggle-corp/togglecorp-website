type Department = 'development' | 'analysis' | 'operations';

export type EmployeeId = 'tc-001'
    | 'tc-013'
    | 'tc-000'
    | 'tc-050'
    | 'tc-040'
    | 'tc-063'
    | 'tc-008'
    | 'tc-036'
    | 'tc-010'
    | 'tc-023'
    | 'tc-058'
    | 'tc-017'
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
    // | 'tc-066'
    // | 'tc-067'
    | 'tc-064'
    | 'tc-007'
    | 'tc-015'
    | 'tc-059'
    | 'tc-021'
    | 'tc-062'
    | 'tc-061'
    | 'tc-055'
    | 'tc-016'
    | 'tc-047'
    | 'tc-065'
    | 'tc-052'
    | 'tc-066';

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
    position: 'Co-founder / Developer',
    funnyDescription: 'Dherai halla, thorai kaam',
    department: 'development',
    description: '"Aditya here! Come talk to me, or rather listen to be explain ideas and facts that you probably don\'t need to know. I like music, I like cooking and love food. I am constantly changing hobbies and trying out new things. I think everyone should appreciate effort more that the outcome. If we live everyday with an effort to be better than yesterday, the least we\'ll be is what we are right now, which is okay."',
    linkedInLink: 'https://www.linkedin.com/in/adityakhatri47/',
    instagramLink: 'https://www.instagram.com/adityakhatri47/',
};

const amarShahi: Employee = {
    id: 'tc-013',
    name: 'Amar Shahi',
    position: 'Operations Manager',
    description: 'My mom says she felt a small earthquake the day I was born, 26 years later it happened again on my birthday. That\s my talent, earthquake is my thing. I also like airplanes which is why my favorite quote is "Startup world is like jumping off a cliff and assembling a plane on the way down."',
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

const anushaKhadka: Employee = {
    id: 'tc-050',
    name: 'Anusha Khadka',
    position: 'Data Analyst',
    description: 'Have you ever encountered someone who is simultaneously happy and sad? If not, hello there, meet AK! AK is an extrovert with cheerful demeanor. She is fond of melancholy music because she believes that sorrow can be beautiful. She enjoys going on solo walks. We are besties if you think watching FRIENDS is the idea of perfect evening.',
    funnyDescription: 'Baisakh mahina ma ful fulyo, timlai dekhera man bhulyo',
    department: 'analysis',
    facebookLink: 'https://t.co/uyRPiop7Sq',
    instagramLink: 'https://t.co/QrIDBnubda',
    linkedInLink: 'https://t.co/SpRa8U05Ah',
};

const barshaThakuri: Employee = {
    id: 'tc-040',
    name: 'Barsha Thakuri',
    position: 'Developer',
    funnyDescription: 'I\'ll be late for standup, My scotty is not starting',
    description: 'Barsha loves adventures, traveling, hiking, visiting new places, and reading books. "Mountains are her happy place"',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/barshathakuri/',
    instagramLink: 'https://www.instagram.com/barsha.thakuri/',
};

const bibekPandey: Employee = {
    id: 'tc-008',
    name: 'Bibek Pandey',
    position: 'Developer',
    funnyDescription: '50 katechi ramaula!',
    description: '"Chitwan ma ghar chha, Hamlai ke ko darr chha, Dui din ko jindagi maa, hasi raakhnu parcha." Computer and Mathematics. Traveling and writing.',
    department: 'development',
    blogLink: 'https://bewakes.com',
    githubLink: 'https://github.com/bewakes',
    facebookLink: 'https://facebook.com/be.pandey',
    linkedInLink: 'https://www.linkedin.com/in/bibek-pandey-023879b1/',
};

const bimalPandey: Employee = {
    id: 'tc-036',
    name: 'Bimal Prasad Pandey',
    position: 'Software Developer',
    description: 'No BP be happy.',
    funnyDescription: 'Namaskar sir haru!',
    department: 'development',
    twitterLink: 'https://twitter.com/BimalPandy',
    githubLink: 'https://github.com/bimal125',
    linkedInLink: 'https://www.linkedin.com/in/bimal-pandey-7a5033110',
    facebookLink: 'https://www.facebook.com/bimal125',
    stackoverflowLink: 'https://stackoverflow.com/users/6127290/bimal-prasad-pandey',
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
    linkedInLink: 'https://www.linkedin.com/in/kopitek8',
    githubLink: 'https://github.com/kopitek8',
};

const udayMaharjan: Employee = {
    id: 'tc-057',
    name: 'Uday Maharjan',
    position: 'Assistant Project Manager',
    funnyDescription: 'What is your school\'s name? School Maharjan',
    description: 'Meet Uday, a 26-year-old man who is still trying to figure out what he wants to be when he grows up (because let\'s be real, at 26 you\'re basically a grown-up, right?). Despite his indecisiveness, Uday is a pretty cool dude. He\'s always up for a good time, whether it\'s cracking jokes with his friends or trying out a new restaurant in town. Uday is also an avid Liverpool FC fan, and can often be found cheering on his favorite team on game day.When he\'s not rooting for the home team, you might catch him going on hikes with his buddies or going on bike rides. In his spare time, Uday enjoys partying, playing video games, collecting KinderJoy toys and listening to music.He\'s also been known to dance every now and then (just don\'t ask him to dance). Overall, Uday is a fun- loving, easy-going guy who is always up for an adventure.',
    department: 'development',
    instagramLink: 'https://www.instagram.com/udaynwa',
    facebookLink: 'https://www.facebook.com/udaynwa',
    linkedInLink: 'https://www.linkedin.com/in/uday-maharjan-74076b195/',
    githubLink: 'https://github.com/udaynwa',
};

const priyeshGautam: Employee = {
    id: 'tc-039',
    name: 'Priyesh Gautam',
    position: 'Developer',
    description: 'Priyesh, preferably Priyash, big time rock music and gym enthusiast is a fun person to be around. He lives with one of his favorite quote "The top of one mountain is the bottom of the next". Loves going on for a nice walk during dusk, a dog lover, he tries to feel every little piece of nature within. Additionally, always trying his best to make this world a better place."',
    funnyDescription: 'Get yo self some juicy ass jerries',
    department: 'development',
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
    position: 'Software Engineer',
    description: 'No man ever steps in th same river twice, for it\'s not the same river and he\'s not the same man.',
    funnyDescription: 'Mazza ayena, eh!',
    department: 'development',
    githubLink: 'https://github.com/tnagorra/',
};

const kriti: Employee = {
    id: 'tc-006',
    name: 'Kriti Chhetri',
    position: 'Data Analyst / Team Manager',
    description: 'Kriti has pursued Master\'s in International Relations. She is sociable and cheerful person. She enjoys when she is close to nature and goes for mini-hiking whenever she gets chance. She likes binge watchig various genre series and love eating momo. Her guilty pleasure is having a glass of chilled beer and a large Pizza at a restaurant all by herself. Fun fact: She is the first analyst at tc.',
    funnyDescription: 'Chyaaaaaaannn! Out! Out!',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/kritichhetri',
    linkedInLink: 'https://www.linkedin.com/in/kriti-chhetri-61270214b',
};

const kanchiTamang: Employee = {
    id: 'tc-010',
    name: 'Kanchi Tamang',
    position: 'Office Assistant',
    description: 'Kripaya office sakdo safa sugar rakhdinu hola',
    funnyDescription: 'Good morning! Aaipugnu bho?',
    department: 'operations',
};

const kisanPahari: Employee = {
    id: 'tc-017',
    name: 'Nishan Pahari',
    position: 'Chef',
    description: 'Namaskar sabai jana lai. Ma aja tapailai mitho lunch khuwaune chu. Dhanyawad',
    funnyDescription: 'Ma manage garchu',
    department: 'operations',
};

const karinaGopali: Employee = {
    id: 'tc-023',
    name: 'Karina Gopali',
    position: 'Data Analyst',
    description: 'I am a person who believes in myself, enjoy food and music. I live very joyful life with a lot of laughter and good time. I believe that whatever happens in your life, you should always face it with a smile.',
    funnyDescription: 'Aja chatpatey kham na',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/karina_gopali_',
};

const NavinAyer: Employee = {
    id: 'tc-004',
    name: 'Navin Ayer',
    position: 'Developer',
    description: '¯\\_(ツ)_/¯',
    funnyDescription: 'Too late, too sad, too bad',
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

const poojaSharma: Employee = {
    id: 'tc-034',
    name: 'Pooja Sharma',
    position: 'Data Analyst',
    description: 'In a world where you can be anyone, I choose to be myself. I love spicy food, enjoy music and spending time with my loved ones.',
    funnyDescription: 'Guys, kosai sanga pantop cha?',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/kharelpuza960/',
};

const prinishaBaidya: Employee = {
    id: 'tc-028',
    name: 'Prinisha Baidya',
    position: 'Data Analyst / Team Lead',
    description: 'A fun loving girl who likes to be in a happy environment. Is an optimist, interested in music, sings and dances, keeps others happiness first, gets easily inspired. An altruist and a proud Leo member who enjoys helping others. Needs K-Pop and K-Drama doses at times.',
    funnyDescription: 'Aasey aasey',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/prinisha.baidya',
    linkedInLink: 'https://www.linkedin.com/in/prinisha-baidya-394b74187',
};

const puranBan: Employee = {
    id: 'tc-056',
    name: 'Puran Ban',
    position: 'Developer',
    description: 'As you like...',
    funnyDescription: 'Garo cha jindagi :D',
    department: 'development',
    githubLink: 'https://github.com/puranban',
    linkedInLink: 'https://www.linkedin.com/in/puran-ban-a22765149',
};

const rishiKhatri: Employee = {
    id: 'tc-018',
    name: 'Rishi Khatri',
    position: 'Developer',
    description: 'Rishi will always remember......',
    funnyDescription: 'Togglecorp Airlines ma tapailai swaagat cha.. Dhanyewaad',
    department: 'development',
    githubLink: 'https://github.com/k9845',
    linkedInLink: 'https://www.linkedin.com/in/rishi-khatri-73635519a/',
};

const shreetiKafle: Employee = {
    id: 'tc-015',
    name: 'Shreeti Kafle',
    position: 'Data Analyst / Team Lead',
    description: 'I used to think I was indecisive. But now I\'m not so sure.',
    funnyDescription: 'Pitai khancha ahile!',
    department: 'analysis',
    linkedInLink: 'https://www.linkedin.com/in/shreeti-kafle-35bb97187',
    instagramLink: 'https://www.instagram.com/shreeti.kafle',
};

/* const snehaPandey: Employee = {
    id: 'tc-052',
    name: 'Sneha Pandey',
    position: 'Data Analyst / Team Lead',
    description: 'Making a spontaneous plan and having trouble deciding who to invite? Make sure there\'s enough room for Sneha!! Sneha loves traveling, hiking, and trekking as much as any other nature admirer. Her fondness for horses and dogs is unrivaled. She\'s fun to be around, easy to get along with, and a true gourmet! You will always find her experimenting with different cuisines. She is a firm believer that it\'s never too late to learn new things.',
    funnyDescription: 'Testo nabhana na...',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/snehappy_',
    facebookLink: 'https://www.facebook.com/sneha.pandey.9465',
    linkedInLink: 'https://www.linkedin.com/in/sneha-pandey-00324419b',
};
*/

/* const shreeyaShrestha: Employee = {
    id: 'tc-066',
    name: 'Shreeya Shrestha',
    position: 'Data Analyst',
    description: 'A devoted dog-person who loves cat memes.
    An avid nature lover who\'s always up for trekking but need meds for altitude sickness.
    Has a keen interest in cooking but sometimes burns everything.
    An enthusiastic series watcher
     but falls asleep two episodes in or binges the whole series at once.
    Always runs outside when the sky is a pretty color but also loves the gloomy monsoon weather.
    Hi I\'m Shreeya, 25, a proud second mom to a saint Saint Bernard.',
    funnyDescription: 'Aja mero doctor ko apainmen cha',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/shya.sthaa',
    linkedInLink: 'https://www.linkedin.com/in/shreeya-shrestha-6b333b181',
};
*/

const bimalSaud: Employee = {
    id: 'tc-063',
    name: 'Bimal Saud',
    position: 'Operations/Admin Officer',
    description: 'I\'m passionate about my work and I know how to get the job done.',
    funnyDescription: 'Yo ja bata ako utai farkaideu',
    department: 'operations',
    linkedInLink: 'https://www.linkedin.com/mwlite/in/bimal-saud-37635a207',
};

const sadikshyaHamal: Employee = {
    id: 'tc-064',
    name: 'Sadikshya Hamal',
    position: 'Assistant Manager - Human Resources',
    description: 'Hi there, I am Sadikshya. I\'m a Human Resources Personnel by day, but by night I transform into a craziest and all- around fun-loving person with my family or close friends. In my free time, you can find me going on a hike, travelling and learning new things. I\'m always up for a good time and love creating beautiful memories to cherish for a lifetime. Overall, I\'m just a regular person trying to walk through this crazy thing we call life. :)',
    funnyDescription: 'Ma direct anda chai khadina',
    department: 'operations',
    linkedInLink: 'https://www.linkedin.com/in/sadikshya-hamal',
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

const shristiManandhar: Employee = {
    id: 'tc-021',
    name: 'Shristi Manandhar',
    position: 'Data Analyst',
    description: 'I love watching Anime and Korean dramas. Also; Happily introverted :P. People say that I am hard worker and a team player :)',
    funnyDescription: 'Ma ghar janalaho k',
    department: 'analysis',
    instagramLink: 'https://www.instagram.com/shristee/',
};

const shreeyashShrestha: Employee = {
    id: 'tc-059',
    name: 'Shreeyash Laya La Shrestha',
    position: 'Developer',
    description: 'Crafting code and building beautiful solutions with a passion for continuous learning and growth. Always striving to create and inspire change through technology.',
    funnyDescription: 'Maaraamaar, kaataakaat. Ghatiyaa haru!',
    department: 'development',
    instagramLink: 'https://www.instagram.com/shreeyash__',
    facebookLink: 'https://www.facebook.com/shreeyash07',
    linkedInLink: 'https://www.linkedin.com/in/shreeyash-shrestha',
};

const rupRanjanshi: Employee = {
    id: 'tc-055',
    name: 'Rup Narayan Rajbanshi',
    position: 'Python Developer',
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

const sameerRai: Employee = {
    id: 'tc-007',
    name: 'Sameer Rai',
    position: 'Developer',
    description: 'Hello World! I\'m Sameer. I am fascinated with all things technology, science and art.',
    funnyDescription: 'Rai ko chora lai Ale banaidyo yaar',
    department: 'development',
    githubLink: 'https://github.com/samshara',
};

/*
const sagunaThapa: Employee = {
    id: 'tc-067',
    name: 'Saguna Thapa',
    position: 'Data Analyst',
    description: 'I enjoy reading, spending time with family and friends,
     watching a television show and listening to music. I am self-disciplined,
     introverted and always ready to work hard.',
    funnyDescription: 'Saiiyaan',
    department: 'analysis',
    facebookLink: 'https://www.facebook.com/saguna.thapa.794',
    linkedInLink: 'https://www.linkedin.com/in/saguna-thapa-8a5929223',
};
*/

const sushmaAdhikari: Employee = {
    id: 'tc-047',
    name: 'Sushma Adhikari',
    position: 'Data Analyst',
    description: 'I am a music lover. Music makes me smile, laughter which all I want in my life. I believe whatever makes your soul happy do that.',
    funnyDescription: 'Aja Tuesday ho!',
    department: 'analysis',
    linkedInLink: 'https://www.linkedin.com/in/sushma-adhikari-00b5431a1',
    facebookLink: 'https://www.facebook.com/sushma.adhikari.1023',
    instagramLink: 'https://instagram.com/_sushmaa_',
};

const praneshShrestha: Employee = {
    id: 'tc-065',
    name: 'Pranesh Shrestha',
    position: 'UI/UX Designer',
    description: 'Hello, I am Pranesh and I have an attention span of a 2-year-old.',
    funnyDescription: 'Fixai ho.. Bhyai halcha ni.',
    department: 'development',
    facebookLink: 'https://www.facebook.com/pranesh.shrestha.501/',
    instagramLink: 'https://www.instagram.com/pranesh_chaa',
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

const employees: Employee[] = [
    ankitMehta,
    adityaKhatri,
    amarShahi,
    NavinAyer,
    safarLigal,
    udayMaharjan,
    keyurKhadka,
    subinaRajopadhyay,
    smritiKafle,
    barshaThakuri,
    kriti,
    shreetiKafle,
    prinishaBaidya,
    // snehaPandey,
    rubyThapaliya,
    anushaKhadka,
    bibekPandey,
    sameerRai,
    bimalPandey,
    priyeshGautam,
    kanchiTamang,
    kisanPahari,
    // shreeyaShrestha,
    karinaGopali,
    nikaShakya,
    poojaSharma,
    puranBan,
    rishiKhatri,
    shreeyashShrestha,
    shubhDhital,
    bimalSaud,
    sadikshyaHamal,
    sushmaAdhikari,
    shristiManandhar,
    rupRanjanshi,
    ranjanShrestha,
    // sagunaThapa,
    praneshShrestha,
    pratikshyaBhattarai,
];

export default employees;
