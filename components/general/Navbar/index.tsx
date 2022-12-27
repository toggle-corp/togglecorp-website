import Link from 'next/link';
import { useRouter } from 'next/router';
import { _cs } from '@togglecorp/fujs';

import tcLogo from 'resources/togglecorp-normal.svg';
import Container from 'components/general/Container';

import styles from './styles.module.css';

interface NavLinkProps {
    className?: string;
    href: string;
    children?: React.ReactNode;
}

function NavLink(props: NavLinkProps) {
    const {
        className,
        href,
        children,
    } = props;
    const { pathname } = useRouter();
    const isActive = pathname.startsWith(href);

    return (
        <Link href={href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className={_cs(
                    styles.navLink,
                    className,
                    isActive && styles.active,
                )}
            >
                {children}
            </a>
        </Link>
    );
}

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
                <NavLink
                    href="/works"
                >
                    Work
                </NavLink>
                <NavLink href="/blogs">
                    Blog
                </NavLink>
                <NavLink href="/careers">
                    Career
                </NavLink>
                <NavLink href="/services">
                    Service
                </NavLink>
                <NavLink href="/about-us">
                    About
                </NavLink>
            </div>
            <NavLink
                href="/contact-us"
                className={styles.contactLink}
            >
                Contact Us
            </NavLink>
        </Container>
    );
}

export default Navbar;
