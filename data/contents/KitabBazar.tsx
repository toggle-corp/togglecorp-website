import ListContent from 'components/general/ListContent';

function KitabBazarContent() {
    const whatWeDidList = [
        'Multiple meetings at TC office, WV office, and online',
        'Multiple meeting with publishers consortium and logistical partner',
        'GitHub for project management and tracking',
        'Provide training in the field (districts) to schools or field representatives',
    ];

    const challengesList = [
        'Scope creep',
        'Requirement was not clear initially',
        'Workflow was improper because the design was done in-house',
        'Lack of coordination as the stakeholders were too much',
        'Lack of communication with customers given their location',
        'Budgetary limitations',
        'Constant change in requirements after some time',
    ];

    const learningOutcomesList = [
        'The actual gap was realized while making the final delivery',
        'Not enough course books were available in the schools',
        'The opportunity was too big',
        'Implementing the project was like running a start-up company',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
            challengesDescriptions={challengesList}
            learningOutcomesDescriptions={learningOutcomesList}
        />
    );
}

export default KitabBazarContent;
