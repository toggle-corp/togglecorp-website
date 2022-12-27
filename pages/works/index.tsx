import React, {
    useMemo,
    useState,
} from 'react';
import { GetStaticProps } from 'next';
import { IoEllipseSharp } from 'react-icons/io5';
import { _cs, unique } from '@togglecorp/fujs';

import { ProjectType, getProjectType } from 'data/projectTypes';
import { getProjectCoverImage } from 'data/projectImages';
import staticProjects, { Project } from 'data/projects';

import Button from 'components/general/Button';
import Page from 'components/general/Page';
import Card from 'components/general/Card';
import Container from 'components/general/Container';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';

import organizationLogo from 'resources/organization.webp';

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

    const totalProjects = projects.length;

    const totalOrganizations = unique(projects.map((project) => project.client)).length;

    const filteredProjects = useMemo(() => {
        if (filteredProjectType === 'all') {
            return projects;
        }
        return projects.filter((project) => (
            project.projectType === filteredProjectType
        ));
    }, [projects, filteredProjectType]);

    return (
        <Page
            className={styles.works}
            pageTitle="Our Works"
            banner={(
                <BannerWithImage
                    title="Our Works"
                    description="We work closely with several national and international humanitarian organizations."
                    imageUrl={organizationLogo}
                    stats={(
                        <div className={styles.keyFigures}>
                            <KeyFigure
                                label="Project Completed"
                                value={totalProjects}
                            />
                            <KeyFigure
                                label="Total Organization"
                                value={totalOrganizations}
                            />
                        </div>
                    )}
                />
            )}
        >
            <Container contentClassName={styles.workContent}>
                <div className={styles.tabs}>
                    {projectTypeOptions.map((type, i) => (
                        <React.Fragment
                            key={type}
                        >
                            <Button
                                variant="tab"
                                className={_cs(
                                    styles.tab,
                                    filteredProjectType === type && styles.active,
                                )}
                                name={type}
                                onClick={setFilteredProjectType}
                            >
                                {type === 'all' ? 'All Works' : getProjectType(type).title}
                            </Button>
                            {i < (projectTypeOptions.length - 1) && (
                                <IoEllipseSharp className={styles.dot} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.horizontalRow} />
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
