import ListContent from 'components/general/ListContent';

function IFRCAppealContent() {
    const whatWeDidList = [
        'Compiled large volumes of appeal documents from several countries into DEEP and segregated the information into a structured analytical framework to support IFRC in the situational analysis of those countries during the humanitarian crisis.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default IFRCAppealContent;
