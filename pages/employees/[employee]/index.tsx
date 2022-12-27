import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

import staticEmployees, { Employee } from 'data/employees';
import EmployeeCard from 'components/employees/EmployeeCard';

import tcLogo from 'resources/togglecorp-dark.svg';
import employeeIcon from 'resources/employee-img.webp';

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
                imageSrc={employeeIcon}
                name={specificEmployeeData.name}
                position={specificEmployeeData.position}
                description={specificEmployeeData.description}
                date={specificEmployeeData.joinedAt}
                linkedInLink={specificEmployeeData.linkedInLink}
                instagramLink={specificEmployeeData.instagramLink}
            />
            <Link
                href="/"
                passHref
            >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.visitWebsiteLink}>
                    Visit Toggle Website
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
