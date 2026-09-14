import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Chat = () => {
  const phoneNumber = '9549820028';
  const message = 'I am interested in your service';
  return (
    <>
      <div className='hidden md:block fixed bottom-0 md:bottom-20 md:right-2 z-50'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <a
            href='tel:+919549820028'
            className='bg-purple-600 p-4 flex items-center justify-center rounded-xl'
          >
            <span>
              <FaPhone className='text-white text-2xl' />
            </span>
          </a>
          <a
            className='bg-purple-600 p-3 rounded-xl flex items-center justify-center'
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message,
            )}`}
          >
            <span>
              <FaWhatsapp className='text-white text-3xl mt-[5px]' />
            </span>
          </a>
        </div>
      </div>

      {/* Mobile WhatsApp & Call Now */}
      <div
        className='md:hidden flex justify-around fixed bottom-0 z-50 
bg-white/10 backdrop-blur-md w-full py-3 border-t border-white/20'
      >
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          className='bg-purple-600 p-2 rounded-full flex items-center justify-center text-sm font-medium'
        >
          <FaWhatsapp className='text-white text-2xl' />
        </a>

        <a
          href='tel:+919549820028'
          className='p-2 bg-purple-600 rounded-full flex items-center justify-center text-sm font-medium'
        >
          <FaPhone className='text-white text-2xl' />
        </a>
      </div>
    </>
  );
};

export default Chat;
