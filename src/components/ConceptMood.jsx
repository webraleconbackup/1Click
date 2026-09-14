import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Palette,
  CalendarCheck,
  HeartHandshake,
} from 'lucide-react';

const ConceptMood = () => {
  const features = [
    {
      icon: Palette,
      title: 'Personalized Styling',
      text: 'Decoration concepts are planned around your occasion, space, and preferred style.',
    },
    {
      icon: CalendarCheck,
      title: 'Organized Setup',
      text: 'We focus on proper coordination, timely setup, and attention to decoration details.',
    },
    {
      icon: Sparkles,
      title: 'Theme-Based Decor',
      text: 'Choose decoration styles suitable for birthdays, anniversaries, baby events, weddings, and more.',
    },
    {
      icon: HeartHandshake,
      title: 'Helpful Coordination',
      text: 'Our team helps you plan the decoration and understand the setup requirements before your event.',
    },
  ];

  return (
    <section
      className="
        relative flex min-h-full w-full items-center
        overflow-hidden bg-pink-200
        py-14 sm:py-16 lg:py-12
      "
      aria-labelledby="why-choose-us-heading"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <div
          className="
            absolute -left-32 top-10
            h-72 w-72 rounded-full
            bg-pink-200/40
            blur-[120px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute -right-32 bottom-10
            h-80 w-80 rounded-full
            bg-rose-200/40
            blur-[120px]
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[500px] w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-100/50
            blur-[100px]
          "
        />

        {/* Soft Decorative Circle */}
        <div
          className="
            absolute -right-20 top-1/3
            h-40 w-40 rounded-full
            border border-pink-100/70
          "
        />
      </div>

      {/* ================= CONTAINER ================= */}
      <div
        className="
          relative mx-auto w-full max-w-[1450px]
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
        "
      >
        <div
          className="
            grid items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="w-full"
          >
            {/* Small Label */}
            <div
              className="
                mb-4 inline-flex items-center gap-2
                rounded-full
                border border-pink-200
                bg-pink-50
                px-4 py-2
                text-xs font-semibold
                tracking-wide text-pink-700
                shadow-sm
                sm:text-sm
              "
            >
              <Sparkles size={15} />
              Our Approach
            </div>

            {/* Heading */}
            <h2
              id="why-choose-us-heading"
              className="
                max-w-2xl
                font-[Playfair_Display]
                text-3xl font-medium
                leading-[1.15]
                tracking-wide text-gray-900
                sm:text-4xl
                md:text-5xl
                xl:text-6xl
              "
            >
              Thoughtful Details for
              <span className="mt-1 block text-pink-700">
                Beautiful Celebrations
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5 max-w-2xl
                text-sm leading-7
                text-gray-800
                sm:mt-6 sm:text-base sm:leading-8
                lg:text-lg
              "
            >
              At{' '}
              <span className="font-semibold text-pink-700">
                1Click Events
              </span>
              , we provide decoration setups for birthdays, anniversaries, baby
              celebrations, weddings, and other special occasions. Each setup is
              planned according to the occasion, available space, and preferred
              decoration style.
            </p>

            <p
              className="
                mt-3 max-w-2xl
                text-sm leading-7
                text-gray-800
                sm:text-base sm:leading-7
                lg:text-lg
              "
            >
              From selecting a suitable theme to arranging the final setup, our
              focus is on clear planning, neat presentation, and convenient
              coordination.
            </p>

            {/* ================= FEATURES ================= */}
            <div
              className="
                mt-7 grid
                grid-cols-1 gap-3
                sm:mt-8 sm:grid-cols-2 sm:gap-4
              "
            >
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group rounded-2xl
                      border border-gray-200
                      bg-white
                      p-4
                      shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-pink-200
                      hover:shadow-[0_15px_35px_rgba(190,24,93,0.10)]
                      sm:p-5
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        mb-3 flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-pink-50
                        text-pink-700
                        ring-1 ring-pink-100
                        transition-all duration-300
                        group-hover:bg-pink-700
                        group-hover:text-white
                        group-hover:ring-pink-700
                      "
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        text-xl font-semibold
                        text-gray-900
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Text */}
                    <p
                      className="
                        mt-1.5
                        text-[16px] leading-5
                        text-gray-800
                        sm:leading-6
                      "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT IMAGE SECTION */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="
              relative mx-auto flex
              w-full max-w-[520px]
              items-center justify-center
              px-5
              lg:max-w-[580px]
              lg:px-0
            "
          >
            {/* Glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[65%] w-[65%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-pink-200/50
                blur-[90px]
              "
            />

            {/* ================= MAIN IMAGE ================= */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative z-10
                mx-auto
                w-[68%]
                sm:w-[64%]
                lg:w-[62%]
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-gray-200
                  bg-white
                  p-2
                  shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                "
              >
                <img
                  src="/banner/banner1.jpg"
                  alt="Event decoration setup"
                  className="
                    aspect-[4/5]
                    w-full
                    rounded-[1.5rem]
                    object-cover
                  "
                  loading="lazy"
                />

                {/* Image Gradient */}
                <div
                  className="
                    absolute inset-x-2 bottom-2
                    rounded-b-[1.5rem]
                    bg-gradient-to-t
                    from-gray-950/85
                    via-gray-900/30
                    to-transparent
                    p-5 pt-20
                    sm:p-6 sm:pt-24
                  "
                >
                  <p
                    className="
                      text-xs font-semibold
                      uppercase tracking-[0.15em]
                      text-pink-200
                    "
                  >
                    Event Decoration
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm font-semibold
                      text-white
                      sm:text-base
                    "
                  >
                    Designed around your occasion
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= TOP IMAGE ================= */}

            <motion.div
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                left-[1%]
                top-3
                z-20
                w-[27%]
                sm:left-[4%]
                sm:w-[26%]
                lg:left-[2%]
              "
            >
              <div
                className="
                  rounded-2xl
                  border border-white
                  bg-white
                  p-1.5
                  shadow-[0_15px_35px_rgba(0,0,0,0.14)]
                "
              >
                <img
                  src="/birthday/birthday7.jpeg"
                  alt="Birthday decoration setup"
                  className="
                    aspect-square
                    w-full
                    rounded-xl
                    object-cover
                  "
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* ================= BOTTOM IMAGE ================= */}

            <motion.div
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="
                absolute
                bottom-8
                right-[1%]
                z-20
                w-[27%]
                sm:right-[4%]
                sm:w-[26%]
                lg:right-[2%]
              "
            >
              <div
                className="
                  rounded-2xl
                  border border-white
                  bg-white
                  p-1.5
                  shadow-[0_15px_35px_rgba(0,0,0,0.14)]
                "
              >
                <img
                  src="/birthday/birthday5.jpeg"
                  alt="Celebration decoration details"
                  className="
                    aspect-square
                    w-full
                    rounded-xl
                    object-cover
                  "
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* ================= INFO CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="
                absolute
                bottom-0
                left-1/2
                z-30
                w-[70%]
                -translate-x-1/2
                translate-y-1/2
                rounded-2xl
                border border-pink-100
                bg-white/95
                p-3
                text-center
                shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                sm:w-[62%]
                sm:p-4
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-900
                  sm:text-[10px]
                "
              >
                Decoration Services
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  font-semibold
                  text-gray-800
                  sm:text-sm
                "
              >
                Birthday • Anniversary • Baby Shower • Weddings
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptMood;