type Department = 'development' | 'analysis' | 'operations';
export type EmployeeId = 'aditya-khatri'
| 'amar-shahi'
| 'ankit-mehta'
| 'anusha-khadka'
| 'barsha-thakuri'
| 'bibek-pandey'
| 'bimal-pandey'
| 'kanchi-tamang'
| 'karina-gopali'
| 'keyur-khadka'
| 'kisan-pahari'
| 'kriti-chhetri'
| 'navin-ayer'
| 'nika-shakya'
| 'pooja-sharma'
| 'prinisha-baidhya'
| 'priyesh-gautam'
| 'puran-ban'
| 'ranjan-shrestha'
| 'rishi-khatri'
| 'ruby-thapaliya'
| 'safar-ligal'
| 'saguna-thapa'
| 'sameer-rai'
| 'shreeti-kafle'
| 'shreeya-shrestha'
| 'shreeyash-shrestha'
| 'shristi-manandhar'
| 'shubh-dhital'
| 'smriti-kafle'
| 'sneha-pandey'
| 'subina-rajopadhyaya'
| 'uday-maharjan';

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
}

const adityaKhatri: Employee = {
    id: 'aditya-khatri',
    name: 'Aditya Khatri',
    position: 'Co-founder / Developer',
    funnyDescription: 'Dherai halla, thorai kaam',
    department: 'development',
    description: '"Aditya here! Come talk to me, or rather listen to be explain ideas and facts that you probably don\'t need to know. I like music, I like cooking and love food. I am constantly changing hobbies and trying out new things. I think everyone should appreciate effort more that the outcome. If we live everyday with an effort to be better than yesterday, the least we\'ll be is what we are right now, which is okay."',
    linkedInLink: 'https://www.linkedin.com/in/adityakhatri47/',
    instagramLink: 'https://www.instagram.com/adityakhatri47/',
};

const amarShahi: Employee = {
    id: 'amar-shahi',
    name: 'Amar Shahi',
    position: 'Operations Manager',
    description: 'My mom says she felt a small earthquake the day I was born, 26 years later it happened again on my birthday. That\s my talent, earthquake is my thing. I also like airplanes which is why my favorite quote is "Startup world is like jumping off a cliff and assembling a plane on the way down."',
    funnyDescription: 'Experienced Project Manager with a demonstrated history of working in the information technology and services industry with a Master of Business Administration (M.B.A.) focused in Project Management from Apex College.',
    department: 'operations',
};

const ankitMehta: Employee = {
    id: 'ankit-mehta',
    name: 'Ankit Mehta',
    position: 'CEO / Co-founder',
    funnyDescription: 'I\'m the CEO, plich',
    description: 'Let\'s keep this as a placeholder for now',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/frozenhelium/',
};

const anushaKhadka: Employee = {
    id: 'anusha-khadka',
    name: 'Anusha Khadka',
    position: 'Analyst',
    description: 'Have you ever encountered someone who is simultaneously happy and sad? If not, hello there, meet AK! AK is an extrovert with cheerful demeanor. She is fond of melancholy music because she believes that sorrow can be beautiful. She enjoys going on solo walks. We are besties if you think watching FRIENDS is the idea of perfect evening.',
    funnyDescription: 'Baisakh mahina ma ful fulyo, timlai dekhera man bhulyo',
    department: 'analysis',
};

const barshaThakuri: Employee = {
    id: 'barsha-thakuri',
    name: 'Barsha Thakuri',
    position: 'Developer',
    funnyDescription: 'I\'ll be late for standup, My scotty is not starting',
    description: 'Barsha loves adventures, traveling, hiking, visiting new places, and reading books. "Mountains are her happy place"',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/barshathakuri/',
    instagramLink: 'https://www.instagram.com/barsha.thakuri/',
};

const bibekPandey: Employee = {
    id: 'bibek-pandey',
    name: 'Bibek Pandy',
    position: 'Developer',
    funnyDescription: '50 katechi ramaula!',
    description: '"Chitwan ma ghar chha, Hamlai ke ko darr chha, Dui din ko jindagi maa, hasi raakhnu parcha." Computer and Mathematics. Traveling and writing.',
    department: 'development',
};

const bimalPandey: Employee = {
    id: 'bimal-pandey',
    name: 'Bimal Pandey',
    position: 'Developer',
    description: 'No BP be happy.',
    funnyDescription: 'Namaskar sir haru!',
    department: 'development',
};

const keyurKhadka: Employee = {
    id: 'keyur-khadka',
    name: 'Keyur Khadka',
    position: 'Developer',
    funnyDescription: 'Stay hard! (PS: Context is important!)',
    description: 'I am fun, I am casual, I am humorous, I am... K?',
    department: 'development',
};

const priyeshGautam: Employee = {
    id: 'priyesh-gautam',
    name: 'Priyesh Gautam',
    position: 'Developer',
    description: 'Priyesh preferably Priyash, big time rock music and gym enthusiast is a fun person to be around. He lives with one of his favorite quote "The top of one mountain is the bottom of the next". Loves going on for a nice walk during dusk, a dog lover, he tries to feel every little piece of nature within. Additionally, always trying his best to make this world a better place."',
    funnyDescription: 'Get yo self some juicy ass jerris!',
    department: 'development',
};

