import ListContent from 'components/general/ListContent';

function RefugeeSituationalContent() {
    const whatWeDidList = [
        'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees presence on host communities.',
        'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relationship between refugees and Turkish people.',
        'Regulating the current situation, sentiments about refugees, change over time, refugee influx, and the outlook for social cohesion for refugees in Turkey.',
        'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
    ];

    return (
        <ListContent
            whatWeDidDescriptions={whatWeDidList}
        />
    );
}

export default RefugeeSituationalContent;
