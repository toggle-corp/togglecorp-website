import ListContent from 'components/general/ListContent';

function SustainContent() {
    const whatWeDidList = [
        'Study the physical questionnaires to understand the project',
        'Study previous versions of the app by conducting meetings and discussing initial challenges',
        'Multiple meetings with GC stakeholders to gather the requirements and get to know the project in detail',
        'User interviews to user’s perspective and feedback',
        'An iterative process of showing progress, collecting feedback and working upon it',
    ];

    const challengesList = [
        'Server cost was more than anticipated',
        'Budgetary challenges',
        'Shifting the server while the project was ongoing',
        'Improper planning regarding sustainability',
        'Lack of contingency plan',
    ];

    const learningOutcomesList = [
        'Trust was hard to build',
        'Budget should have been allocated from the first',
        'Project planning should have been better from the first',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default SustainContent;
