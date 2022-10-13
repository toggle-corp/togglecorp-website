import { useCallback } from 'react';
import { HiViewList } from 'react-icons/hi';
// import Image from 'next/image';

import { _cs } from '@togglecorp/fujs';
import { Button } from '../Button';
import useBooleanState from '../../hooks/useBooleanState';

import styles from './styles.module.css';
import Link from 'next/link';

interface NavProps {
    className?: string;
}

function Navbar(props: NavProps) {
    const { className } = props;

    const [isNavShown, , , , toggleNavVisibility] = useBooleanState(false);

    const handleNavClick = useCallback((itemHash: any) => {
        const elementToScrollTo = document.getElementById(itemHash);

        if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <nav className={_cs(styles.navbar, className)}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.brandName}>
                        <img
                            src="/tc-logo.png"
                            alt="TC"
                            width={48}
                            height={48}
                        />
                        <div className={styles.title}>
                            togglecorp
                        </div>
                        <Button
                            className={styles.menu}
                            name="toggle"
                            onClick={toggleNavVisibility}
                            variant="default"
                        >
                            <HiViewList />
                        </Button>
                    </div>
                    <div className={_cs(
                        styles.navItemsContainer,
                        isNavShown && styles.navShown,
                    )}
                    >
                        <Button
                            name="home"
                            onClick={handleNavClick}
                            className={styles.navItem}
                            variant="default"
                        >
                            <Link href="#">Home</Link>
                        </Button>
                        <Button
                            name="work"
                            onClick={handleNavClick}
                            className={styles.navItem}
                            variant="default"
                        >
                            <Link href="worklistpage">Work</Link>
                        </Button>
                        <Button
                            name="contact"
                            onClick={handleNavClick}
                            className={styles.navItem}
                            variant="default"
                        >
                            <Link href="#">Contact</Link>
                        </Button>
                        <Button
                            name="service"
                            onClick={handleNavClick}
                            className={styles.navItem}
                            variant="default"
                        >
                            <Link href="servicepage">Service</Link>
                        </Button>
                    </div>
                    <Button
                        name="contact"
                        variant='primary'
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
