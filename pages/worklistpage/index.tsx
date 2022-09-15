import type { NextPage } from 'next';
import Page from '../../components/Page';
import WorkDetailsListPage from '../../components/WorkDetailsListPage';

import styles from './styles.module.css';

const WorkListPage: NextPage = () => {
    return (
        <Page>
            <WorkDetailsListPage />
        </Page>
    );
}
export default WorkListPage;