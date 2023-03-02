import ifrcGo from 'resources/ifrc-go-home.webp';
import durableSolution from 'resources/durable-solutions.webp';
import kitabBazar from 'resources/kitab-bazar-home.webp';
import deep from 'resources/homeSection/deep.jpeg';
import idmcGIDD from 'resources/global-internal-displacement-database.webp';
import sikkaImg from 'resources/sikkaImg.webp';
import dfidInfographics from 'resources/dfid-infographics.webp';
import dfidImg from 'resources/dfid-dashboard.webp';
import npstocks from 'resources/homeSection/np-stocks.webp';
import globalCovid19 from 'resources/homeSection/analysis.jpeg';
import { ProjectId } from 'data/projects';

// NOTE: we need to separate out images because they cannot be passed through getStaticProps
const projectCoverImages: {
    [key in ProjectId]?: string;
} = {
    'ifrc-go': ifrcGo,
    dfid: dfidImg,
    'durable-solutions': durableSolution,
    'dfid-infographics': dfidInfographics,
    'kitab-bazar': kitabBazar,
    deep,
    'idmc-gidd': idmcGIDD,
    sikka: sikkaImg,
    npstocks,
    'global-covid-19': globalCovid19,
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectCoverImage(projectId: ProjectId) {
    return projectCoverImages[projectId];
}
