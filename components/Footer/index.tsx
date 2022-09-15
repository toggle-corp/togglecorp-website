import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

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
                <div className={styles.toggleEmail}>
                    info@togglecorp.com
                </div>
                <div className={styles.toggleAddress}>
                    Manbhawan, Lalitpur, Nepal
                    <p>
                        +977-9841331922, +977-9849831936
                    </p>
                    <div className={styles.toggleLogo}>
                        <Image
                            src="/togglecorp.svg"
                            alt="Togglecorp Logo"
                            width={174}
                            height={60}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
