import type { NextPage } from 'next'
import Page from '../../components/Page';

import styles from './styles.module.css';

const WorkPage: NextPage = () => {
    return (
        <Page>
            <div className={styles.analysisSection}>
                <div>All Projects</div>
                <div className={styles.description}>Refugee Situational Analysis</div>
                <div className={styles.links}>
                    <div>
                        <div className={styles.fakeLink}>Project Duration</div>
                        <div className={styles.fakeDescription}>January 2020 - Ongoing</div>
                    </div>
                    <div>
                        <div className={styles.fakeLink}>Client</div>
                        <div className={styles.fakeDescription}>International Federation of Red Cross (IFRC)
                            in collaboration with Data Friendly Space</div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
export default WorkPage;
