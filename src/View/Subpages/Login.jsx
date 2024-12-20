import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Constant/ConstantFiles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Save token to localStorage
        localStorage.setItem("token", response.data.token);

        // Navigate to dashboard
        navigate("/Dashboard");
      }
    } catch (err) {
      // Set error message
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-5 relative overflow-hidden mt-9">
      {/* Content */}
      <div className="bg-white border-2 rounded-lg shadow-lg p-4 w-full max-w-md relative z-10">
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
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              required
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
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className=" w-full mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className=" text-white relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
              Log-In
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
