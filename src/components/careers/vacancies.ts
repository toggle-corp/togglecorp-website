// Move this to career

interface Vacancy {
    id: string;
    position: string;
    department: 'Analysis' | 'Development' | 'Operations';
    category: 'Part Time' | 'Full Time';
    openings: number;
    formLink: string;
    jobLevel: string;
    experience: string;
    applyBefore: string;
    salary: string;
}

// NOTE: these are actual job descriptions
const vacancies: Vacancy[] = [
    {
        id: '1',
        position: 'Quality Analyst (QA)',
        department: 'Development',
        jobLevel: 'Junior / Mid',
        openings: 1,
        experience: '6 months - 1 year in the same field',
        category: 'Full Time',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScge7PQ7IAAIoQ-ByE26Djacsiqyz2a1pJTnAN-MabrmJfPJg/viewform?usp=sharing',
        applyBefore: 'November 30, 2023',
        salary: 'Best in the industry / Negotiable',
    },
    // {
    //     id: '2',
    //     position: 'Sr. Frontend Developer',
    //     department: 'Development',
    //     jobLevel: 'Senior',
    //     openings: 1,
    //     experience: '2 - 3 years in the same field',
    //     category: 'Full Time',
    //     formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc5egRAI3rpyTVeMxZcYOSiXomyGO5GYTgxefOmhXmuvZudew/viewform?usp=share_link',
    //     applyBefore: 'August 31, 2023',
    //     salary: 'Best in the industry / Negotiable',
    // },
    {
        id: '3',
        position: 'ML Engineer',
        department: 'Development',
        jobLevel: 'Mid',
        openings: 1,
        experience: '2 years in the same field',
        category: 'Full Time',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHE77PzbF_5cTwWEa204m_Q2URqfEL5uvCv9ENFR5kmNZscA/viewform?usp=sharing',
        applyBefore: 'November 30, 2023',
        salary: 'Best in the industry / Negotiable',
    },
    {
        id: '4',
        position: 'Sr. Backend Developer',
        department: 'Development',
        jobLevel: 'Mid / Senior',
        openings: 1,
        experience: '3 years in the same field',
        category: 'Full Time',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfYCcQMUk5wGKQTWFsFF_lqXv12BI_DTtbXpmWctrUHxhfTOg/viewform?usp=sharing',
        applyBefore: 'November 30, 2023',
        salary: 'Best in the industry / Negotiable',
    },
];

// Note: When no vacancies, comment above vacancies and uncomment below vacancies:
// const vacancies: Vacancy[] | undefined = undefined;

export default vacancies;
