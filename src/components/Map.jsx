import React from "react";

const Map = () => {
  const address =
    "House No. 832, Gali No. 11, Jyoti Park, Sector 7, Gurugram, Haryana, India";

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=17&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="bg-pink-50 py-4 md:py-8">
      <div className="mx-auto w-full max-w-8xl">
        {/* Heading */}
        <div className="mx-auto mb-6 max-w-3xl text-center">
          {/* <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            📍 Find 1Click Events
          </span> */}

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Visit Our Location
          </h2>

          {/* <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            Visit 1Click Events at our Gurugram location for professional
            decoration services for birthdays, anniversaries, baby
            celebrations, romantic surprises, engagements, weddings and
            other special occasions.
          </p> */}
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-xl shadow-pink-100/50">
          {/* Location Header */}
          <div className="flex flex-col gap-4 border-b border-pink-100 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
            <div>
              <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                1Click Events
              </h3>

              <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                House No. 832, Gali No. 11, Jyoti Park, Sector 7, Gurgaon
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-pink-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-800 hover:shadow-lg"
            >
              Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden">
            <iframe
              title="1Click Events Location - Jyoti Park Sector 7 Gurgaon"
              src={mapSrc}
              className="h-[350px] w-full border-0 sm:h-[450px] lg:h-[600px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-pink-700">
              1Click Events
            </span>{" "}
            — House No. 832, Gali No. 11, Jyoti Park, Sector 7, Gurgaon,
            Haryana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;