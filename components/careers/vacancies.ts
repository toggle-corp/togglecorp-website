// Move this to career

interface Vacancy {
    id: string;
    position: string;
    department: 'Analysis' | 'Development' | 'Operations';
    formLink: string;
}

const vacancies: Vacancy[] = [
    {
        id: '1',
        position: 'Frontend Developer',
        department: 'Development',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNjibK_T956rlt-Qw8sVSogWYaACitxdTeW2J6TbLZClHu8Q/viewform?usp=sf_link',
    },
    {
        id: '2',
        position: 'Data Analyst',
        department: 'Analysis',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNjibK_T956rlt-Qw8sVSogWYaACitxdTeW2J6TbLZClHu8Q/viewform?usp=sf_link',
    },
    {
        id: '3',
        position: 'Backend Developer',
        department: 'Development',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNjibK_T956rlt-Qw8sVSogWYaACitxdTeW2J6TbLZClHu8Q/viewform?usp=sf_link',
    },
    {
        id: '4',
        position: 'HR Manager',
        department: 'Operations',
        formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfNjibK_T956rlt-Qw8sVSogWYaACitxdTeW2J6TbLZClHu8Q/viewform?usp=sf_link',
    },
];

export default vacancies;
