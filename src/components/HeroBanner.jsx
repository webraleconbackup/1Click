import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from 'react-icons/fa';

const slides = [
    {
    image: '/baby/baby13.jpeg',
    title: 'Beautiful Baby Welcome Decoration',
  },
  {
    image: '/baby/baby16.jpeg',
    title: 'Baby Shower Decoration',
  },
  {
    image: '/birthday/birthday10.jpeg',
    title: 'Elegant Birthday Decoration',
  },
  
  {
    image: '/birthday/birthday8.jpeg',
    title: 'Premium Birthday Decoration',
  },
  {
    image: '/anniversary/anniversary11.jpeg',
    title: 'Romantic Anniversary Decoration',
  },
  {
    image: '/anniversary/anniversary9.jpeg',
    title: 'Elegant Anniversary Decoration',
  },
];

const whatsappNumber = '919549820028';

export default function HeroBanner() {
  const whatsappMessage =
    'Hi, I would like to book your decoration service. Please share the details.';

  return (
    <section className="relative w-full overflow-hidden mt-28 lg:mt-38">
      <div
        className="
          relative
          w-full
          h-[360px]
          md:h-[600px]
          lg:h-[650px]
        "
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative
                  h-full
                  w-full
                  bg-cover
                  bg-center
                  bg-no-repeat
                "
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Dark Overlay */}
                {/* <div className="absolute inset-0 bg-black/55" /> */}

                {/* Left Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/60
                    via-black/20
                    to-transparent
                  "
                />

                {/* ================= CONTENT ================= */}
                <div className="relative z-10 flex h-full items-center">
                  <div
                    className="
                      w-full
                      max-w-6xl
                      pl-20
                      pr-6
                      sm:pl-24
                      sm:pr-10
                      md:pl-28
                      lg:pl-40
                      xl:pl-48
                    "
                  >
                    <div className="max-w-4xl">

                      {/* TITLE */}
                      <h1
                        className="
                          text-white
                          font-extrabold
                          leading-tight
                          text-3xl
                          sm:text-4xl
                          md:text-5xl
                          lg:text-7xl
                          drop-shadow-lg
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* BOOK NOW BUTTON */}
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        mt-24
                          lg:mt-7
                          inline-flex
                          items-center
                          gap-5
                          bg-pink-600
                          hover:bg-white
                          rounded-md
                          px-10
                          py-4
                          text-white
                          hover:text-black
                          font-semibold
                          text-lg
                          shadow-lg
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:shadow-xl
                        "
                      >
                        BOOK NOW
                        <FaArrowRight />
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= LEFT ARROW ================= */}
        <button
          className="
            hero-prev
            absolute
            left-5
            sm:left-8
            lg:left-16
            xl:left-20
            top-1/2
            z-30
            -translate-y-1/2
            flex
            items-center
            justify-center
            text-white
            transition-all
            duration-300
            hover:text-yellow-400
            hover:scale-110
          "
          aria-label="Previous slide"
        >
          <FaChevronLeft
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
            "
          />
        </button>

        {/* ================= RIGHT ARROW ================= */}
        <button
          className="
            hero-next
            absolute
            right-5
            sm:right-8
            lg:right-16
            xl:right-20
            top-1/2
            z-30
            -translate-y-1/2
            flex
            items-center
            justify-center
            text-white
            transition-all
            duration-300
            hover:text-yellow-400
            hover:scale-110
          "
          aria-label="Next slide"
        >
          <FaChevronRight
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
            "
          />
        </button>
      </div>

      {/* ================= PAGINATION ================= */}
      <style>{`
        .swiper-pagination {
          bottom: 22px !important;
          z-index: 40 !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ffffff;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 999px;
          background: #facc15;
          opacity: 1;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 18px !important;
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .swiper-pagination-bullet-active {
            width: 25px;
          }
        }
      `}</style>
    </section>
  );
}