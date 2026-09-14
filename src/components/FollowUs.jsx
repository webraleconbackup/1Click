import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FollowUs({ images, title, hide, link }) {
  return (
    <section className="bg-pink-50 py-6 pt-10 px-4 lg:px-20">
      <h2 className="text-pink-600 text-3xl lg:text-5xl md:text-6xl font-serif mb-12">
        {title}
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="px-4"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 0.85 }}               // zoom-in start
              whileInView={{ scale: 1 }}              // zoom to normal
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={item.img}
                alt="img"
                className="w-full h-[420px] object-cover rounded-lg transition-all duration-700 hover:scale-140"
              />

              <div className="absolute top-4 left-4 flex gap-3 bg-white/60 px-3 py-1 rounded-md">
                {/* <FaLinkedin className="text-red-600 text-xl" /> */}
                <a href="#"><FaInstagram className="text-red-600 text-xl" /></a>
                <FaYoutube className="text-red-600 text-xl" />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`flex justify-end md:pr-10 mt-6 md:mt-12 ${hide}`}>
        <button className="text-pink-600 text-3xl lg:text-5xl tracking-[4px] flex items-center gap-3">
          <Link to={link}><span className="text-3xl lg:text-4xl">←</span> VIEW ALL</Link>
        </button>
      </div>
    </section>
  );
}
