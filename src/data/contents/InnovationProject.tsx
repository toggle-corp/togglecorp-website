import ListContent from 'components/general/ListContent';

function InnovationProjectContent() {
    const whatWeDidList = [
        'Requirements gathering',
        'Project Plan',
        'System Design',
        'Collaboration with Polto and Flowminder',
    ];

    const challengesList = [
        'Narrowing down a broad area of inter-organizational data processing to something that’s deliverable within a short time frame.',
    ];

    const learningOutcomesList = [
        'Research in data anonymization',
        'Research in the domain of Multiparty computation and Homomorphic encryption',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default InnovationProjectContent;
