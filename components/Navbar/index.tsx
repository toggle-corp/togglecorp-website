import Image from 'next/image';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

function Navbar(props: Props) {
    const { className } = props;

    return (
        <nav className={_cs(styles.navbar, className)}>
            <div className={styles.container}>
                <div className={styles.brand}>
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
            </div>
        </nav>
    );
}

export default Navbar;
