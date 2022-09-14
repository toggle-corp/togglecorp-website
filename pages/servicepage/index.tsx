import type { NextPage } from 'next';
import Page from '../../components/Page';
import ServiceDetailsPage from '../../components/ServiceDetailsPage';

import styles from './styles.module.css';

const ServicePage: NextPage = () => {
    return (
        <Page>
            <ServiceDetailsPage />
        </Page>
    );
}
export default ServicePage;
