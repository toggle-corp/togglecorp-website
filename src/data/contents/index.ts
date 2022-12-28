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
};

// eslint-disable-next-line import/prefer-default-export
export function getProjectContent(projectId: ProjectId) {
    return projectContent[projectId];
}
