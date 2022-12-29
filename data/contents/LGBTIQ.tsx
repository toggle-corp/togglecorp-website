import ListContent from 'components/general/ListContent';

function PdmContent() {
    const whatWeDidList = [
        'Carry out a phone survey across Nepal to collect data through the VIAMO platform',
        'Exported and cleaned the data in the Excel sheets',
        'Represented the data in SPSS',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default PdmContent;
