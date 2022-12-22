import React from 'react';

import styles from './styles.module.css';

interface CareerItemProps {
    position: React.ReactNode;
    vacancy: React.ReactNode;
    link?: React.ReactNode;
}

function CareerItem(props: CareerItemProps) {
    const {
        position,
        vacancy,
        link,
    } = props;

    return (
        <div className={styles.careerSection}>
            {position}
            <div className={styles.applySection}>
                {vacancy}
                <div className={styles.applyButtons}>
                    {link}
                </div>
            </div>
        </div>
    );
}

export default CareerItem;
