import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { anniversary } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Anniversary = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
        <title>Anniversary Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Celebrate your special day with romantic anniversary decorations, balloon arrangements, elegant backdrops and personalized event styling.'
        />

        <meta
          name='keywords'
          content='anniversary decoration, anniversary party decor, romantic decoration, anniversary balloon decoration, couple decoration, 1Click Events'
        />

        <link rel='canonical' href='https://www.1clickevents.in/anniversary' />

        <meta
          property='og:title'
          content='Anniversary Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Celebrate your special day with romantic anniversary decorations, balloon arrangements, elegant backdrops and personalized event styling.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/anniversary'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div className='mt-40'>
        <ServiceBanner
          title='Anniversary Decoration'
          subtitle='Home › Anniversary Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={anniversary} title='Anniversary Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Anniversary;
