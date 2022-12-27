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
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectCoverImage(projectId: ProjectId) {
    return projectCoverImages[projectId];
}
