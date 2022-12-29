import ListContent from 'components/general/ListContent';

function EMRContent() {
    const whatWeDidList = [
        'Evaluated the performance of the emergency response mechanism and examined the adherence to the Core Humanitarian Standards (CHS)',
        'Highlighted the key achievements, challenges, enabling factors, and recommendations, particularly focusing on the comparison between ERM 9 and 10',
        'Identified the opportunities to adapt and reposition the ERM to align with the ongoing operational context',
        'Supported DRC to evaluate the ERM, with particular emphasis on recent changes made to the most recent cycle of ERM 10',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default EMRContent;
