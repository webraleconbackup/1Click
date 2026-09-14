import React from 'react';
import ServiceTheme from '../components/ServiceTheme';
import { haldi } from '../data';
import ServiceBanner from '../components/ServiceBanner';

const BrideToBe = () => {
  const bannerImage = '/anniversary/anniversary1.jpeg';
  return (
    <div>
      <ServiceBanner
        title='Anniversary Decoration'
        subtitle='Home › Bride To Be Decoration'
        backgroundImage={bannerImage}
      />
      <ServiceTheme services={haldi} title='Bride To Be Decoration' />
    </div>
  );
};

export default BrideToBe;
