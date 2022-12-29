import ListContent from 'components/general/ListContent';

function DFIDInfographicsContent() {
    const whatWeDidList = [
        'Initial requirements gathering',
        'Multiple calls to discuss and finalize requirements',
        'System Design',
        'Continuous work during the campaign',
    ];

    const challengesList = [
        'Short timeline which demanded proactiveness',
        'Instant communication',
    ];

    const learningOutcomesList = [
        'Designing capabilities of the company',
        'Learn new technologies',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default DFIDInfographicsContent;
