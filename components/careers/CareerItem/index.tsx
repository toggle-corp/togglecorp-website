import React from 'react';

import ButtonLikeLink from 'components/general/ButtonLikeLink';
import styles from './styles.module.css';

interface LabelValueProps {
    label: React.ReactNode;
    value: React.ReactNode;
}

function LabelValue(props: LabelValueProps) {
    const {
        label,
        value,
    } = props;

    return (
        <div className={styles.labelValue}>
            <div>
                {label}
            </div>
            <div>
                {value}
            </div>
        </div>
    );
}

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
            <div>
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
            <div className={styles.actions}>
                <ButtonLikeLink href={applyUrl}>
                    Apply
                </ButtonLikeLink>
            </div>
        </div>
    );
}

export default CareerItem;
