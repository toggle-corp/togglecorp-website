import { GetStaticProps, GetStaticPaths } from 'next';
import PageContentWithSidebar from 'components/general/PageContentWithSidebar';
import Banner from 'components/general/Banner';
import KeyFigure from 'components/general/KeyFigure';

import { getSkill } from 'data/skills';
import { getClient } from 'data/clients';
import { getProjectType } from 'data/projectTypes';
import { getProjectCoverImage } from 'data/projectImages';
import { getProjectContent } from 'data/contents';
import staticProjects, { Project } from 'data/projects';

import Page from 'components/general/Page';
import Button from 'components/general/Button';

import styles from './styles.module.css';

interface Props {
    project: Project,
    prevProject: Project | null,
    nextProject: Project | null,
}

function WorkPage(props: Props) {
    const {
        project,
        prevProject,
        nextProject,
    } = props;

    const Content = getProjectContent(project.id);

    return (
        <Page
            pageTitle="Work"
            banner={(
                <Banner
                    backLinkTitle="All Projects"
                    backLinkHref="/works/"
                    title={project.projectTitle}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Project Duration"
                                value={project.projectDuration}
                            />
                            <KeyFigure
                                label="Client"
                                value={getClient(project.client).name}
                            />
                        </div>
                    )}
                />
            )}
        >
            <PageContentWithSidebar
                previewImageUrl={getProjectCoverImage(project.id)}
                sideBarContent={(
                    <>
                        <KeyFigure
                            label="View Projects"
                            value={project.projectTitle}
                            valueHref={project.projectUrl}
                        />
                        <KeyFigure
                            label="Work Type"
                            value={getProjectType(project.projectType).title}
                        />
                        <KeyFigure
                            label="Client Domain"
                            value={getClient(project.client).domain}
                        />
                    </>
                )}
                nextPageDetails={nextProject ? {
                    url: `/works/${nextProject.id}`,
                    title: nextProject.projectTitle,
                    description: getClient(nextProject.client).name,
                } : undefined}
                prevPageDetails={prevProject ? {
                    url: `/works/${prevProject.id}`,
                    title: prevProject.projectTitle,
                    description: getClient(prevProject.client).name,
                } : undefined}
            >
                <div>
                    <h3>
                        About the Project
                    </h3>
                    <div>
                        {project.summary}
                    </div>
                </div>
                <div>
                    <Content />
                </div>
                <div className={styles.caseStudy}>
                    Skills Used
                </div>
                <div className={styles.reviewSection}>
                    {project.skills.map(getSkill).map((skill) => skill.name).join(', ')}
                </div>
                <div className={styles.organisationSection}>
                    {/* eslint-disable-next-line max-len */}
                    We have worked with IFRC and other organizations to enhace their technological and analysis capabilities
                </div>
                <div className={styles.organisationSection}>
                    Learn how we can help you to enhance yours.
                </div>
                <Button
                    name={undefined}
                    className={styles.freeButton}
                    variant="primary"
                    disabled
                >
                    Book a free consultation
                </Button>
            </PageContentWithSidebar>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const projectId = context.params?.work;

    const specificProject = staticProjects.find((item) => item.id === projectId);
    const specificProjectIndex = staticProjects.findIndex((item) => item.id === projectId);

    const prevProject = staticProjects[specificProjectIndex - 1];
    const nextProject = staticProjects[specificProjectIndex + 1];

    if (!specificProject) {
        return { notFound: true };
    }

    const props: Props = {
        project: specificProject,
        prevProject: prevProject ?? null,
        nextProject: nextProject ?? null,
    };
    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = staticProjects.map((project) => ({
        params: { work: project.id },
    }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking',
    };
};

export default WorkPage;
