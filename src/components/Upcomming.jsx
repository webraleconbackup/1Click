import React from "react";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Holi Celebration",
      img: "/holi/holi.jpeg",
    },
    {
      title: "Navratri Celebration",
      img: "/holi/navratri.jpeg",
    },
    {
      title: "Haldi Ceremony",
      img: "/haldi/haldi6.jpeg",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 lg:px-15 -z-50">
      {/* Title */}
      <h2 className="text-center text-pink-600 text-2xl  font-[Playfair_Display] md:text-5xl font-semibold tracking-widest mb-20">
        UPCOMING EVENTS
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full overflow-hidden shadow-lg rounded-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 lg:h-120 object-center transition-all duration-700 hover:scale-110"
              />
            </div>
            <p className="text-pink-600 font-semibold text-xl sm:text-2xl tracking-widest mt-6">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
