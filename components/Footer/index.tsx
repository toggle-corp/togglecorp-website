import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css'

interface Props {
    className?: string;
}

function Footer(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(styles.footer, className)}>
            <div className={styles.container}>
                <div className={styles.helpText}>
                    <p>
                        Tell us about your need.
                    </p>
                    <p>
                        We&apos;d love to hear from you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
