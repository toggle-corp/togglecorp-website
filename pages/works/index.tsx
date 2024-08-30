import React from 'react';
import { GetStaticProps } from 'next';
// import { unique } from '@togglecorp/fujs';

import { ProjectType } from 'data/projectTypes';
// import { getProjectCoverImage } from 'data/projectImages';
import staticProjects, { Project } from 'data/projects';

import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';
import Container from 'components/general/Container';
import Card from 'components/general/Card';
/*
import Separator from 'components/general/Separator';
import Tabs from 'components/general/Tabs';
import { selfSelector } from 'utils/common';
*/

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

function WorksPage() {
    // const totalProjects = projects.length;
    const totalProjects = '250+';

    // const totalOrganizations = unique(projects.map((project) => project.client)).length;
    const totalOrganizations = '20+';

    /*
    const [
        filteredProjectType,
        setFilteredProjectType,
    ] = useState<ProjectType | 'all'>('all');

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
    */

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
            {/*
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
            */}
            <Container contentClassName={styles.portfolioCard}>
                <Card
                    title="Development Team Portfolio"
                    href="https://drive.google.com/file/d/1vXXxd5oWWRvTkMSlDO92NUzpf6gHknt1/view?usp=sharing"
                    description={(
                        <div>
                            Click here to download
                        </div>
                    )}
                    openExternal
                />
                <Card
                    title="Analysis Team Portfolio"
                    href="https://drive.google.com/file/d/1T6gHiY27jlpxJ4jpci1Af-JQ9Iev553X/view?usp=sharing"
                    description={(
                        <div>
                            Click here to download
                        </div>
                    )}
                    openExternal
                />
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
