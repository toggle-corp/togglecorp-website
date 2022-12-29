import ListContent from 'components/general/ListContent';

function IDMCMediaContent() {
    const whatWeDidList: string[] = [];

    const challengesList: string[] = [];

    const learningOutcomesList: string[] = [];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default IDMCMediaContent;
