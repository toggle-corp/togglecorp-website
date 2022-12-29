import ListContent from 'components/general/ListContent';

function IFRCQuestionnaireContent() {
    const whatWeDidList = [
        'Data labeling according to the given analytical framework focusing on questionnaires of the interviews taken',
        'Identified the differences in answers given by the HH and KIIs in different countries',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default IFRCQuestionnaireContent;
