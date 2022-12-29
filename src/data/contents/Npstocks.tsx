import ListContent from 'components/general/ListContent';

function NpstocksContent() {
    const whatWeDidList = [
        'Initial requirements gathering along with mockups discussion',
        'Multiple discussions with SMTM as the app integrated their backend',
        'Divide the project into two phases',
        'Phase 1: work with less data, load data quickly, and work on android phones at the time ',
        'Introduce React Native to the project as the app was to work on iOS devices as well',
        'Phase 2: animations, multiple visualizations, and night modeI',
    ];

    const challengesList = [
        'Communication gaps as the backend team was external',
        'Lack of API documentation which resulted in multiple discussions with the backend team',
        'Reworks as the API initially shared was outdated resulting in different response from the server and guessworks because of lack of documentation',
        'Data came from the backend in a certain window',
        'Prompt and quick response from our side as the window for the data was set',
        'QA testing had to be done from scratch every time',
        'Change management was not done properly',
    ];

    const learningOutcomesList = [
        'Learn new technologies and frameworks',
        'Importance of documentation was realized',
        'Better project tracking',
        'Better team coordination',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default NpstocksContent;
