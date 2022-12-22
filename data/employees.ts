export interface Employee {
    id: string;
    name: string;
    description: string;
    position: string;
    date: string; // FIXME: remove to join date
    department: 'Analysis' | 'Development' | 'Operations';
    linkedInLink?: string;
    instagramLink?: string;
}

const barsha: Employee = {
    id: 'barsha.thakuri',
    name: 'Barsha Thakuri',
    position: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '2012-10-12',
    department: 'Development',
    linkedInLink: 'https://www.linkedin.com/in/barshathakuri/',
    instagramLink: 'https://www.instagram.com/barsha.thakuri/',
};
const subina: Employee = {
    id: 'subina.rajopadhyaya',
    name: 'Subina Sharma Rajopadhyaya',
    position: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '2012-10-12',
    department: 'Development',
};
const ankit: Employee = {
    id: 'ankit.mehta',
    name: 'Ankit Mehta',
    position: 'CEO, Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '2010-10-12',
    department: 'Development',
};
const kriti: Employee = {
    id: 'kriti.chhetri',
    name: 'Kriti Chhetri',
    position: 'Analyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    date: '2011-10-12',
    department: 'Analysis',
};

const employees: Employee[] = [
    ankit,
    subina,
    barsha,
    kriti,
];

export default employees;
