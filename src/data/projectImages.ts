import workListOne from 'resources/work-list-1.webp';
import ifrcGo from 'resources/ifrc-go-home.webp';
import durableSolution from 'resources/durable-solutions.webp';
import kitabBazar from 'resources/kitab-bazar-home.webp';
import deepHome from 'resources/deep-home.webp';
import idmcGIDD from 'resources/global-internal-displacement-database.webp';
import sikkaImg from 'resources/sikkaImg.webp';
import npStocks from 'resources/np-stocks.webp';
import dfidInfographics from 'resources/dfid-infographics.webp';
import dfidImg from 'resources/dfid-dashboard.webp';
import { ProjectId } from 'data/projects';

// NOTE: we need to separate out images because they cannot be passed through getStaticProps
const projectCoverImages: {
    [key in ProjectId]?: string;
} = {
    'ifrc-go': ifrcGo,
    dfid: dfidImg,
    npstocks: npStocks,
    'innovation-project': workListOne,
    'durable-solutions': durableSolution,
    'dfid-infographics': dfidInfographics,
    'management-information-system': workListOne,
    sustain: workListOne,
    'kitab-bazar': kitabBazar,
    deep: deepHome,
    'idmc-media': workListOne,
    'idmc-gidd': idmcGIDD,
    // 'child-sponser': workListOne,
    helix: workListOne,
    sikka: sikkaImg,
    paalika: workListOne,
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectCoverImage(projectId: ProjectId) {
    return projectCoverImages[projectId];
}
