import React, { useEffect, useState } from "react";

export default function Banner() {
  const [showWatermark, setShowWatermark] = useState(true);

  // Hide watermark after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWatermark(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const videos = [
    "/video/mg.mp4",
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide Every 5 Sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[40vh] md:h-[100vh] mt-40 overflow-hidden">

      {/* Slider Videos */}
      {videos.map((video, i) => (
        <video
          key={i}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover duration-1000
            ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Watermark Text - visible only for 5 seconds */}
      {/* {showWatermark && (
        <div className="absolute inset-0 top-6 flex items-center justify-center pointer-events-none">
          <h1
            className="
              text-[12vw] md:text-[3vw] text-center
              font-extrabold uppercase tracking-widest
              text-white/70 
              select-none
            "
          >
            Performance based & Customer Centeric Approach
          </h1>
        </div>
      )} */}
    </section>
  );
}
