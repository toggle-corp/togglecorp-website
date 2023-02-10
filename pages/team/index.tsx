import React from 'react';
import { GetStaticProps } from 'next';

import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Section from 'components/general/Section';
import EmployeeCard from 'components/employees/EmployeeCard';
import { getEmployeeImage } from 'data/employeeImages';

import staticTeam, { Employee } from 'data/employees';

import bannerImage from 'resources/team/banner.jpeg';
import styles from './styles.module.css';

interface Props {
    devTeam: Employee[];
    analysisTeam: Employee[];
    operationsTeam: Employee[];
}

function Team(props: Props) {
    const {
        devTeam,
        analysisTeam,
        operationsTeam,
    } = props;

    return (
        <Page
            pageTitle="Our Team"
            banner={(
                <BannerWithImage
                    title="Our Team"
                    description="Meet our passionate team of creators and problem-solvers."
                    mode="light"
                    imageUrl={bannerImage}
                />
            )}
        >
            <Section
                title="Development"
            >
                <div className={styles.memberGroup}>
                    {devTeam?.map((member) => (
                        <EmployeeCard
                            imageSrc={getEmployeeImage(member.id)}
                            key={member.id}
                            name={member.name}
                            position={member.position}
                            funnyDescription={member.funnyDescription}
                            description={member.description}
                            variant="list"
                            href={`/team/employees/${member.id}`}
                            instagramLink={member.instagramLink}
                            linkedInLink={member.linkedInLink}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Research & Analysis"
            >
                <div className={styles.memberGroup}>
                    {analysisTeam?.map((member) => (
                        <EmployeeCard
                            imageSrc={getEmployeeImage(member.id)}
                            key={member.id}
                            name={member.name}
                            position={member.position}
                            funnyDescription={member.funnyDescription}
                            description={member.description}
                            variant="list"
                            href={`/team/employees/${member.id}`}
                            instagramLink={member.instagramLink}
                            linkedInLink={member.linkedInLink}
                        />
                    ))}
                </div>
            </Section>
            <Section
                title="Operations"
            >
                <div className={styles.memberGroup}>
                    {operationsTeam?.map((member) => (
                        <EmployeeCard
                            imageSrc={getEmployeeImage(member.id)}
                            key={member.id}
                            name={member.name}
                            position={member.position}
                            funnyDescription={member.funnyDescription}
                            description={member.description}
                            variant="list"
                            href={`/team/employees/${member.id}`}
                            instagramLink={member.instagramLink}
                            linkedInLink={member.linkedInLink}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
    props: {
        devTeam: staticTeam.filter((member) => member.department === 'development'),
        analysisTeam: staticTeam.filter((member) => member.department === 'analysis'),
        operationsTeam: staticTeam.filter((member) => member.department === 'operations'),
    },
});

export default Team;
