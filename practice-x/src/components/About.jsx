import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-red-500">Tailwind CSS</span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tailwind CSS is a utility-first CSS framework that helps you
            quickly build modern and responsive websites.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-red-500 mb-3">
              Utility First
            </h2>

            <p className="text-gray-600">
              Tailwind provides utility classes that allow you to design
              directly inside your HTML or JSX.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-red-500 mb-3">
              Responsive
            </h2>

            <p className="text-gray-600">
              You can easily create responsive designs for mobile, tablet,
              and desktop devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-bold text-red-500 mb-3">
              Easy to Use
            </h2>

            <p className="text-gray-600">
              Tailwind CSS makes it easier to create beautiful user
              interfaces without writing large amounts of custom CSS.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;