import type { NextPage } from 'next';
import Head from 'next/head';
import Page from '../../components/Page';
import WorkDetailsListPage from '../../components/WorkDetailsListPage';

const WorkListPage: NextPage = () => {
    return (
        <Page>
            <Head>
                <title>
                    Work List Page
                </title>
            </Head>
            <WorkDetailsListPage />
        </Page>
    );
}
export default WorkListPage;