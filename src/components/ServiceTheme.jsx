import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function ServiceTheme({ title, desc, services }) {
  return (
    <section className='relative bg-pink-50 py-6 overflow-hidden'>
      {/* 🎊 Soft Confetti Pattern Background */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/confetti.png')] bg-repeat bg-[length:180px_180px] pointer-events-none"></div> */}

      {/* 🎉 Section Heading */}
      <div className='relative text-center mb-14'>
        <h2 className='text-2xl md:text-5xl font-extrabold text-pink-600 drop-shadow-md'>
          {title}
        </h2>
        <div className='flex items-center justify-center gap-4 py-6'>
          <div className='w-40 h-1 bg-purple-600'></div>
          <div className='w-6 h-2 bg-[#0B2154]'></div>
          <div className='w-40 h-1 bg-purple-600'></div>
        </div>
        <p className='text-gray-700 mt-3 text-sm md:text-base max-w-3xl mx-auto'>
          {services.desc}
        </p>
      </div>

      {/* 🎁 Card Grid */}
      <div className='relative grid gap-4 md:gap-4 px-4 md:px-20 grid-cols-2 lg:grid-cols-4 md:grid-cols-2'>
        {services.map((service, index) => (
          <div
            key={index}
            className='relative rounded-3xl overflow-hidden bg-purple-100 backdrop-blur-md shadow-lg border border-pink-100 hover:border-yellow-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group'
          >
            {/* 🖼️ Image */}
            <div className='overflow-hidden rounded-t-3xl relative'>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-50 md:h-90 object-cover transform group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
            </div>

            {/* 📋 Content */}
            <div className='p-6 flex flex-col justify-between'>
              <div>
                <h3 className='text-[14px] md:text-xl font-bold text-center text-black mb-2 group-hover:text-pink-600 transition'>
                  {service.title}
                </h3>
              </div>

              {/* 🔘 Buttons */}
              <div className='mt-1 w-full'>
                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <p className='md:font-semibold text-[10px] md:text-lg'>Contact Us for Best Price</p>
                  <a
                    href={`https://wa.me/919549820028?text=${encodeURIComponent(
                      `Hello! I'm interested in ${service.title} Kindly share more details.`,
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center h-8 w-30 md:w-56 md:h-14 text-center bg-pink-600 text-sm md:text-base text-white md:font-semibold rounded-full hover:scale-105 transition duration-300'
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            {/* ✨ Glow Border Effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl pointer-events-none bg-gradient-to-br from-[#ff9a8b]/20 to-[#ffd36f]/20 blur-xl'></div>
          </div>
        ))}
      </div>
    </section>
  );
}
