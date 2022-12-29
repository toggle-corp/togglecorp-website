import ListContent from 'components/general/ListContent';

function DeepContent() {
    const whatWeDidList = [];

    const challengesList = [];

    const learningOutcomesList = [];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default DeepContent;
