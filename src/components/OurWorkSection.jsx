import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    img: 'birthday/birthday13.jpeg',
    title: 'Birthday Decoration',
    link: '/birthday',
  },
  {
    img: 'anniversary/anniversary6.jpeg',
    title: 'Anniversary Decoration',
    link: '/anniversary',
  },
  {
    img: '/baby/baby2.jpg',
    title: 'Baby Shower Decoration',
    link: '/baby-decoration',
  },
  {
    img: '/haldi/haldi3.jpeg',
    title: 'Haldi Decoration',
    link: '/haldi-decoration',
  },
  {
    img: '/justmarried/married1.jpg',
    title: 'Just Married Events',
    link: '/just-married-decoration',
  },
  {
    img: '/festival/ganesh1.jpg',
    title: 'Ganesh Chaturthi Events',
    link: '/festival-decoration',
  },
];

export default function OurWorkSection() {
  return (
    <section className='w-full bg-pink-700 py-10'>
      <div className='max-w-[1600px] mx-auto px-4 lg:px-15'>
        {/* <h1 className='text-center font-semibold text-3xl lg:text-5xl text-pink-600'>
          Our Services
        </h1> */}
        {/* <div className='flex items-center justify-center gap-4 pt-6 pb-14'>
          <div className='w-30 h-1 bg-purple-600'></div>
          <div className='w-6 h-2 bg-[#0B2154]'></div>
          <div className='w-30 h-1 bg-purple-600'></div>
        </div> */}

        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-6 justify-items-center'>
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className='text-center group flex flex-col items-center'
            >
              {/* ROUND IMAGE */}
              <Link to={item.link}>
                <div
                  className='
                  w-40 h-40 
                  sm:w-44 sm:h-44 
                  md:w-48 md:h-48
                  lg:w-54 lg:h-54 
                  rounded-full 
                  overflow-hidden 
                  border-2 border-pink-500 
                  shadow-lg 
                  group-hover:shadow-2xl 
                  transition-all duration-500
                  flex items-center justify-center
                '
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-full h-full object-center transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
              </Link>

              {/* TITLE */}
              <h3 className='mt-4 text-sm md:text-lg font-bold text-black tracking-wide leading-tight min-h-[48px]'>
                <Link to={item.link}>{item.title}</Link>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
