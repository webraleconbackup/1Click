import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    type: 'video',
    src: '/testimonial/testi1.mp4',
    text: 'Amazing experience! Everything was beautifully arranged.',
    name: 'Mrs Parul Puri Agrawl, Gurgaon',
  },
  {
    id: 2,
    type: 'video',
    src: '/testimonial/testi2.mp4',
    text: 'Amazing experience! Everything was beautifully arranged.',
    name: 'Ms Archita Agarwal',
  },
  {
    id: 3,
    type: 'video1',
    src: '/testimonial/testi3.mp4',
    text: 'The attention to detail was impressive.',
    name: 'Ms Jyotsna Bhutani, Delhi',
  },
  {
    id: 4,
    type: 'video1',
    src: '/testimonial/testi4.mp4',
    text: 'The team was very professional and responsive.',
    name: 'Gurpreet Kaur, Delhi',
  },
  {
    id: 5,
    type: 'image',
    src: '/testimonial/testi5.jpeg',
    text: 'Very professional team. Loved it!',
    name: 'Simrat Bhui',
  },
];

export default function PremiumTestimonials() {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [active]);

  const current = testimonials[active];

  return (
    <section className='bg-black py-4 px-4 lg:px-20'>
      <h2 className='text-[#D4A017] text-3xl lg:text-5xl font-serif tracking-[6px] mb-8'>
        Client Reviews
      </h2>

      <div className='max-w-8xl mx-auto grid lg:grid-cols-4 gap-10 items-start'>
        
        {/* MAIN DISPLAY */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='relative lg:col-span-3'
        >
          {current.type === 'image' ? (
            <img
              src={current.src}
              alt=""
              className='w-full h-[400px] lg:h-[520px] object-center rounded-2xl border-2 border-yellow-600'
            />
          ) : (
            <video
              ref={videoRef}
              src={current.src}
              controls
              className={`w-full h-[300px] md:h-[420px] lg:h-[520px] rounded-2xl border-2 border-yellow-600 ${
                current.type === 'video1'
                  ? 'object-center'
                  : 'object-cover'
              }`}
            />
          )}

          <div className='mt-2'>
            <p className='text-[#f5e7c3] text-lg lg:text-xl leading-relaxed'>
              {current.text}
            </p>
            <p className='text-yellow-500 text-xl lg:text-2xl font-serif'>
              {current.name}
            </p>
          </div>
        </motion.div>

        {/* THUMBNAILS */}
        <div
          className='lg:col-span-1 flex lg:flex-col gap-4 
          overflow-x-auto lg:overflow-y-auto 
          lg:max-h-[520px] p-2'
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActive(index)}
              className={`relative cursor-pointer rounded-xl overflow-hidden 
              min-w-[120px] h-[120px] lg:min-w-0
              transition-all duration-300
              ${
                active === index
                  ? 'ring-2 ring-yellow-500 scale-105'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt=""
                  className='w-full h-full object-cover'
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className={`w-full h-full ${
                      item.type === 'video1'
                        ? 'object-center'
                        : 'object-cover'
                    }`}
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
                    <FaPlay className='text-white text-xl' />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
