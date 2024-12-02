import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-5 relative overflow-hidden mt-9">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 opacity-60"></div>

      {/* Content */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-indigo-300 to-blue-200 p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-indigo-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.29 8.29a1 1 0 011.42 0l3 3a1 1 0 010 1.42l-3 3a1 1 0 01-1.42 0L14 13.41V16a1 1 0 01-2 0v-2.59l-2.29 2.3a1 1 0 01-1.42-1.42L10.59 12H8a1 1 0 010-2h2.59L7.3 7.7a1 1 0 011.42-1.42L12 9.59V8a1 1 0 112 0v1.59l2.29-2.3z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          Welcome Back!
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to access your personalized dashboard.
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.465 1.428-1.402 2.684-2.616 3.575M12 19c-4.478 0-8.268-2.943-9.542-7-.465-1.428-1.402-2.684-2.616-3.575"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7-.465-1.428-1.402-2.684-2.616-3.575"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12c0-3.828-3.134-7-7-7-3.867 0-7 3.172-7 7 0 3.828 3.134 7 7 7 1.367 0 2.647-.407 3.735-1.105"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="text-right mb-6">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline focus:text-blue-700"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white py-3 rounded-lg shadow-lg hover:opacity-90 focus:ring-4 focus:ring-blue-300 transition"
          >
            Get Started
          </button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-6">
          ── Or sign in with ──
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-6"
            />
          </button>
          <button
            type="button"
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/157817/facebook.svg"
              alt="Facebook"
              className="h-6"
            />
          </button>
          <button
            type="button"
            className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/355037/apple.svg"
              alt="Apple"
              className="h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
