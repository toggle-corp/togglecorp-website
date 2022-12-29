import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
    whatWeDidDescriptions?: string[];
    challengesDescriptions?: string[];
    learningOutcomesDescriptions?: string[];
}

function ListContent(props: Props) {
    const {
        className,
        whatWeDidDescriptions,
        challengesDescriptions,
        learningOutcomesDescriptions,
    } = props;

    return (
        <div className={_cs(styles.listContent, className)}>
            <div className={styles.content}>
                <h3>
                    What we did:
                </h3>
                <ul>
                    {whatWeDidDescriptions?.map((whatWeDidDescription) => (
                        <li>{whatWeDidDescription}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.content}>
                <h3>
                    Challenges:
                </h3>
                <ul>
                    {challengesDescriptions?.map((challengesDescription) => (
                        <li>{challengesDescription}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.content}>
                <h3>
                    Learning outcomes:
                </h3>
                <ul>
                    {learningOutcomesDescriptions?.map((learningOutcomesDescription) => (
                        <li>{learningOutcomesDescription}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListContent;
