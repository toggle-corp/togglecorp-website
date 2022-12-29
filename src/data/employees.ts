type Department = 'development' | 'analysis' | 'operations';
type Position = 'developer' | 'analyst';
type EmployeeId = 'barsha.thakuri' | 'subina.rajopadhyaya' | 'ankit.mehta' | 'kriti.chhetri';

export interface Employee {
    id: EmployeeId;
    name: string;
    description: string;
    position: Position;
    joinedAt: string;
    department: Department;

    // TODO: add more links
    linkedInLink?: string;
    instagramLink?: string;
}

const barsha: Employee = {
    id: 'barsha.thakuri',
    name: 'Barsha Thakuri',
    position: 'developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    joinedAt: '2012-10-12',
    department: 'development',
    linkedInLink: 'https://www.linkedin.com/in/barshathakuri/',
    instagramLink: 'https://www.instagram.com/barsha.thakuri/',
};

const subina: Employee = {
    id: 'subina.rajopadhyaya',
    name: 'Subina Sharma Rajopadhyaya',
    position: 'developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    joinedAt: '2012-10-12',
    department: 'development',
};

const ankit: Employee = {
    id: 'ankit.mehta',
    name: 'Ankit Mehta',
    position: 'developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    joinedAt: '2010-10-12',
    department: 'operations',
};

const kriti: Employee = {
    id: 'kriti.chhetri',
    name: 'Kriti Chhetri',
    position: 'analyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    joinedAt: '2011-10-12',
    department: 'analysis',
};

const employees: Employee[] = [
    ankit,
    subina,
    barsha,
    kriti,
];

export default employees;
