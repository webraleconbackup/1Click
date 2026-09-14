import React from "react";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const LocationMap = () => {
  const address =
    "House No. 832, Gali No. 11, Jyoti Park, Sector 7, Gurgaon, Haryana";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    <section
      id="location"
      className="bg-gradient-to-b from-white via-pink-50/40 to-white py-4 lg:pb-4"
    >
      <div className="mx-auto max-w-8xl px-4 lg:px-20">

        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-pink-600">
            <FaMapMarkerAlt />
            Find Us
          </span>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-pink-600">Location</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            Visit us at Jyoti Park, Sector 7, Gurgaon.
          </p>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">

          {/* Address Header */}
          <div className="flex flex-col gap-4 bg-gradient-to-r from-pink-600 to-purple-600 p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                <FaMapMarkerAlt className="text-xl" />
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">
                  Our Location
                </h3>

                <p className="mt-1 text-sm text-white/90">
                  House No. 832, Gali No. 11, Jyoti Park, Sector 7, Gurgaon
                </p>
              </div>
            </div>

            <a
              href={directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-pink-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="h-[350px] w-full sm:h-[450px] lg:h-[550px]">
            <iframe
              title="House No. 832, Jyoti Park, Sector 7, Gurgaon"
              src={mapUrl}
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;
