import React, {
    useMemo,
    useState,
} from 'react';
import { GetStaticProps } from 'next';
import { IoEllipseSharp } from 'react-icons/io5';
import { _cs, unique } from '@togglecorp/fujs';

import staticWorks, {
    getProjectTypeTitle,
    getWorkCoverImage,
    Work,
    WorkType,
} from 'data/works';
import Button from 'components/general/Button';
import Page from 'components/general/Page';
import Card from 'components/general/Card';
import BannerWithImage from 'components/general/BannerWithImage';
import KeyFigure from 'components/general/KeyFigure';

// import WorkDetailListPage from 'components/WorkDetailsListPage';

import organizationLogo from 'resources/organization.webp';

import styles from './styles.module.css';

export const workFilterOptions: (WorkType | 'all')[] = [
    'all',
    'research',
    'development',
    'consulting',
];

interface WorksPageProps {
    works: Work[];
}

function WorksPage(props: WorksPageProps) {
    const {
        works,
    } = props;

    const [
        filteredProjectType,
        setFilteredProjectType,
    ] = useState<WorkType | 'all'>('all');

    const totalProjects = works.length;

    const totalOrganizations = unique(works.map((work) => work.client.id)).length;

    const filteredProjects = useMemo(() => {
        if (filteredProjectType === 'all') {
            return works;
        }
        return works.filter((work) => (
            work.projectType === filteredProjectType
        ));
    }, [works, filteredProjectType]);

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
            <div className={styles.tabList}>
                {workFilterOptions.map((type, i) => (
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
                            {type === 'all' ? 'All Works' : getProjectTypeTitle(type)}
                        </Button>
                        {i < (workFilterOptions.length - 1) && (
                            <IoEllipseSharp className={styles.dot} />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.projectList}>
                {filteredProjects.map((project) => (
                    <Card
                        key={project.id}
                        className={styles.project}
                        imageSrc={getWorkCoverImage(project.id)}
                        title={project.projectTitle}
                        description={project.summary}
                        href={`/works/${project.id}`}
                        tag={getProjectTypeTitle(project.projectType)}
                    />
                ))}
            </div>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<WorksPageProps> = async () => ({
    props: {
        works: staticWorks,
    },
});

export default WorksPage;
