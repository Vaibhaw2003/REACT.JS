import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10">

        <h1 className="text-4xl font-bold text-gray-900">
          Contact Me
        </h1>

        <p className="text-gray-600 mt-3">
          Have a question or want to work together? Feel free to contact me.
        </p>

      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I'm always open to discussing new projects, ideas, or
            opportunities. You can reach me using the information below.
          </p>

          {/* Email */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              📧 Email
            </h3>

            <p className="text-gray-400 mt-1">
              vaibhawrajput05@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              📱 Phone
            </h3>

            <p className="text-gray-400 mt-1">
              +91 8874812003
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold">
              📍 Location
            </h3>

            <p className="text-gray-400 mt-1">
              Uttar Pradesh, India
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Me a Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;