import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface ToggleCorpSectionProps {
    className?: string;
    image: React.ReactNode;
    caption: React.ReactNode;
}

// NOTE: used in about-us page
export function ToggleCorpSection(props: ToggleCorpSectionProps) {
    const {
        className,
        image,
        caption,
    } = props;

    return (
        <div className={_cs(styles.toggleSection, className)}>
            <div className={styles.togglecorpImg}>
                {image}
            </div>
            <div className={styles.togglecorpImgCaption}>
                {caption}
            </div>
        </div>
    );
}

export default ToggleCorpSection;
