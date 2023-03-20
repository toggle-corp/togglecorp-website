import { StaticImageData } from 'next/image';

import blogListOne from 'resources/work-list-1.webp';

// FIXME: need to refactor

export type BlogType = 'research' | 'libraries' | 'client' | 'case' | 'team';

export interface Blog {
    id: 'blog1' | 'blog2' | 'blog3' | 'blog4' | 'blog5';
    blogType: BlogType;
    blogTitle: string;
    postedOn: string;
    summary: string;
    whatWeDid: string[];
}
const blogs: Blog[] = [
    {
        id: 'blog1',
        blogType: 'research',
        blogTitle: 'An open-sourced library to do something really cool',
        postedOn: 'Jan 24th, 2022',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        whatWeDid: [
            'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees" presence on host communities.',
            'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.',
            'Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.',
            'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
        ],
    },
    {
        id: 'blog2',
        blogType: 'libraries',
        blogTitle: 'A library to do something really cool',
        postedOn: 'Jan 24th, 2019',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        whatWeDid: [
            'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees" presence on host communities.',
            'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.',
            'Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.',
            'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
        ],
    },
    {
        id: 'blog3',
        blogType: 'client',
        blogTitle: 'A library to do something really cool',
        postedOn: 'Jan 24th, 2019',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        whatWeDid: [
            'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees" presence on host communities.',
            'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.',
            'Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.',
            'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
        ],
    },
    {
        id: 'blog4',
        blogType: 'team',
        blogTitle: 'A library to do something really cool',
        postedOn: 'Jan 24th, 2019',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        whatWeDid: [
            'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees" presence on host communities.',
            'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.',
            'Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.',
            'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
        ],
    },
    {
        id: 'blog5',
        blogType: 'case',
        blogTitle: 'A library to do something really cool',
        postedOn: 'Jan 24th, 2019',
        summary: 'The project is focused on monitoring Turkey’s refugee crisis and the refugee influx in Turkey which constitute mostly Syrian refugees. The aim of the project is to regularly keep track of the migrant situation in Turkey through multi-sectoral analysis of collected data on Turkey’s displacement patterns, economy, increased demand on essential needs and services. It also identifies the evolution of the conflict between Syria and Afghanistan and the possibility of return, Turkish language ability, and discrimination of refugees and their perceptions on discrimination as a barrier to accessing basic services. A database of carefully annotated relevant documents for Turkey’s Refugee Crisis has been created in DEEP since 2020.',
        whatWeDid: [
            'Collected data related to Turkey’s refugee crisis to identify the potential negative socio-economic impact of refugees" presence on host communities.',
            'More than 2600 sources have been reviewed until now by exploration of secondary data related to refugees in Turkey about the accessibility of basic services, discrimination, and the relation between refugees and Turkish people.',
            'Regulating the current situation, sentiments about refugees, change over time, refugee influx, the outlook for social cohesion for refugees in Turkey in the near future.',
            'Secondary data review of relevant reports, news articles, opinion articles, and academic articles to support IFRC in planning a targeted response.',
        ],
    },
];

const blogCoverImages: {
    [key in Blog['id']]: string | StaticImageData;
} = {
    blog1: blogListOne,
    blog2: blogListOne,
    blog3: blogListOne,
    blog4: blogListOne,
    blog5: blogListOne,
};

export function getBlogCoverImage(blogId: Blog['id']) {
    return blogCoverImages[blogId];
}

const blogTitles: {
    [key in BlogType]: string;
} = {
    research: 'Research',
    libraries: 'Libraries',
    client: 'Client',
    case: 'Case',
    team: 'Team',
};

export function getBlogTypeTitle(blogType: BlogType) {
    return blogTitles[blogType];
}

export default blogs;
