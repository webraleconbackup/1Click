import React, { useState } from 'react';
import ServiceBanner from '../components/ServiceBanner';
// import Enquiry from '../components/Enquiry';
import LocationMap from '../components/LocationMap';

const ContactUs = () => {
  const bannerImage = '/banner/banner1.jpg';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9024048750";

    const message = `📩 *New Contact Form Message*  
---------------------------  
👤 *Name:* ${formData.firstName} ${formData.lastName}
📞 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setStatus("Opening WhatsApp...");

    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="mt-40 bg-white">
      <ServiceBanner
        title="CONTACT US"
        subtitle="Home › Contact Us"
        backgroundImage={bannerImage}
      />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-16 gap-10 bg-white text-gray-800">

        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 bg-purple-300 p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get in Touch With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 font-semibold text-gray-700">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold text-gray-700">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Message*</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300 shadow-md"
            >
              Submit
            </button>

            {status && (
              <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src="/service/allevent.jpg"
            alt="Contact"
            className="w-full h-[400px] md:h-[550px] object-cover"
          />
        </div>
      </div>
      <LocationMap />
      {/* <Enquiry /> */}
    </div>
  );
};

export default ContactUs;