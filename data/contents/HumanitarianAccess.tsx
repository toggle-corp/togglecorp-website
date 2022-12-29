import ListContent from 'components/general/ListContent';

function HumanitarianAccessContent() {
    const whatWeDidList = [
        'Identified trends or patterns between humanitarian access levels, unmet needs, and response gaps by reviewing situational data in nations with humanitarian crises, access challenges, and Hard Reach Areas.',
        'Reviewed current frameworks, methodologies, and best practices for measuring humanitarian access and estimating the number of people facing humanitarian constraints, taking into account both population and relief actors concerns.',
        'Developed a methodological note on access measurement using different data collection techniques such as key informant interviews, household-level surveys, or expert judgment, which helped in the strategic planning and documents such as HRP, HNOs, etc.',
        'Identified context-specific trends and correlations by analyzing hard-to-reach areas and comparing data to current humanitarian data, such as needs, hazards, and security information.',
        'Proposed various indicators to monitor the quality and quantity of access for the populations in need to aid and essential services.',
        'Identified practical recommendations for the humanitarian sector on how to incorporate the humanitarian access dimension in representations of people in need and severity calculations.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default HumanitarianAccessContent;
