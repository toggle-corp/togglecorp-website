import Image from 'next/image';
import { _cs } from '@togglecorp/fujs';
import { Button } from '../Button';

import styles from './styles.module.css';

interface NavProps {
    className?: string;
}

function Navbar(props: NavProps) {
    const { className } = props;

    return (
        <nav className={_cs(styles.navbar, className)}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.brandName}>
                        <Image
                            src="/tc-logo.png"
                            alt="TC"
                            width={48}
                            height={48}
                        />
                        <div className={styles.title}>
                            togglecorp
                        </div>
                    </div>
                    <ul>
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="worklistpage">Work</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <Button
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
