import React, {
    useMemo,
    useState,
} from 'react';
import { GetStaticProps } from 'next';
// import { unique } from '@togglecorp/fujs';

import { ProjectType, getProjectType } from 'data/projectTypes';
import { getProjectCoverImage } from 'data/projectImages';
import staticProjects, { Project } from 'data/projects';

import Page from 'components/general/Page';
import Card from 'components/general/Card';
import Container from 'components/general/Container';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';
import Separator from 'components/general/Separator';
import Tabs from 'components/general/Tabs';
import { selfSelector } from 'utils/common';

import bannerImage from 'resources/works/banner.jpeg';

import styles from './styles.module.css';

// FIXME: get this from staticProps
export const projectTypeOptions: (ProjectType | 'all')[] = [
    'all',
    'research',
    'development',
    'consulting',
];
interface Props {
    projects: Project[];
}

function WorksPage(props: Props) {
    const {
        projects,
    } = props;

    const [
        filteredProjectType,
        setFilteredProjectType,
    ] = useState<ProjectType | 'all'>('all');

    // const totalProjects = projects.length;
    const totalProjects = '250+';

    // const totalOrganizations = unique(projects.map((project) => project.client)).length;
    const totalOrganizations = '20+';

    const filteredProjects = useMemo(() => {
        if (filteredProjectType === 'all') {
            return projects;
        }
        return projects.filter((project) => (
            project.projectType === filteredProjectType
        ));
    }, [projects, filteredProjectType]);

    const labelSelector = React.useCallback((projectType: ProjectType | 'all') => (
        projectType === 'all' ? 'All Works' : getProjectType(projectType).title
    ), []);

    return (
        <Page
            className={styles.works}
            pageTitle="Our Works"
            banner={(
                <BannerWithImage
                    title="Our Works"
                    description="Strong client relationship is the foundation of our success"
                    imageUrl={bannerImage}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Project Completed"
                                projectCount={totalProjects}
                            />
                            <KeyFigure
                                label="Total Organizations"
                                projectCount={totalOrganizations}
                            />
                        </div>
                    )}
                />
            )}
        >
            <Container contentClassName={styles.workContent}>
                <Tabs
                    options={projectTypeOptions}
                    value={filteredProjectType}
                    onChange={setFilteredProjectType}
                    keySelector={selfSelector}
                    labelSelector={labelSelector}
                />
                <Separator />
                <div className={styles.projectList}>
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className={styles.project}
                            imageSrc={getProjectCoverImage(project.id)}
                            title={project.projectTitle}
                            description={project.summary}
                            href={`/works/${project.id}`}
                            tags={[getProjectType(project.projectType).title]}
                        />
                    ))}
                </div>
            </Container>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
    props: {
        projects: staticProjects,
    },
});

export default WorksPage;
