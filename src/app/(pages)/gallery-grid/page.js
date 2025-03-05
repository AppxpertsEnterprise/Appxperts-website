
import FooterThree from '@/components/FooterThree/FooterThree';
import GalleryFilter from '@/components/GalleryFilter/GalleryFilter';
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid';

import HeaderInner from '@/components/HeaderInner/HeaderInner';
import HeaderInnerCloned from '@/components/HeaderInner/HeaderInnerCloned';
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';

import React from 'react';


export const metadata =  {
    title: "Appxperts Enterprise Solution.",
   
  };
const page = () => {
    return (
        <Layout>
            <HeaderInner />
            <HeaderInnerCloned />
            <PageHeader title="Gallery Grid" subTitle="Gallery" />
            <GalleryGrid />
            <MailTwo />
            <FooterThree />
        </Layout>
    );
};

export default page;