import ListContent from 'components/general/ListContent';

function MISContent() {
    const whatWeDidList = [
        'Conduct user interviews to understand the existing scenario, challenges, and obstacles',
        'Meetings to understand the requirements and get an understanding of how the client envisioned the system in the future',
        'Create basic mockups with feedback collected',
        'An iterative process of showing progress, collecting feedback and working upon it',
    ];

    const challengesList = [
        'The project’s sustainability was not discussed',
    ];

    const learningOutcomesList = [
        'Planning should have been done about recurring and other costs beforehand',
        'Sustainability plan could have been made',
        'Proper requirements could have been gathered by conducting more interviews',
        'Overall project management skill was enhanced',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default MISContent;
