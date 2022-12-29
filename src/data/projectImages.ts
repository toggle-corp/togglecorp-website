import workListOne from 'resources/work-list-1.webp';
import ifrcGo from 'resources/ifrc-go-home.webp';
import durableSolution from 'resources/durable-solutions-nepal.webp';
import kitabBazar from 'resources/kitab-bazar-home.webp';
import deepHome from 'resources/deep-home.webp';
import idmcGIDD from 'resources/global-internal-displacement-database.webp';

import { ProjectId } from 'data/projects';

// NOTE: we need to separate out images because they cannot be passed through getStaticProps
const projectCoverImages: {
    [key in ProjectId]?: string;
} = {
    'ifrc-go': ifrcGo,
    dfid: workListOne,
    npstocks: workListOne,
    'innovation-project': workListOne,
    'durable-solutions': durableSolution,
    'dfid-infographics': workListOne,
    'management-information-system': workListOne,
    sustain: workListOne,
    'kitab-bazar': kitabBazar,
    deep: deepHome,
    'idmc-media': workListOne,
    'idmc-gidd': idmcGIDD,
    // 'child-sponser': workListOne,
    helix: workListOne,
    sikka: workListOne,
    paalika: workListOne,
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectCoverImage(projectId: ProjectId) {
    return projectCoverImages[projectId];
}
