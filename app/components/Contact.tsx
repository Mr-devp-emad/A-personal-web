"use client";

import "animate.css";

const Contact = () => {
  return (
    <>
      {/* Large Screens */}
      <div className="lg:block hidden">
        <div className="relative bg-gradient-to-b from-gray-100 to-blue-300 py-20 px-16">
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-blue-700">
              Get in <u className="text-red-500">Touch</u>
            </h1>
            <p className="text-lg text-center text-gray-700 mt-2">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-around items-start mt-16 gap-20 animate__animated animate__fadeIn animate__delay-2s">
            {/* Form */}
            <div className="w-[50%]">
              <form className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
                <div className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message"
                     
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Contact Details */}
            <div className="w-[40%]">
              <div className="bg-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
                <h2 className="text-2xl font-bold text-blue-700">Contact Information</h2>
                <p className="text-lg text-gray-600 mt-4">
                  Reach out to me through the following channels:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    📞 <span className="ml-2 text-gray-700">+92-335-1368673</span>
                  </li>
                  <li className="flex items-center">
                    📧 <span className="ml-2 text-gray-700">emadahmed7427@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    📍 <span className="ml-2 text-gray-700">karachi (Sindh), Pakistan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screens */}
      <div className="lg:hidden block">
        <div className="bg-gradient-to-b from-gray-100 to-blue-300 py-12 px-6">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-700">
              Get in <u className="text-red-500">Touch</u>
            </h1>
            <p className="text-gray-700 mt-2">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-10">
            <form className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    
                    className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="mt-8 bg-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-700">Contact Information</h2>
            <p className="text-gray-600 mt-4">
              Reach out to me through the following channels:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                📞 <span className="ml-2 text-gray-700">+92-335-1368673</span>
              </li>
              <li className="flex items-center">
                📧 <span className="ml-2 text-gray-700">emadahmed7427@gmail.com</span>
              </li>
              <li className="flex items-center">
                📍 <span className="ml-2 text-gray-700">karachi (Sindh), Pakistan </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
