import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function ServiceTheme({ title, services }) {
  return (
    <section className='relative bg-pink-700 py-6 pt-8 overflow-hidden'>
      
      {/* 🎉 Section Heading */}
      <div className='relative text-center mb-6'>
        <h2 className='text-2xl md:text-5xl font-extrabold text-black drop-shadow-md'>
          {title}
        </h2>

        <div className='flex items-center justify-center gap-4 py-6'>
          <div className='w-24 md:w-40 h-1 bg-orange-600'></div>
          <div className='w-6 h-2 bg-[#0B2154]'></div>
          <div className='w-24 md:w-40 h-1 bg-orange-600'></div>
        </div>

        <p className='text-gray-700 mt-3 text-sm md:text-base max-w-3xl mx-auto px-4'>
          {services.desc}
        </p>
      </div>

      {/* 🎁 Card Grid */}
      <div className='relative grid gap-4 px-4 lg:px-15 
                      grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'>
        {services.map((service) => (
          <div
            key={service.id}
            className='relative bg-white rounded-xl overflow-hidden bg-purple-90 backdrop-blur-md shadow-lg border border-white hover:border-pink-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group'
          >
            {/* 🖼️ Image */}
            <div className='overflow-hidden relative'>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-44 md:h-80 lg:h-90 object-center transform group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
            </div>

            {/* 📋 Content */}
            <div className='px-6 py-4 flex flex-col justify-between'>
              <div>
                <h3 className='text-[14px] md:text-xl font-bold text-center text-black group-hover:text-pink-700 transition'>
                  {service.title}
                </h3>
              </div>

              {/* 🔘 Button */}
             <div className='mt-1 w-full'>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                  <p className='md:font-semibold text-[10px] md:text-lg py-2'>Contact Us for Best Price</p>
                  <a
                    href={`https://wa.me/919549820028?text=${encodeURIComponent(
                      `Hello! I'm interested in ${service.title} Kindly share more details.`,
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center h-8 w-30 md:w-56 md:h-14 text-center bg-pink-600 text-base text-white font-semibold rounded-full hover:scale-105 transition duration-300'
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            {/* ✨ Glow Effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl pointer-events-none bg-gradient-to-br from-[#ff9a8b]/20 to-[#ffd36f]/20 blur-xl'></div>
          </div>
        ))}
      </div>
    </section>
  );
}