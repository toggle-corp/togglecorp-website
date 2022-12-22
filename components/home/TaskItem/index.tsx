import React from 'react';

import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface TaskItemProps {
    title: React.ReactNode;
    summary: React.ReactNode;
    className?: string;
}

function TaskItem(props: TaskItemProps) {
    const {
        title,
        summary,
        className,
    } = props;

    return (
        <div className={_cs(styles.task, className)}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.summary}>
                {summary}
            </div>
        </div>
    );
}

export default TaskItem;
