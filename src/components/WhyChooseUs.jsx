import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  return (
    <section className='bg-black text-white py-10 lg:py-20 px-4 lg:px-20'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className='text-sm uppercase tracking-widest text-[#D4A017] mb-3'>
            Welcome to Meet & Greet Affairs
          </p>

          <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#D4A017] font-bold leading-tight mb-6'>
            Best Event Management <br />
            <span className='text-white'>Company in Gurgaon</span>
          </h1>

          <p className='text-gray-300 text-xl leading-relaxed mb-6'>
            <span className='text-[#D4A017]'>Meet & Greet Affairs</span> is a
            boutique event planning studio dedicated to creating premium,
            meaningful, and beautifully executed celebrations. We specialise in
            social, corporate, and luxury events — designed with elegance,
            structure, and heartfelt detail.
          </p>

          <p className='text-gray-300 text-xl leading-relaxed mb-8'>
            From intimate family gatherings to grand corporate experiences, our
            goal is to make every event feel personal, refined, and effortlessly
            memorable.
          </p>

          <a
            href='tel: 76656 74105'
            className='inline-flex items-center justify-center gap-2 bg-[#D4A017] text-black w-full lg:w-auto md:px-20 py-3 rounded-lg font-bold hover:bg-zinc-300 transition'
          >
            BOOK NOW
          </a>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className='relative'>
          {/* Background frame */}
          <div className='absolute -top-6 -right-6 w-full h-full bg-pink-500 rounded-lg hidden lg:block'></div>

          <img
            src='/gallery/birthday.jpg' // replace with your image path
            alt='Event Decoration'
            className='relative z-10 rounded-lg shadow-2xl object-cover w-full h-[280px] sm:h-[360px] lg:h-[420px] transition-all duration-700 hover:scale-105'
          />
        </div>
      </div>
    </section>
  );
}
