import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-700 via-pink-700 to-pink-800 py-16 md:py-20">
      {/* Decorative Background */}
      <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-8xl px-4 lg:px-20">
        {/* FAQ Container */}
        <div className="rounded-3xl bg-white/95 p-5 shadow-2xl shadow-pink-950/20 backdrop-blur-sm sm:p-8 md:p-10 lg:p-12">
          
          {/* Heading */}
          <div className="mb-10 text-center md:mb-6">

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-pink-600" />

            {/* <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Find answers to common questions about our decoration services,
              bookings, packages, and special celebrations.
            </p> */}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((data, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isOpen
                      ? 'border-pink-200 bg-pink-50/70 shadow-md shadow-pink-100'
                      : 'border-gray-200 bg-white hover:border-pink-200 hover:shadow-md'
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    {/* Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? 'bg-pink-700 text-white'
                          : 'bg-pink-100 text-pink-700 group-hover:bg-pink-700 group-hover:text-white'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-semibold leading-6 transition-colors duration-300 sm:text-base md:text-lg ${
                        isOpen
                          ? 'text-pink-700'
                          : 'text-gray-800 group-hover:text-pink-700'
                      }`}
                    >
                      {data.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 border-pink-700 bg-pink-700 text-white'
                          : 'border-gray-200 bg-gray-50 text-gray-500 group-hover:border-pink-200 group-hover:text-pink-700'
                      }`}
                    >
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-pink-100 px-5 pb-6 pt-4 sm:px-6">
                        <div className="ml-0 border-l-2 border-pink-200 pl-4 sm:ml-13">
                          <p className="text-sm leading-7 text-gray-600 sm:text-base">
                            {data.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-10 rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 to-white p-5 text-center sm:p-6">
            <p className="text-sm text-gray-600 sm:text-base">
              Still have questions?{' '}
              <span className="font-semibold text-pink-700">
                Feel free to contact us
              </span>{' '}
              and our team will be happy to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;