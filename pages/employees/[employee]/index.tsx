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
                image={(
                    <img
                        src={employeeIcon}
                        alt="TC"
                        width={258}
                        height={258}
                    />
                )}
                name={specificEmployeeData.name}
                position={specificEmployeeData.position}
                description={specificEmployeeData.description}
                date={specificEmployeeData.date}
                linkedInLink={specificEmployeeData.linkedInLink}
                instagramLink={specificEmployeeData.instagramLink}
            />
            <div className={styles.toggleLink}>
                <Link
                    href="/"
                >
                    Visit Toggle Website
                </Link>
            </div>
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
