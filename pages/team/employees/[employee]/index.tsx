import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import staticEmployees, { Employee } from 'data/employees';
import EmployeeCard from 'components/employees/EmployeeCard';

import tcLogo from 'resources/togglecorp-dark.svg';
import { getEmployeeImage } from 'data/employeeImages';

import styles from './styles.module.css';

type EmployeePageProps = {
    specificEmployeeData: Employee,
};

function EmployeePage(props: EmployeePageProps) {
    const {
        specificEmployeeData,
    } = props;

    return (
        <div className={styles.employeePage}>
            <Head>
                <title>{specificEmployeeData.name}</title>
            </Head>
            <Link
                href="/"
                passHref
            >
                <img
                    className={styles.logo}
                    src={tcLogo}
                    alt="Togglecorp"
                />
            </Link>
            <EmployeeCard
                className={styles.card}
                key={specificEmployeeData.id}
                imageSrc={getEmployeeImage(specificEmployeeData.id)}
                name={specificEmployeeData.name}
                position={specificEmployeeData.position}
                funnyDescription={specificEmployeeData.funnyDescription}
                description={specificEmployeeData.description}
                linkedInLink={specificEmployeeData.linkedInLink}
                instagramLink={specificEmployeeData.instagramLink}
                facebookLink={specificEmployeeData.facebookLink}
                stackoverflowLink={specificEmployeeData.stackoverflowLink}
                githubLink={specificEmployeeData.githubLink}
                blogLink={specificEmployeeData.blogLink}
                twitterLink={specificEmployeeData.twitterLink}
            />
            <Link
                href="/"
                passHref
            >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.visitWebsiteLink}>
                    Visit Togglecorp Website
                </a>
            </Link>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const employeeId = context.params?.employee as (string | undefined);

    const specificEmployee = staticEmployees.find((item) => employeeId === item.id);

    if (!specificEmployee) {
        return { notFound: true };
    }

    const props: EmployeePageProps = {
        specificEmployeeData: specificEmployee,
    };

    return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pathsWithParams = staticEmployees.map((employee) => ({
        params: { employee: employee.id },
    }));

    return {
        paths: pathsWithParams,
        fallback: 'blocking',
    };
};

export default EmployeePage;
