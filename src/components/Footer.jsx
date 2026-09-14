import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';

export default function CelebrationFooter() {
  const services = [
    {
      name: 'Birthday Decoration',
      path: '/birthday',
    },
    {
      name: 'Anniversary Decoration',
      path: '/anniversary',
    },
    {
      name: 'Baby Decoration',
      path: '/baby-decoration',
    },
    {
      name: 'Haldi Decoration',
      path: '/haldi-decoration',
    },
    {
      name: 'Just Married Decoration',
      path: '/just-married-decoration',
    },
    {
      name: 'Festival Decoration',
      path: '/festival-decoration',
    },
  ];

  const quickLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Contact Us',
      path: '/contactus',
    },
  ];

  return (
    <footer className='relative overflow-hidden bg-gradient-to-b from-white via-[#fffafc] to-[#f6f0ff] border-t border-purple-100 text-gray-800'>

      {/* Decorative Background */}
      <div className='absolute -top-24 -left-24 w-72 h-72 rounded-full bg-pink-200/20 blur-3xl pointer-events-none' />

      <div className='absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-purple-200/25 blur-3xl pointer-events-none' />

      {/* ================= MAIN FOOTER ================= */}
      <div className='relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-16'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12'>

          {/* ================= BRAND ================= */}
          <div className='lg:col-span-4'>

            {/* Text Logo */}
            <Link
              to='/'
              aria-label='1Click Events Home'
              className='inline-flex items-center group'
            >
              <div className='relative flex items-center'>

                {/* 1 */}
                <span
                  className='text-5xl sm:text-6xl font-black tracking-tight
                  bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900
                  bg-clip-text text-transparent
                  leading-none transition-all duration-500
                  group-hover:scale-[1.03]'
                >
                  1
                </span>

                {/* Click Events */}
                <span
                  className='ml-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
                  text-pink-900 leading-none
                  transition-colors duration-300
                  group-hover:text-pink-700'
                >
                  Click
                </span>

                <span
                  className='ml-2 text-3xl sm:text-4xl md:text-5xl font-medium
                  text-pink-700 tracking-tight leading-none'
                >
                  Events
                </span>

              </div>
            </Link>

            {/* Tagline */}
            <p className='mt-5 max-w-md text-gray-800 leading-7 font-medium'>
              Creating beautiful celebrations with premium decoration,
              elegant styling, and memorable event experiences.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className='lg:col-span-2'>

            <h3 className='text-lg font-bold text-pink-700 mb-6'>
              Quick Links
            </h3>

            <ul className='space-y-4'>

              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className='group inline-flex items-center gap-1.5 text-gray-800 font-medium hover:text-pink-700 transition-colors duration-300'
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={15}
                      className='opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300'
                    />
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className='sm:col-span-2 lg:col-span-3'>

            <h3 className='text-lg font-bold text-pink-700 mb-6'>
              Our Services
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3'>

              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className='group flex items-center justify-between gap-3 text-gray-800 font-medium hover:text-pink-700 transition-all duration-300'
                >
                  <span>{service.name}</span>

                  <ArrowUpRight
                    size={15}
                    className='opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0'
                  />
                </Link>
              ))}

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className='lg:col-span-3'>

            <h3 className='text-lg font-bold text-pink-700 mb-6'>
              Contact Us
            </h3>

            <div className='space-y-5'>

              {/* Phone */}
              <a
                href='tel:+919610001265'
                className='flex items-start gap-3 group'
              >
                <div className='w-10 h-10 shrink-0 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100'>
                  <Phone
                    size={18}
                    className='text-pink-700'
                  />
                </div>

                <div>
                  <p className='text-xs uppercase tracking-wider text-gray-900 font-semibold mb-1'>
                    Call Us
                  </p>

                  <p className='text-gray-800 font-semibold group-hover:text-pink-700 transition-colors'>
                    +91 9549820028
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className='flex items-start gap-3'>

                <div className='w-10 h-10 shrink-0 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100'>
                  <MapPin
                    size={19}
                    className='text-pink-700'
                  />
                </div>

                <div>
                  <p className='text-xs uppercase tracking-wider text-gray-900 font-semibold mb-1'>
                    Visit Us
                  </p>

                  <p className='text-gray-800 font-medium leading-6'>
                   House No. - 832, Gali No. - 11, Jyoti Park Sector 7, Gurgaon
                  </p>
                </div>

              </div>

              {/* ================= SOCIAL MEDIA ================= */}
              <div className='pt-2'>

                <p className='text-xs uppercase tracking-wider text-gray-900 font-semibold mb-3'>
                  Follow Us
                </p>

                <div className='flex items-center gap-3'>

                  {/* WhatsApp */}
                  <a
                    href='https://wa.me/919610001265'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='WhatsApp'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-600 text-purple-800 shadow-sm hover:bg-purple-800 hover:text-white hover:-translate-y-1 transition-all duration-300'
                  >
                    <FaWhatsapp />
                  </a>

                  {/* Instagram */}
                  <a
                    href='#'
                    aria-label='Instagram'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-600 text-purple-800 shadow-sm hover:bg-purple-800 hover:text-white hover:-translate-y-1 transition-all duration-300'
                  >
                    <FaInstagram />
                  </a>

                  {/* Facebook */}
                  <a
                    href='#'
                    aria-label='Facebook'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-600 text-purple-800 shadow-sm hover:bg-purple-800 hover:text-white hover:-translate-y-1 transition-all duration-300'
                  >
                    <FaFacebookF />
                  </a>

                  {/* Pinterest */}
                  <a
                    href='#'
                    aria-label='Pinterest'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-600 text-purple-800 shadow-sm hover:bg-purple-800 hover:text-white hover:-translate-y-1 transition-all duration-300'
                  >
                    <FaPinterestP />
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className='relative border-t border-purple-100'>

        <div className='max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5'>

          <div className='flex  justify-center items-center gap-3 text-center md:text-left'>

            <p className='text-gray-800 text-xs sm:text-sm'>
              © 2026{' '}
              <span className='font-semibold text-purple-800'>
                1Click Events
              </span>
              . All Rights Reserved.
            </p>

          </div>
        </div>
      </div>

    </footer>
  );
}