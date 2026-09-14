import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { married } from '../data';
import ServiceBanner from '../components/ServiceBanner';
// import Enquiry from '../components/Enquiry';
import { Helmet } from 'react-helmet';

const Justmarried = () => {
  const bannerImage = '/justmarried/married1.jpg';
  return (
    <>
      <Helmet>
        <title>Just Married Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Celebrate your new beginning with beautiful Just Married decorations, romantic backdrops, balloons and personalized celebration setups.'
        />

        <meta
          name='keywords'
          content='just married decoration, just married decor, newly married decoration, wedding room decoration, romantic decor, 1Click Events'
        />

        <link
          rel='canonical'
          href='https://www.1clickevents.in/just-married-decoration'
        />

        <meta
          property='og:title'
          content='Just Married Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Celebrate your new beginning with beautiful Just Married decorations, romantic backdrops, balloons and personalized celebration setups.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/just-married-decoration'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div>
        <ServiceBanner
          title='Anniversary Decoration'
          subtitle='Home › Just Married Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={married} title='Just Married Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Justmarried;
