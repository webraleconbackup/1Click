import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp Send Function
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const { first, last, phone, message } = formData;

    const whatsappMessage = `
Contact Form Message:
--------------------
Name: ${first} ${last}
Phone: ${phone}
Message: ${message}
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Target WhatsApp number
    const phoneNumber = " 9549820028";

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="bg-black text-white pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-10"
        >
          Contact <span className="text-white">Us</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] border border-yellow-600/40 rounded-3xl p-6 md:p-12 shadow-xl"
        >
          <form onSubmit={sendToWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-yellow-400">First Name</label>
              <input
                type="text"
                name="first"
                value={formData.first}
                onChange={handleChange}
                placeholder="Enter first name"
                required
                className="bg-transparent border border-yellow-600/30 rounded-xl p-3 outline-none focus:border-yellow-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm text-yellow-400">Last Name</label>
              <input
                type="text"
                name="last"
                value={formData.last}
                onChange={handleChange}
                placeholder="Enter last name"
                required
                className="bg-transparent border border-yellow-600/30 rounded-xl p-3 outline-none focus:border-yellow-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-sm text-yellow-400">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="bg-transparent border border-yellow-600/30 rounded-xl p-3 outline-none focus:border-yellow-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="mb-1 text-sm text-yellow-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="bg-transparent border border-yellow-600/30 rounded-xl p-3 outline-none focus:border-yellow-500"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-3 rounded-xl shadow-lg"
              >
                Send Message
              </motion.button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
