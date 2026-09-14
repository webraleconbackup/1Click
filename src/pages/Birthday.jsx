import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { birthday } from '../data';
// import Enquiry from '../components/Enquiry';
import ServiceBanner from '../components/ServiceBanner';
// import ServiceBanner from '../components/ServiceBanner'
import { Helmet } from 'react-helmet';

const Birthday = () => {
  const bannerImage = '/birthday/birthday2.jpeg';
  return (
    <>
      <Helmet>
        <title>Birthday Decoration Services | 1Click Events</title>

        <meta
          name='description'
          content='Make birthdays memorable with creative balloon setups, themed backdrops and elegant party decorations by 1Click Events.'
        />

        <meta
          name='keywords'
          content='birthday decoration, birthday party decoration, balloon decoration, birthday decor, party decoration, 1Click Events'
        />

        <link rel='canonical' href='https://www.1clickevents.in/birthday' />

        <meta
          property='og:title'
          content='Birthday Decoration Services | 1Click Events'
        />
        <meta
          property='og:description'
          content='Make birthdays memorable with creative balloon setups, themed backdrops and elegant party decorations by 1Click Events.'
        />
        <meta
          property='og:url'
          content='https://www.1clickevents.in/birthday'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      <div className='mt-40'>
        <ServiceBanner
          title='Birthday Decoration'
          subtitle='Home › Birthday Decoration'
          backgroundImage={bannerImage}
        />
        <ServiceTheme services={birthday} title='Birthday Decoration' />
        {/* <Enquiry /> */}
      </div>
    </>
  );
};

export default Birthday;
