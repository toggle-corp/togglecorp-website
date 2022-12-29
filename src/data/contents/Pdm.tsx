import ListContent from 'components/general/ListContent';

function PdmContent() {
    const whatWeDidList = [
        'Data Collected through a phone survey ',
        'Exported and cleaned the data in the Excel sheets',
        'Graphical representation of the information was done using Power Bi.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default PdmContent;
