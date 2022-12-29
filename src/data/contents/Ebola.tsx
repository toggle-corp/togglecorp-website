import ListContent from 'components/general/ListContent';

function EbolaReviewContent() {
    const whatWeDidList = [
        'Analyzed the program reports and categorized the information in the relevant analytical framework',
        'Identified the strength and areas of improvement in the coordination mechanisms of the project',
        'Documented the key aspects of the programs such as operations,  movement, interagency coordination, internal processes, and national society capacities.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default EbolaReviewContent;
