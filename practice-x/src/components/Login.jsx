import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      {/* Login Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Login
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-red-500 hover:text-red-600"
            >
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg 
            font-semibold hover:bg-red-600 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-red-500 font-semibold hover:text-red-600"
          >
            Register
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;