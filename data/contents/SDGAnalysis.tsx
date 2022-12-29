import ListContent from 'components/general/ListContent';

function SDGAnalysisContent() {
    const whatWeDidList = [
        'Qualitative Analysis of the UNDCO Reform Survey',
        'Through a summarization of the qualitative data, key themes (achievements, activities, challenges, etc.) were identified for the 125 countries, and 6 survey questions',
        'Generated limitations, challenges, achievements, and opportunities for five global regions to support UNDCO in producing recommendations for future rounds',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default SDGAnalysisContent;
