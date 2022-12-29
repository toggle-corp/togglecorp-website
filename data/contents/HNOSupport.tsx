import ListContent from 'components/general/ListContent';

function HNOSupportContent() {
    const whatWeDidList = [
        'Produced a secondary review of qualitative data through the DEEP to provide support to UN OCHA in writing the report for Humanitarian Needs Overview 2022 for four countries (Sudan, South Sudan, Somalia, and  Afghanistan).',
        'Provided significant facts, trends, and data to inform efficiency and effective decision-making in the Humanitarian Need Overview 2022.',
        'Supported establishment of a structured and systematic repository of secondary data in DEEP, which will be used to inform the Humanitarian Programme Cycle in the future.',
        'Provided support to Country Expert Groups including specific analysis support and capacity building on using DEEP for qualitative data collection and analysis.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default HNOSupportContent;
