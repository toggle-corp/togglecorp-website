import React from 'react';
import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';

import Button from 'components/general/Button';
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
    const imgUrl = isDefined(activeItem) ? imageUrlSelector(activeItem) : undefined;
    const activeKey = isDefined(activeItem) ? keySelector(activeItem) : undefined;

    return (
        <div className={_cs(styles.accordion, className)}>
            <div className={styles.itemList}>
                {data.map((d) => {
                    const key = keySelector(d);

                    return (
                        <div
                            key={key}
                            className={styles.item}
                        >
                            <Button
                                className={styles.titleRow}
                                name={d}
                                variant="transparent"
                                onClick={setActiveItem}
                                icons={(
                                    <img
                                        className={
                                            isDefined(activeItem) && key === activeKey
                                                ? styles.halfLogoUnsaturated
                                                : styles.halfLogoSaturated
                                        }
                                        src={halfTogglecorpLogo}
                                        alt="tc logo"
                                    />
                                )}
                            >
                                {labelSelector(d)}
                            </Button>
                            {isDefined(activeItem) && key === activeKey && (
                                <>
                                    <img
                                        className={styles.imageInternal}
                                        src={imageUrlSelector(activeItem)}
                                        alt={keySelector(activeItem)}
                                    />
                                    <div className={styles.description}>
                                        {descriptionSelector(d)}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            {imgUrl && (
                <img
                    className={styles.image}
                    src={imgUrl}
                    alt={activeKey}
                />
            )}
        </div>
    );
}

export default AccordionWithImage;
