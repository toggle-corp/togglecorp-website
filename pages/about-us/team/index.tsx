import React from 'react';

import Page from 'components/general/Page';
import BannerWithImage from 'components/general/BannerWithImage';
import Section from 'components/general/Section';

import organizationLogo from 'resources/organization.webp';

function Team() {
    return (
        <Page
            pageTitle="Our Team"
            banner={(
                <BannerWithImage
                    title="Our Team"
                    description="Meet our passionate team of creators and problem-solvers."
                    mode="light"
                    imageUrl={organizationLogo}
                />
            )}
        >
            <Section
                title="Development"
            >
                Development team
            </Section>
        </Page>
    );
}

export default Team;
