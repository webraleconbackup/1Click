import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { haldi } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
import { Helmet } from 'react-helmet';

const Haldi = () => {
  const bannerImage = '/gallery/haldi1.jpg';
  return (
    <>
      <Helmet>
        <title>Haldi Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Add color and elegance to your Haldi celebration with vibrant floral details, stylish backdrops, balloons and festive decoration ideas.'
        />

        <meta
          name='keywords'
          content='haldi decoration, haldi ceremony decoration, haldi decor, haldi backdrop, wedding decoration, 1Click Events'
        />

        <link
          rel='canonical'
          href='https://www.1clickevents.in/haldi-decoration'
        />

        <meta
          property='og:title'
          content='Haldi Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Add color and elegance to your Haldi celebration with vibrant floral details, stylish backdrops, balloons and festive decoration ideas.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/haldi-decoration'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div>
        <ServiceBanner
          title='Haldi Decoration'
          subtitle='Home › Haldi Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={haldi} title='Haldi Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Haldi;
