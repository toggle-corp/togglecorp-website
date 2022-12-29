import ListContent from 'components/general/ListContent';

function DurableSolutionContent() {
    const whatWeDidList = [
        'Internal and external discussions to gather requirements and information',
        'Inject React application into WordPress',
        'Integrate Leaflet library into the React application',
        'Work with external backend team to integrate data into the React application',
        'Create required API in Python Django',
    ];

    const challengesList = [
        'Data visualization in a map',
        'An iterative process of research and development',
    ];

    const learningOutcomesList = [
        'Learn map integration and map visualization',
        'Enhance research and development skills',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default DurableSolutionContent;
