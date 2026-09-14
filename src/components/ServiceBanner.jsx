import React from 'react';

const ServiceBanner = ({ subtitle, backgroundImage }) => {
  return (
    <div
      className='relative w-full bg-center h-[380px] lg:h-[370px] flex flex-col items-start lg:px-30 justify-center text-white text-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // minHeight: "250px",
      }}
    >
      {/* Overlay for better readability */}
      <div className='absolute inset-0 bg-black/80'></div>

      {/* Text */}
      <div className='relative text mt-20 lg:top-10 z-10 px-4 md:px-0 text-pink-600'>
        <h1 className='text-3xl md:text-5xl font-bold mb-2'>Hr26 Events</h1>
        {subtitle && <p className='text-sm md:text-lg'>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ServiceBanner;
