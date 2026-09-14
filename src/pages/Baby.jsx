import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { baby } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Baby = () => {
  const bannerImage = '/baby/baby1.jpg';
  return (
    <>
      <Helmet>
        <title>Baby Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Create a beautiful celebration for your little one with charming baby decorations, balloon arrangements and thoughtfully styled party setups.'
        />

        <meta
          name='keywords'
          content='baby decoration, baby party decoration, baby welcome decoration, balloon decor, baby celebration decor, 1Click Events'
        />

        <link
          rel='canonical'
          href='https://www.1clickevents.in/baby-decoration'
        />

        <meta
          property='og:title'
          content='Baby Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Create a beautiful celebration for your little one with charming baby decorations, balloon arrangements and thoughtfully styled party setups.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/baby-decoration'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div className='mt-40'>
        <ServiceBanner
          title='Baby Shower Decoration'
          subtitle='Home › Baby Shower Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={baby} title='Baby Shower Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Baby;
