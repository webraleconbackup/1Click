import React from "react";
import { motion } from "framer-motion";

const images = [
  "/home-img/celebrate.jpeg",
  "/service/service3.jpg",
  "/home-img/jurney5.jpg",
  "/home-img/jurney4.jpg",
];

const EventsPlanner = () => {
  return (
    <section className="bg-black py-16 px-4 lg:px-20 hidden md:block">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-[#D4A017] text-4xl sm:text-5xl font-bold mb-12 lg:mb-18 italic"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Events Planner
      </motion.h2>

      {/* Alternating Image Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-8xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={` overflow-hidden 
              ${i % 2 === 0 ? "lg:mt-20" : "mt-0"}`}
          >
            <img
              src={img}
              alt="Event"
              className="w-full h-[350px] md:h-[450px] object-cover border border-yellow-300 rounded-sm transition-all duration-700 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsPlanner;
