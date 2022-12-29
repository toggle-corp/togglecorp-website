import ListContent from 'components/general/ListContent';

function ScoringMatrixContent() {
    const whatWeDidList = [
        'Scored the assessment reports published by different international organizations with the set of criteria and scoring matrix for evaluating the quality',
        'The team worked with sector specialists on a Multi-Sectoral needs assessment (MSNA), Humanitarian Needs Organization (HNO), Common Need assessment (CNA), and European Union (EU) project for scoring the sector-specific reports',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default ScoringMatrixContent;
