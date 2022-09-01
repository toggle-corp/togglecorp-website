import Link from 'next/link';
import { _cs } from '@togglecorp/fujs';

import tcLogo from 'resources/togglecorp-normal.svg';
import Container from 'components/general/Container';

import styles from './styles.module.css';

interface NavProps {
    className?: string;
}

function Navbar(props: NavProps) {
    const { className } = props;

    return (
        <Container
            className={_cs(styles.navbar, className)}
            contentClassName={styles.content}
        >
            <Link
                href="/"
                passHref
            >
                <img
                    className={styles.logo}
                    src={tcLogo}
                    alt="TC"
                />
            </Link>
            <div className={styles.menuList}>
                <Link href="/works">
                    Work
                </Link>
                <Link href="/blogs">
                    Blog
                </Link>
                <Link href="/employees">
                    Employee
                </Link>
                <Link href="/careers">
                    Career
                </Link>
                <Link href="/services">
                    Service
                </Link>
                <Link href="/about-us">
                    About
                </Link>
            </div>
            <Link
                href="/contact-us"
                passHref
            >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className={styles.contactLink}
                >
                    Contact Us
                </a>
            </Link>
        </Container>
    );
}

export default Navbar;
