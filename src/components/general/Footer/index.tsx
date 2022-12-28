import { _cs } from '@togglecorp/fujs';

import Container from 'components/general/Container';
import togglecorpLogo from 'resources/togglecorp.svg';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

function Footer(props: Props) {
    const { className } = props;

    return (
        <Container
            className={_cs(styles.footer, className)}
            contentClassName={styles.content}
        >
            <div className={styles.left}>
                <div className={styles.helpText}>
                    Tell us about your need.
                    <br />
                    We&apos;d love to hear from you.
                </div>
                <span />
                <a
                    className={styles.email}
                    target="_blank"
                    href="mailto:info@togglecorp.com"
                    rel="noreferrer noopener"
                >
                    info@togglecorp.com
                </a>
                <div>
                    <div>
                        Manbhawan, Lalitpur, Nepal
                    </div>
                    <div>
                        <a href="tel:+977-9841331922">
                            +977-9841331922
                        </a>
                        <span>
                            ,&nbsp;
                        </span>
                        <a href="tel:+977-9849831936">
                            +977-9849831936
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.logoContainer}>
                <img
                    className={styles.logo}
                    src={togglecorpLogo}
                    alt="Togglecorp Logo"
                />
            </div>
        </Container>
    );
}

export default Footer;
