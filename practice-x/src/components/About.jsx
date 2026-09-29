import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-red-500 font-semibold text-lg">
            About Me
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            About <span className="text-red-500">Me</span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            I am a passionate Full Stack Developer and MCA student who
            enjoys building modern, responsive and scalable web applications.
            I work with technologies such as React, Node.js, Express.js,
            MongoDB, MySQL and Tailwind CSS.
          </p>

        </div>


        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Who I Am */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who I Am
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I am currently pursuing my Master of Computer Applications
              (MCA). I am interested in software development, full-stack
              development and building real-world applications.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              My goal is to continuously improve my programming and problem
              solving skills while developing useful and user-friendly
              software solutions.
            </p>

          </div>


          {/* Development Focus */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

            <h2 className="text-2xl font-bold text-red-500 mb-4">
              My Development Focus
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I focus on creating complete applications starting from the
              frontend interface to backend APIs and database integration.
              I also explore mobile development and machine learning
              integration.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                Full Stack
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                React
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                Node.js
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                MongoDB
              </span>

              <span className="bg-gray-800 px-4 py-2 rounded-lg">
                MySQL
              </span>

            </div>

          </div>

        </div>


        {/* Skills Cards */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            My <span className="text-red-500">Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">

              <div className="text-3xl mb-4">
                💻
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Frontend
              </h3>

              <p className="text-gray-600">
                React.js, JavaScript, HTML, CSS, Tailwind CSS and Vite.
              </p>

            </div>


            {/* Backend */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">

              <div className="text-3xl mb-4">
                ⚙️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Backend
              </h3>

              <p className="text-gray-600">
                Node.js, Express.js and REST APIs.
              </p>

            </div>


            {/* Database */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">

              <div className="text-3xl mb-4">
                🗄️
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Database
              </h3>

              <p className="text-gray-600">
                MongoDB, MySQL and Oracle for application data management.
              </p>

            </div>


            {/* Mobile & ML */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">

              <div className="text-3xl mb-4">
                🤖
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mobile & ML
              </h3>

              <p className="text-gray-600">
                Flutter, Firebase, Python, TensorFlow and OpenCV.
              </p>

            </div>

          </div>

        </div>


        {/* Education / Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Education
            </h2>

            <div className="border-l-4 border-red-500 pl-5">

              <h3 className="text-xl font-bold text-gray-900">
                Master of Computer Applications
              </h3>

              <p className="text-red-500 font-semibold mt-1">
                KIET Group of Institutions
              </p>

              <p className="text-gray-500 mt-2">
                2025 – 2027
              </p>

              <p className="text-gray-600 mt-3">
                Focused on software development, programming,
                databases, data structures and modern application
                development.
              </p>

            </div>

          </div>


          {/* Experience */}
          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Experience
            </h2>

            <div className="border-l-4 border-red-500 pl-5">

              <h3 className="text-xl font-bold text-gray-900">
                Software Development Intern
              </h3>

              <p className="text-red-500 font-semibold mt-1">
                Minicimex Tech OPC Private Limited
              </p>

              <p className="text-gray-500 mt-2">
                MERN Stack Development
              </p>

              <p className="text-gray-600 mt-3">
                Worked on web application features including property
                listing, search and filtering, and booking functionality
                using MongoDB, Express.js, React and Node.js.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;