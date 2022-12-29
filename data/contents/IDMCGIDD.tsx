import ListContent from 'components/general/ListContent';

function IDMCGIDDContent() {
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

export default IDMCGIDDContent;
