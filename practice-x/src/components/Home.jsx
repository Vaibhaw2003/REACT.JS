import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>

              <p className="text-red-500 font-semibold text-lg mb-3">
                👋 Hello, I'm
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Vaibhaw
                <span className="text-red-500"> Singh</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                Full Stack Developer
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-xl">
                I build modern, responsive and user-friendly web applications
                using React, Node.js, Express.js, MongoDB and Tailwind CSS.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="/projects"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                >
                  View Projects
                </a>

                <a
                  href="/contact"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Contact Me
                </a>

              </div>

            </div>

            {/* Right Content */}
            <div className="flex justify-center">

              <div className="relative">

                {/* Main Card */}
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-900 rounded-3xl shadow-2xl flex items-center justify-center">

                  <div className="text-center">

                    <div className="w-28 h-28 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-6">
                      <span className="text-5xl font-bold text-white">
                        VS
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Developer
                    </h3>

                    <p className="text-gray-400 mt-2">
                      React • Node • MongoDB
                    </p>

                  </div>

                </div>

                {/* Decorative Element */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-red-500 rounded-2xl -z-0"></div>

                <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gray-800 rounded-2xl -z-0"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-3xl font-bold text-gray-900">
              My Skills
            </h2>

            <p className="text-gray-600 mt-3">
              Technologies I use to build applications
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg text-gray-900">
                React
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg text-gray-900">
                Node.js
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg text-gray-900">
                MongoDB
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
              <h3 className="font-bold text-lg text-gray-900">
                Tailwind CSS
              </h3>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;