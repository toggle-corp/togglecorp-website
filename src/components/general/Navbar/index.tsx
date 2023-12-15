import Link from 'next/link';
import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import tcLogo from 'resources/togglecorp-normal.svg';
import Container from 'components/general/Container';

import Button from 'components/general/Button';

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

    const [showBarMenu, setShowBarMenu] = useState<boolean>(false);

    const { pathname } = useRouter();

    useEffect(() => {
        setShowBarMenu(false);
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShowBarMenu(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSideMenu = useCallback(() => {
        setShowBarMenu(!showBarMenu);
    }, [
        showBarMenu,
        setShowBarMenu,
    ]);

    return (
        <Container
            className={_cs(styles.navbar, className)}
            contentClassName={styles.content}
        >
            <Link
                href="/"
                passHref
            >
                <div className={styles.logo}>
                    <Image
                        src={tcLogo}
                        alt="TC-logo-main"
                    />
                </div>
            </Link>
            {/* NOTE: This menu below is intended to be used for responsive menu bar */}
            {showBarMenu && (
                <div className={styles.menuBar}>
                    {/* Replace with /works after all works page are complete */}
                    <NavLink href="/team">
                        Team
                    </NavLink>
                    <NavLink href="/careers">
                        Career
                    </NavLink>
                    <NavLink href="https://blog.togglecorp.com">
                        Blogs
                    </NavLink>
                    <NavLink href="/about-us">
                        About
                    </NavLink>
                    {showBarMenu && (
                        <NavLink href="/contact-us">
                            Contact Us
                        </NavLink>
                    )}
                </div>
            )}
            <div
                className={styles.navHamburger}
                onClick={handleSideMenu}
                role="presentation"
            >
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </div>
            <div className={styles.menuList}>
                {/* Replace with /works after all works page are complete */}
                <NavLink href="/team">
                    Team
                </NavLink>
                <NavLink href="/careers">
                    Career
                </NavLink>
                <NavLink href="https://blog.togglecorp.com">
                    Blogs
                </NavLink>
                <NavLink href="/about-us">
                    About
                </NavLink>
            </div>
            <NavLink
                href="/contact-us"
                className={styles.contactLink}
            >
                <Button
                    name={undefined}
                    variant={pathname === '/contact-us' ? 'primary-active' : 'primary'}
                >
                    Contact Us
                </Button>
            </NavLink>
        </Container>
    );
}

export default Navbar;
