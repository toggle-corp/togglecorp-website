import ListContent from 'components/general/ListContent';

function FragilityStudyContent() {
    const whatWeDidList = [
        'A Secondary Data Review was carried out',
        'Data collection was done through Key Informant Interviews and Focus Group Discussion',
        'Thematic analysis was conducted by using QDA Miner Lite, the qualitative data coding software',
        'Interpretation of results according to the main research question and Report writing was done',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default FragilityStudyContent;
