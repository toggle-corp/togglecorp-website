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
            <div className={styles.title}>
                {position}
            </div>
            <div className={styles.type}>
                {vacancy}
            </div>
            <div className={styles.actions}>
                <div className={styles.apply}>
                    {link}
                </div>
            </div>
        </div>
    );
}

export default CareerItem;
