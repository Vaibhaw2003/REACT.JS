import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

      {/* Register Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">
              VS
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to create your account
          </p>

        </div>


        {/* Register Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
            />
          </div>


          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300"
            />
          </div>


          {/* Terms */}
          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              className="w-4 h-4 accent-red-500"
            />

            <p className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-red-500 cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </p>

          </div>


          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            Create Account
          </button>

        </form>


        {/* Login Link */}
        <div className="text-center mt-6">

          <p className="text-gray-600">
            Already have an account?{" "}

            <a
              href="/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </a>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;