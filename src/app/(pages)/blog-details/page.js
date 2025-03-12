import BlogDetails from '@/components/BlogDetails/BlogDetails';
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';

export const metadata = {
    title: "Appxperts Enterprise solution.",
   
};

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />

            <PageHeader 
    title={<span style={{ fontSize: "28px", fontWeight: "700", color: "#ffffff", textAlign: "center" }}>
        Smart Solutions, Stronger Businesses – Powered by Appxperts.
    </span>}
/>


            <BlogDetails />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;