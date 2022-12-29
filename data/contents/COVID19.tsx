import ListContent from 'components/general/ListContent';

function COVID19Content() {
    const whatWeDidList = [
        'Identified direct and indirect impacts of the epidemic in multiple sectors.',
        'Discovered changes in humanitarian conditions in different countries.',
        'Supported the identification of populations at risk and in need of preventive measures.',
        'Recognized information gaps and potential areas of concern.',
        'Produced a secondary review of qualitative data through the DEEP and the GIMAC Analytical Framework for different countries (Afghanistan, South Sudan, Somalia, and Sudan) for a fixed timeframe',
        'Coordinated, structured, collated, managed, and analyzed COVID-19-related information',
        'Provided technical support and services to prioritized countries and global decision making based on a request covering the different sectors of food, shelter, nutrition,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              education, health, WASH, protection, and child protection',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default COVID19Content;
