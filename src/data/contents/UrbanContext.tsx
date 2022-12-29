import ListContent from 'components/general/ListContent';

function UrbanContent() {
    const whatWeDidList = [
        'Identified lessons learned from past humanitarian interventions and evaluated pilot methodologies for humanitarian action in urban environments',
        'Contributed to the improvement of humanitarian response in urban areas by',
        'Identifying best practices in urban humanitarian response',
        'Highlighting suitable methodologies and tools',
        'Providing data about innovations',
        'Gathering situational data',
        'Providing an urban knowledge base for evidence-based project planning',
        'Track relevant data specifically for the project',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default UrbanContent;
