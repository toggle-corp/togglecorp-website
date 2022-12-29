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
    description: string;
    position: string;
    joinedAt: string;
    department: Department;

    // TODO: add more links
    linkedInLink?: string;
    instagramLink?: string;
}

const adityaKhatri: Employee = {
    id: 'aditya-khatri',
    name: 'Aditya Khatri',
    position: 'Co-founder / Developer',
    description: 'Dherai halla, thorai kaam',
    joinedAt: '2016-11-18',
    department: 'development',
};

const amarShahi: Employee = {
    id: 'amar-shahi',
    name: 'Amar Shahi',
    position: 'Operations Manager',
    description: 'Experienced Project Manager with a demonstrated history of working in the information technology and services industry with a Master of Business Administration (M.B.A.) focused in Project Management from Apex College.',
    joinedAt: '2010-10-12',
    department: 'operations',
};

const ankitMehta: Employee = {
    id: 'ankit-mehta',
    name: 'Ankit Mehta',
    position: 'CEO / Co-founder',
    description: 'I\'m the CEO, plich',
    joinedAt: '2010-10-12',
    department: 'development',
};

const anushaKhadka: Employee = {
    id: 'anusha-khadka',
    name: 'Anusha Khadka',
    position: 'Analyst',
    description: 'Baisakh mahina ma ful fulyo, timlai dekhera man bhulyo',
    joinedAt: '2010-10-12',
    department: 'analysis',
};

const barshaThakuri: Employee = {
    id: 'barsha-thakuri',
    name: 'Barsha Thakuri',
    position: 'Developer',
    description: 'I\'ll be late for standup, My scotty is not starting',
    joinedAt: '2012-10-12',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/barshathakuri/',
    instagramLink: 'https://www.instagram.com/barsha.thakuri/',
};

const bibekPandey: Employee = {
    id: 'bibek-pandey',
    name: 'Bibek Pandy',
    position: 'Developer',
    description: '50 katechi ramaula!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const bimalPandey: Employee = {
    id: 'bimal-pandey',
    name: 'Bimal Pandey',
    position: 'Developer',
    description: 'Namaskar sir haru!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const keyurKhadka: Employee = {
    id: 'keyur-khadka',
    name: 'Keyur Khadka',
    position: 'Developer',
    description: 'Stay hard! (PS: Context is important!)',
    joinedAt: '2012-10-12',
    department: 'development',
};

const priyeshGautam: Employee = {
    id: 'priyesh-gautam',
    name: 'Priyesh Gautam',
    position: 'Developer',
    description: 'Get yo self some juicy ass jerris!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const subinaRajopadhyay: Employee = {
    id: 'subina-rajopadhyaya',
    name: 'Subina Sharma Rajopadhyaya',
    position: 'Developer',
    description: 'Subina ta Su bina Bina hudo raichha',
    joinedAt: '2012-10-12',
    department: 'development',
};

const smritiKafle: Employee = {
    id: 'smriti-kafle',
    name: 'Smriti Kafle',
    position: 'Designer',
    description: 'Kadak! Clk! Clk!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const shubhDhital: Employee = {
    id: 'shubh-dhital',
    name: 'Shubh Dhital',
    position: 'QA Engineer',
    description: 'Yo description padhirako Fiiiiixxxx ho!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const safarLigal: Employee = {
    id: 'safar-ligal',
    name: 'Safar Sanu Ligal',
    position: 'Developer',
    description: 'Mazza ayena, eh!',
    joinedAt: '2012-10-12',
    department: 'development',
};

const kriti: Employee = {
    id: 'kriti-chhetri',
    name: 'Kriti Chhetri',
    position: 'Analyst',
    description: 'Chyaaaaaaannn! Out! Out!',
    joinedAt: '2011-10-12',
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
