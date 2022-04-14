import { _cs } from '@togglecorp/fujs';

import Navbar from '../Navbar';
import Footer from '../Footer';

import styles from './styles.module.css'

interface Props {
    className?: string;
    children: React.ReactNode;
}

function Page(props: Props) {
    const {
        className,
        children,
    } = props;

    return (
        <div className={_cs(styles.page, className)}>
            <Navbar className={styles.navbar} />
            <div className={styles.container}>
                <main className={styles.mainContent}>
                    {children}
                </main>
            </div>
            <Footer className={styles.footer} />
        </div>
    );
}

export default Page;
