import type { NextPage } from 'next';
import Head from 'next/head';
import Page from '../../components/Page';
import ServiceDetailsPage from '../../components/ServiceDetailsPage';

const ServicePage: NextPage = () => {
    return (
        <Page>
            <Head>
                <title>
                    Service Page
                </title>
            </Head>
            <ServiceDetailsPage />
        </Page>
    );
}
export default ServicePage;
