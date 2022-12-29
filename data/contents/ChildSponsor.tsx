import ListContent from 'components/general/ListContent';

function ChildSponsorContent() {
    const whatWeDidList = [
        'Initial meeting to gather requirements',
        'Design mockups from scratch',
        'Data parsing from XML to database',
    ];

    const challengesList = [
        'Requirements were not clear cut',
        'Mockup was not finalized upon',
        'Additional changes to the requirements as the initial requirements were vague',
        'No deadline which resulted in slow development',
    ];

    const learningOutcomesList = [
        'Learn the importance of finalized requirements and deadlines',
        'Learn the importance of a single source of truth',
        'Parse data from XML to database via backend',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default ChildSponsorContent;
