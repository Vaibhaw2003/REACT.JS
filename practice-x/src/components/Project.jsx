import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      technology: "React, Node.js, MongoDB",
      status: "Completed",
    },
    {
      id: 2,
      name: "Student Management System",
      technology: "React, Express, MySQL",
      status: "Completed",
    },
    {
      id: 3,
      name: "Chat Application",
      technology: "Flutter, Firebase",
      status: "In Progress",
    },
    {
      id: 4,
      name: "ML Plant Detection",
      technology: "Python, Flask, TensorFlow",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10">

        <h1 className="text-4xl font-bold text-gray-900">
          My Projects
        </h1>

        <p className="text-gray-600 mt-3">
          Here are some of the projects I have worked on.
        </p>

      </div>

      {/* Project Table */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse">

            {/* Table Header */}
            <thead className="bg-gray-900 text-white">

              <tr>
                <th className="px-6 py-4">
                  ID
                </th>

                <th className="px-6 py-4">
                  Project Name
                </th>

                <th className="px-6 py-4">
                  Technology
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4">
                  Action
                </th>
              </tr>

            </thead>

            {/* Table Body */}
            <tbody>

              {projects.map((project) => (

                <tr
                  key={project.id}
                  className="border-b hover:bg-gray-50 transition duration-300"
                >

                  <td className="px-6 py-4 font-semibold text-gray-700">
                    {project.id}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {project.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {project.technology}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Project;