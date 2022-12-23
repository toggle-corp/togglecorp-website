import React from 'react';
import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';

import halfTogglecorpLogo from 'resources/half-tc-icon.png';
import styles from './styles.module.css';

interface Props<D> {
    className?: string;
    data: D[];
    keySelector: (item: D) => string;
    labelSelector: (item: D) => React.ReactNode;
    descriptionSelector: (item: D) => React.ReactNode;
    imageUrlSelector: (item: D) => string;
}

function AccordionWithImage<D>(props: Props<D>) {
    const {
        className,
        data,
        keySelector,
        labelSelector,
        descriptionSelector,
        imageUrlSelector,
    } = props;

    const [activeItem, setActiveItem] = React.useState<D | undefined>(data[0]);

    return (
        <div className={_cs(styles.accordion, className)}>
            <div className={styles.itemList}>
                {data.map((d) => {
                    const key = keySelector(d);

                    return (
                        <div
                            role="presentation"
                            key={key}
                            className={styles.item}
                            onClick={() => setActiveItem(d)}
                        >
                            <div className={styles.titleRow}>
                                <img
                                    className={styles.halfLogo}
                                    src={halfTogglecorpLogo}
                                    alt="tc logo"
                                />
                                <div className={styles.label}>
                                    {labelSelector(d)}
                                </div>
                            </div>
                            {isDefined(activeItem) && key === keySelector(activeItem) && (
                                <div className={styles.description}>
                                    {descriptionSelector(d)}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {isDefined(activeItem) && (
                <img
                    className={styles.image}
                    src={imageUrlSelector(activeItem)}
                    alt={keySelector(activeItem)}
                />
            )}
        </div>
    );
}

export default AccordionWithImage;
