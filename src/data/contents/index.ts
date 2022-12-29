import dynamic from 'next/dynamic';
import { ProjectId } from 'data/projects';

// NOTE: we need to separate out images because they cannot be passed through getStaticProps
const projectContent: {
    [key in ProjectId]: any;
} = {
    'ifrc-go': dynamic(() => import('data/contents/Go')),
    dfid: dynamic(() => import('data/contents/DFID')),
    npstocks: dynamic(() => import('data/contents/Npstocks')),
    'innovation-project': dynamic(() => import('data/contents/InnovationProject')),
    'durable-solutions': dynamic(() => import('data/contents/DurableSolution')),
    'dfid-infographics': dynamic(() => import('data/contents/DfidInfographics')),
    'management-information-system': dynamic(() => import('data/contents/MIS')),
    sustain: dynamic(() => import('data/contents/Sustain')),
    'kitab-bazar': dynamic(() => import('data/contents/KitabBazar')),
    deep: dynamic(() => import('data/contents/Deep')),
    'idmc-media': dynamic(() => import('data/contents/IDMCMedia')),
    'idmc-gidd': dynamic(() => import('data/contents/IDMCGIDD')),
    helix: dynamic(() => import('data/contents/Helix')),
    sikka: dynamic(() => import('data/contents/Sikka')),
    'child-sponsor': dynamic(() => import('data/contents/ChildSponsor')),
    paalika: dynamic(() => import('data/contents/Paalika')),
    pdm: dynamic(() => import('data/contents/Pdm')),
    lgbtiq: dynamic(() => import('data/contents/LGBTIQ')),
    'fragility-study': dynamic(() => import('data/contents/FragilityStudy')),
    'refugee-situation': dynamic(() => import('data/contents/RefugeeSituational')),
    'hno-support': dynamic(() => import('data/contents/HNOSupport')),
    'covid-19': dynamic(() => import('data/contents/COVID19')),
    'urban-context': dynamic(() => import('data/contents/UrbanContext')),
    emr: dynamic(() => import('data/contents/EMR')),
    'ifrc-appeal': dynamic(() => import('data/contents/IFRCAppeal')),
    'lebanon-yemen': dynamic(() => import('data/contents/LebanonAndYemen')),
    'humanitarian-access': dynamic(() => import('data/contents/HumanitarianAccess')),
    'ifrc-questionaire': dynamic(() => import('data/contents/IFRCQuestionaire')),
    'ebola-review': dynamic(() => import('data/contents/Ebola')),
    'ukraine-russia-war': dynamic(() => import('data/contents/UkrainRussiaWar')),
    'global-covid-19': dynamic(() => import('data/contents/GlobalCovid19')),
    'sdg-analysis': dynamic(() => import('data/contents/SDGAnalysis')),
    'scoring-matrix': dynamic(() => import('data/contents/ScoringMatrix')),
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectContent(projectId: ProjectId) {
    return projectContent[projectId];
}
