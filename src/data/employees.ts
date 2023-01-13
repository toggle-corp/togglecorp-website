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
    funnyDescription: 'Namaskar sir haru!',
    department: 'development',
};

const keyurKhadka: Employee = {
    id: 'keyur-khadka',
    name: 'Keyur Khadka',
    position: 'Developer',
    funnyDescription: 'Stay hard! (PS: Context is important!)',
    department: 'development',
};

const priyeshGautam: Employee = {
    id: 'priyesh-gautam',
    name: 'Priyesh Gautam',
    position: 'Developer',
    funnyDescription: 'Get yo self some juicy ass jerris!',
    department: 'development',
};

const subinaRajopadhyay: Employee = {
    id: 'subina-rajopadhyaya',
    name: 'Subina Sharma Rajopadhyaya',
    position: 'Developer',
    funnyDescription: 'Subina ta Su bina Bina hudo raichha',
    department: 'development',
};

const smritiKafle: Employee = {
    id: 'smriti-kafle',
    name: 'Smriti Kafle',
    position: 'Designer',
    funnyDescription: 'Kadak! Clk! Clk!',
    department: 'development',
};

const shubhDhital: Employee = {
    id: 'shubh-dhital',
    name: 'Shubh Dhital',
    position: 'QA Engineer',
    funnyDescription: 'Yo Description padhirako Fiiiiixxxx ho!',
    department: 'development',
};

const safarLigal: Employee = {
    id: 'safar-ligal',
    name: 'Safar Sanu Ligal',
    position: 'Developer',
    funnyDescription: 'Mazza ayena, eh!',
    department: 'development',
};

const kriti: Employee = {
    id: 'kriti-chhetri',
    name: 'Kriti Chhetri',
    position: 'Analyst',
    funnyDescription: 'Chyaaaaaaannn! Out! Out!',
    department: 'analysis',
};

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

    safarLigal,
    smritiKafle,
    subinaRajopadhyay,
    shubhDhital,
    kriti,
];

export default employees;
