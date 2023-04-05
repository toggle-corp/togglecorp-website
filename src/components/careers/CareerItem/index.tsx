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
    jobLevel: string;
    category: 'Part Time' | 'Full Time';
    experience: string;
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
        jobLevel,
        applyBefore,
        experience,
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
                    label="Job Level:"
                    value={jobLevel}
                />
                <LabelValue
                    label="Employment Type:"
                    value={category}
                />
                <LabelValue
                    label="Experience:"
                    value={experience}
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
                    &nbsp;&nbsp;
                    {applyBefore}
                </div>
                <ButtonLikeLink href={applyUrl}>
                    Apply Now
                </ButtonLikeLink>
            </div>
        </div>
    );
}

export default CareerItem;
