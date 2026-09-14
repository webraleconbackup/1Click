import React from 'react';
import { motion } from 'framer-motion';
import Enquiry from '../components/Enquiry';
import ServiceBanner from './ServiceBanner';

export default function SimpleGallery() {
  const bannerImage = '/banner/banner1.jpg';

  const gallery = [
    { id: 1, src: 'home-img/event2.jpg', title: 'Birthday Luxury Decor' },
    { id: 2, src: '/gallery/haldi2.jpg', title: 'Haldi Celebration' },
    { id: 3, src: '/baby/baby1.jpg', title: 'Baby Shower' },
    { id: 4, src: '/gallery/anniversary.jpg', title: 'Anniversary Decoration' },
     { id: 5, src: '/baby/baby2.jpg', title: 'Baby Shower' },
    { id: 6, src: '/justmarried/married1.jpg', title: 'Just Married Decoration' },
    { id: 7, src: '/anniversary/anniversary3.jpeg', title: 'Anniversary Decoration' },
    { id: 8, src: '/gallery/baby1.jpg', title: 'Baby Shower Decoration' },
    { id: 9, src: '/haldi/haldi3.jpg', title: 'Haldi Decoration' },
    { id: 10, src: '/birthday/birthday1.jpeg', title: 'Birthday Decoration' },
    { id: 11, src: '/anniversary/anniversary2.jpeg', title: 'Anniversary Decoration' },
    { id: 12, src: '/birthday/birthday2.jpeg', title: 'Birthday Decoration' },
     { id: 13, src: '/anniversary/anniversary1.jpeg', title: 'Anniversary Decoration' },
      { id: 14, src: '/baby/baby3.jpg', title: 'Baby Shower' },
    { id: 15, src: '/birthday/birthday3.jpeg', title: 'Birthday Decoration' },
    { id: 16, src: '/birthday/birthday4.jpeg', title: 'Birthday Decoration' },
  ];

  return (
    <>
      <div className="mt-40">
        <ServiceBanner
          title="Gallery"
          subtitle="Home › Gallery"
          backgroundImage={bannerImage}
        />

        <section className="bg-pink-50 py-16 px-4 lg:px-20">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-pink-600 font-bold">
              Event Gallery
            </h2>
            <p className="mt-2 text-purple-600 text-lg">
              Premium curated collection from our most loved events.
            </p>
          </div>

          {/* Trending Simple Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-md bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold text-center px-3">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Enquiry />
      </div>
    </>
  );
}