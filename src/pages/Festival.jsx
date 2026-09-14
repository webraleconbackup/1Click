import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { festival } from '../data';
import ServiceBanner from '../components/ServiceBanner';
// import Enquiry from '../components/Enquiry';
import { Helmet } from 'react-helmet';

const Festival = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <>
      <Helmet>
        <title>Festival Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Bring your celebrations to life with festive balloon arrangements, themed backdrops and creative decorations designed for memorable occasions.'
        />

        <meta
          name='keywords'
          content='festival decoration, festive decoration, festival party decor, celebration decoration, balloon decoration, 1Click Events'
        />

        <link
          rel='canonical'
          href='https://www.1clickevents.in/festival-decoration'
        />

        <meta
          property='og:title'
          content='Festival Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Bring your celebrations to life with festive balloon arrangements, themed backdrops and creative decorations designed for memorable occasions.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/festival-decoration'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div>
        <ServiceBanner
          title='Guruji Satsang'
          subtitle='Home › Guruji Satsang'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={festival} title='Festival Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Festival;
