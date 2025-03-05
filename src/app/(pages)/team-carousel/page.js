
import FooterThree from '@/components/FooterThree/FooterThree';
import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import TeamOne from '@/components/TeamOne/TeamOne';
import React from 'react';

export const metadata = {
    title: "Appxperts Enterprise Solution.",
   
  };
  

const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Team Carousel" subTitle="Team" />
            <TeamOne titleTwo="two" dots={true} />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;