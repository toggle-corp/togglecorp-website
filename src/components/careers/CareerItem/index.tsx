import React from 'react';

import ButtonLikeLink from 'components/general/ButtonLikeLink';
import LabelValue from 'components/general/LabelValue';
import { IoCalendarClearOutline } from 'react-icons/io5';

import styles from './styles.module.css';

interface CareerItemProps {
    position: React.ReactNode;
    department: string;
    applyUrl: string;
    openings: number;
    salary: string;
    category: 'Part Time' | 'Full Time';
    applyBefore: string;
}

function CareerItem(props: CareerItemProps) {
    const {
        position,
        applyUrl,
        department,
        openings,
        salary,
        category,
        applyBefore,
    } = props;

    return (
        <div className={styles.careerItem}>
            <h4>
                {position}
            </h4>
            <div className={styles.departmentLabel}>
                {department}
            </div>
            <div>
                <LabelValue
                    label="Openings:"
                    value={openings}
                />
                <LabelValue
                    label="Category:"
                    value={category}
                />
                <LabelValue
                    label="Apply Before:"
                    value={applyBefore}
                />
                <LabelValue
                    label="Salary:"
                    value={salary}
                />
            </div>
            <hr className={styles.divider} />
            <div className={styles.actions}>
                <div className={styles.applyDate}>
                    <IoCalendarClearOutline color="grey" size={20} />
                    &nbsp;&nbsp;April 22, 2023
                </div>
                <ButtonLikeLink href={applyUrl}>
                    Apply Now
                </ButtonLikeLink>
            </div>
        </div>
    );
}

export default CareerItem;
