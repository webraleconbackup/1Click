import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import Marquees from './Marquees';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workList = [
    { label: 'Birthday Decoration', link: '/birthday' },
    { label: 'Anniversary Decoration', link: '/anniversary' },
    { label: 'Baby Shower Decoration', link: '/baby-decoration' },
    { label: 'Haldi Decoration', link: '/haldi-decoration' },
    { label: 'Just Married Decoration', link: '/just-married-decoration' },
    { label: 'Festival Decoration', link: '/festival-decoration' },
  ];

  const activeClass = ({ isActive }) =>
    `transition duration-300 hover:text-pink-600 ${
      isActive ? 'text-pink-600' : 'text-gray-800'
    }`;

  return (
    <header className='fixed top-0 left-0 w-full z-50 shadow-sm'>
      {/* TOP BAR */}
      <Marquees />
      <div
        className={`w-full bg-pink-700 text-white transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
      >
        {/* <div className='max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-16 lg:px-15'>
          
          <div className='flex items-center gap-4 text-xs sm:text-sm md:text-base'>
            <a href='tel:+919549820028' className='flex items-center gap-2'>
              <IoCallSharp />
              +91 9549820028
            </a>

            <div className='flex items-center gap-2'>
              <FaLocationDot className='text-red-300' />
              Gurgaon
            </div>
          </div>

          <Link
            to='https://wa.me/9549820028'
            target='_blank'
            className='bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300'
          >
            <FaWhatsapp className='text-white text-lg' />
          </Link>
        </div> */}
      </div>

      {/* MAIN NAVBAR */}
      <div className='w-full bg-pink-700 border-b border-gray-200 py-3'>
        <div className='max-w-[1400px] bg-white mx-auto flex items-center justify-between px-4 lg:px-8 py-3'>
          {/* LOGO */}
          <Link to='/' className='group flex items-center'>
            <div className='flex items-end'>
              {/* Stylish "1" */}
              <span
                className='text-4xl md:text-5xl font-bold leading-none
      text-pink-700 -mr-1'
                style={{
                  fontFamily: "'Cinzel', serif",
                }}
              >
                1
              </span>

              {/* Click Text */}
              <span
                className='text-2xl md:text-3xl font-semibold tracking-wide
      bg-gradient-to-r from-pink-700 via-rose-500 to-pink-700
      bg-clip-text text-transparent
      transition-all duration-500
      group-hover:tracking-wider'
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Click
              </span>

              {/* Events */}
              <span
                className='ml-2 text-sm md:text-base font-semibold
      tracking-[0.35em] uppercase text-pink-700 pb-1'
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                EVENTS
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className='hidden lg:flex tracking-wide items-center gap-10 xl:gap-14 text-[15px] xl:text-[24px]'>
            <NavLink to='/' className={activeClass}>
              Home
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div className='relative group cursor-pointer'>
              <span className='flex items-center gap-1 text-gray-800 hover:text-pink-600 transition'>
                Decorations <ChevronDown size={18} className='mt-2' />
              </span>

              <div className='absolute left-0 top-8 hidden group-hover:block bg-zinc-100 shadow-lg rounded-xl w-80 py-3'>
                {workList.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      `block px-5 py-2 text-[20px] tracking-wide hover:bg-pink-50 transition ${
                        isActive ? 'text-pink-600' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to='/gallery' className={activeClass}>
              Gallery
            </NavLink>

            <NavLink to='/about' className={activeClass}>
              About
            </NavLink>

            <NavLink to='/contactus' className={activeClass}>
              Get-Quote
            </NavLink>
          </nav>

          {/* RIGHT BUTTON */}
          <div className='hidden lg:block'>
            <Link
              to='https://wa.me/9549820028'
              target='_blank'
              className='bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300 flex items-center gap-2'
            >
              <FaWhatsapp className='text-xl' />
              Instant Reply
            </Link>
          </div>

          {/* MOBILE ICON */}
          <button onClick={toggleMenu} className='lg:hidden text-gray-800'>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className='lg:hidden bg-white border-t shadow-md tracking-wide text-gray-800'>
          <nav className='flex flex-col px-6 py-6 space-y-5 text-lg font-medium'>
            <NavLink to='/' onClick={toggleMenu} className={activeClass}>
              Home
            </NavLink>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setOpenWork(!openWork)}
                className='flex items-center justify-between w-full'
              >
                Decorations
                <ChevronDown
                  className={`transition ${openWork ? 'rotate-180' : ''}`}
                />
              </button>

              {openWork && (
                <div className='pl-4 mt-3 space-y-2 text-[17px] text-gray-800'>
                  {workList.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block ${isActive ? 'text-pink-600 font-semibold' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to='/gallery' onClick={toggleMenu} className={activeClass}>
              Gallery
            </NavLink>

            <NavLink to='/about' onClick={toggleMenu} className={activeClass}>
              About
            </NavLink>

            <NavLink
              to='/contactus'
              onClick={toggleMenu}
              className={activeClass}
            >
              Get-Quote
            </NavLink>

            <div className='flex items-center gap-6 pt-4'>
              <FaInstagram className='text-2xl hover:text-pink-600' />
              <FaWhatsapp className='text-2xl hover:text-pink-600' />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