const subinaRajopadhyay: Employee = {
    id: 'subina-rajopadhyaya',
    name: 'Subina Sharma Rajopadhyaya',
    position: 'Developer',
    description: 'Front-end developer, Designer, Illustrator and aspiring Calligrapher by passion, Aspiring Data Scientist, Dog-lover, Potterhead Massive Liverpool supporter #YNWA',
    funnyDescription: 'Subina ta Su bina Bina hudo raichha',
    department: 'development',
};

const smritiKafle: Employee = {
    id: 'smriti-kafle',
    name: 'Smriti Kafle',
    position: 'Designer',
    description: 'Oh, crop!',
    funnyDescription: 'Kadak! Clk! Clk!',
    department: 'development',
};

const shubhDhital: Employee = {
    id: 'shubh-dhital',
    name: 'Shubh Dhital',
    position: 'QA Engineer',
    description: 'I go up to the mountains or I go find flaws in your work. Also, sometimes all you need to do is change that altitude.',
    funnyDescription: 'Yo Description padhirako Fiiiiixxxx ho!',
    department: 'development',
};

const safarLigal: Employee = {
    id: 'safar-ligal',
    name: 'Safar Sanu Ligal',
    position: 'Developer',
    description: 'No man ever steps in th same river twice, for it\'s not the same river and he\'s not the same man.',
    funnyDescription: 'Mazza ayena, eh!',
    department: 'development',
};

const kriti: Employee = {
    id: 'kriti-chhetri',
    name: 'Kriti Chhetri',
    position: 'Analyst',
    description: 'Kriti has pursued Master\'s in Intenational Relations. She is sociable and cheerful person. She enjoys when she is close to nature and goes for mini-hiking whenever she gets chance. She likes binge watchig various genre series and love eating momo. Her guilty pleasure is having a glass of chilled beer and a large Pizza at a restaurant all by herself. Fun fact: She is the first analyst at TC.',
    funnyDescription: 'Chyaaaaaaannn! Out! Out!',
    department: 'analysis',
};

const kanchiTamang: Employee = {
    id: 'kanchi-tamang',
    name: 'kanchi Tamang',
    position: 'Chef',
    description: '',
    funnyDescription: '',
    department: 'operations',
};

const kisanPahari: Employee = {
    id: 'kisan-pahari',
    name: 'Kisan Pahari',
    position: 'Chef',
    description: '',
    funnyDescription: '',
    department: 'operations',
};

const karinaGopali: Employee = {
    id: 'karina-gopali',
    name: 'Karina Gopali',
    position: 'Analyst',
    description: 'I am a person who believes in myself, enjoy food and music. I live very joyful life with a lot of laughter and good time. I believe that whatever happens in your life, you should always face it with a smile.',
    funnyDescription: '',
    department: 'analysis',
};

const NavinAyer: Employee = {
    id: 'navin-ayer',
    name: 'Navin Ayer',
    position: 'Developer',
    description: '',
    funnyDescription: '',
    department: 'development',
};

const NikaShakya: Employee = {
    id: 'nika-shakya',
    name: 'Nika Shakya',
    position: 'Analyst',
    description: 'Hi i am Nika Shakya. I received my bachelors degree in public health and currently i am working as junior data analyst. Talking about my personal interests i enjoy doing art stuffs, listening to music and love spending time in nature. Adding to that i love watching series in my free time.',
    funnyDescription: '',
    department: 'analysis',
};

const PoojaSharma: Employee = {
    id: 'pooja-sharma',
    name: 'Pooja Sharma',
    position: 'Analyst',
    description: 'In a world where you can be anyone, I choose to be myself. I love spicy food, enjoy music and spending time with my loved ones.',
    funnyDescription: '',
    department: 'analysis',
};

const PrinishaBaidhya: Employee = {
    id: 'prinisha-baidhya',
    name: 'Prinisha Baidhya',
    position: 'Analyst',
    description: 'A fun loving girl who likes to be in a happy environment. Is an optimist, interested in music, sings and dances, keeps others happiness first, gets easily inspired. An altruist and a proud Leo who enjoys helping others. Needs K-Pop and K-Drama doses at times.',
    funnyDescription: '',
    department: 'analysis',
};
const PuranBan: Employee = {
    id: 'puran-ban',
    name: 'Puran Ban',
    position: 'Developer',
    description: 'As you like...',
    funnyDescription: 'Garo cha jindagi :D',
    department: 'development',
};

// const puran-ban': Employee = {
//     id: 'pooja-sharma',
//     name: 'Pooja Sharma',
//     position: 'Analyst',
//     description: '',
//     funnyDescription: '',
//     department: '',
// }
const employees: Employee[] = [
    adityaKhatri,
    amarShahi,
    ankitMehta,
    anushaKhadka,
    barshaThakuri,
    bibekPandey,
    bimalPandey,
    keyurKhadka,
    priyeshGautam,
    kanchiTamang,
    kisanPahari,
    karinaGopali,
    NavinAyer,
    NikaShakya,
    PoojaSharma,
    PrinishaBaidhya,
    PuranBan,
    safarLigal,
    smritiKafle,
    subinaRajopadhyay,
    shubhDhital,
    kriti,
];

export default employees;
