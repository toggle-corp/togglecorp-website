import ListContent from 'components/general/ListContent';

function SikkaContent() {
    const whatWeDidList = [
        'Held multiple discussions with the technical team',
        'Discussions with the client to clarify the requirements',
        'Explored existing codebase to understand it better',
        'Implement Sparrow SMS API',
        'Research and implement Hyperledger blockchain technology',
    ];

    const challengesList = [
        'Understanding the codebase was time consuming as the project was handed over midway',
        'Multiple meetings with the technical team to understand the codebase better',
    ];

    const learningOutcomesList = [
        'Learn new technology',
        'Understand how SMS works',
        'Understand how Hyperledger technology works',
        'Better understanding in project handover and overall management',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default SikkaContent;
