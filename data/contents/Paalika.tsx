import ListContent from 'components/general/ListContent';

function PaalikaContent() {
    const whatWeDidList = [
        'Meeting to gather the initial requirements',
        'Study requirements gathered and mockups provided',
        'Research on export to PDF libraries',
        'Write a library from scratch to export excel sheet data in PDF format',
    ];

    const challengesList = [
        'Existing libraries did not suffice the requirement  to export data in PDF',
        'Lack of proper requirements gathering and information',
        'Lack of understanding resulted in more work than needed',
    ];

    const learningOutcomesList = [
        'Proper understanding of the project is a must',
        'Create a library of our own',
        'Enhance research and development skills',
        'Better UI designing skills',
        'Better team coordination',
        'Better project management',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default PaalikaContent;
