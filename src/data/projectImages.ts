import workListOne from 'resources/work-list-1.webp';

import { ProjectId } from 'data/projects';

// NOTE: we need to separate out images because they cannot be passed through getStaticProps
const projectCoverImages: {
    [key in ProjectId]: string;
} = {
    'ifrc-go': workListOne,
    dfid: workListOne,
    npstocks: workListOne,
    'innovation-project': workListOne,
    'durable-solutions': workListOne,
    'dfid-infographics': workListOne,
    'management-information-system': workListOne,
    sustain: workListOne,
    'kitab-bazar': workListOne,
    deep: workListOne,
    'idmc-media': workListOne,
    'idmc-gidd': workListOne,
    // 'child-sponser': workListOne,
    helix: workListOne,
    sikka: workListOne,
    paalika: workListOne,
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectCoverImage(projectId: ProjectId) {
    return projectCoverImages[projectId];
}
