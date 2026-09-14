import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    first: '',
    last: '',
    phoneCode: '+91',
    phone: '',
    message: '',
  });

  const slides = [
    { image: '/banner/banner11.jpeg' },
    {
      image: '/banner/banner22.jpeg',
      // line1: "Luxury Anniversary Celebrations",
      // line2: "Making Your Celebrations Truly Memorable",
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Popup Form Delay
  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '919549820028';

    const text = `New Inquiry:
First Name: ${formData.first}
Last Name: ${formData.last}
Phone: ${formData.phoneCode} ${formData.phone}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section className='relative bg-white mt-28 md:mt-34 flex items-center justify-center overflow-hidden'>
      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='relative w-full overflow-hidden shadow-xl'
      >
        <div className='relative w-full h-[36vh] md:h-[85vh]'>
          {/* Slide Images */}
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide.image}
              alt='banner'
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{
                scale: index === current ? 1 : 1,
                opacity: index === current ? 1 : 0,
              }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className='absolute inset-0 w-full h-full object-center lg:rounded-2xl'
            />
          ))}

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black/30'></div>

          {/* Text */}
          <div className='absolute inset-0 flex flex-col justify-center text-center px-4'>
            <motion.h1
              key={slides[current].line1}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg tracking-wide'
            >
              {slides[current].line1}
            </motion.h1>

            <motion.p
              key={slides[current].line2}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
              className='text-[#d0ad55] text-lg md:text-2xl lg:text-3xl font-medium mt-3 overflow-hidden whitespace-nowrap border-r-2 border-white pr-2'
              style={{ fontFamily: 'monospace' }}
            >
              {slides[current].line2}
            </motion.p>

            {/* Button */}
            {/* <div className="flex justify-center mt-5">
              <Link to="/gallery">
                <button className="text-black font-semibold bg-[#d0ad55] hover:bg-pink-500 rounded-full transition-all duration-700 py-3 px-8">
                  Read More
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Dots */}
        <div className='absolute bottom-4 w-full flex justify-center gap-3'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* POPUP FORM */}
      {/* <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className='fixed inset-0 flex items-center justify-start z-50 px-4'
          >
            <div className='relative bg-white/95 backdrop-blur-md top-20 rounded-2xl p-8 w-full max-w-[420px] mx-auto shadow-lg border border-white/40'>
              <button
                onClick={() => setShowForm(false)}
                className='absolute top-4 right-4 text-gray-700 hover:text-black'
              >
                <X size={22} />
              </button>

              <h2 className='text-2xl font-semibold text-center mb-6'>
                Let's Start Planning
              </h2>

              <form className='space-y-5' onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type='text'
                    placeholder='First Name'
                    value={formData.first}
                    onChange={(e) =>
                      setFormData({ ...formData, first: e.target.value })
                    }
                    className='border-b border-gray-400 p-2 focus:outline-none'
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    value={formData.last}
                    onChange={(e) =>
                      setFormData({ ...formData, last: e.target.value })
                    }
                    className='border-b border-gray-400 p-2 focus:outline-none'
                  />
                </div>

                <div className='grid grid-cols-3 gap-4'>
                  <select
                    value={formData.phoneCode}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneCode: e.target.value })
                    }
                    className='border-b border-gray-400 p-2 focus:outline-none'
                  >
                    <option>+91</option>
                    <option>+62</option>
                    <option>+44</option>
                    <option>+58</option>
                    <option>+61</option>
                  </select>

                  <input
                    type='tel'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className='col-span-2 border-b border-gray-400 p-2 focus:outline-none'
                  />
                </div>

                <textarea
                  placeholder='Tell us about your requirements'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows='3'
                  className='w-full border-b border-gray-400 p-2 focus:outline-none'
                ></textarea>

                <button
                  type='submit'
                  className='w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition'
                >
                  Submit on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default Hero;
