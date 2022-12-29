import ListContent from 'components/general/ListContent';

function DFIDContent() {
    const whatWeDidList = [
        'Multiple meetings with DFID members',
        'Communication with external backend team',
        'Multiple communication tools',
        'Project management tool (Trello) to keep track of tasks',
    ];

    const challengesList = [
        'The requirements were not clear',
        'Less involvement from clients',
        'The project elongated due to Covid-19',
        'Rearrange improperly formatted data which took some time',
    ];

    const learningOutcomesList = [
        'Actual necessity of the project was questionable as the project went on',
        'The project could have been divided into multiple projects which could have given time to focus on a certain functionality and make it better',
        'Better project management',
        'Better communication skills',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default DFIDContent;
