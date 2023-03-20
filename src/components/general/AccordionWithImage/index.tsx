import React from 'react';
import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';
import Image, { StaticImageData } from 'next/image';

import Button from 'components/general/Button';
import halfTogglecorpLogo from 'resources/half-tc-icon.png';
import styles from './styles.module.css';

interface Props<D> {
    className?: string;
    data: D[];
    keySelector: (item: D) => string;
    labelSelector: (item: D) => React.ReactNode;
    descriptionSelector: (item: D) => React.ReactNode;
    imageUrlSelector: (item: D) => string | StaticImageData;
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
                                    <div
                                        className={
                                            isDefined(activeItem) && key === activeKey
                                                ? styles.halfLogoUnsaturated
                                                : styles.halfLogoSaturated
                                        }
                                    >
                                        <Image
                                            src={halfTogglecorpLogo}
                                            alt="tc-logo"
                                            placeholder="blur"
                                        />

                                    </div>
                                )}
                            >
                                {labelSelector(d)}
                            </Button>
                            {isDefined(activeItem) && key === activeKey && (
                                <>
                                    <div className={styles.imageInternal}>
                                        <Image
                                            src={imageUrlSelector(activeItem)}
                                            alt={keySelector(activeItem)}
                                        />
                                    </div>
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
                <div className={styles.image}>
                    <Image
                        src={imgUrl}
                        alt={activeKey}
                    />
                </div>
            )}
        </div>
    );
}

export default AccordionWithImage;
