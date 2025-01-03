import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/slices/loginuser/authuser";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when login is submitted
    dispatch(loginUser(credentials))
      .unwrap()
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch(() => {
        setIsLoading(false); // Set loading to false if there's an error
      });
  };

  const renderPasswordIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {showPassword ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r p-5 mt-9">
      <div className="bg-white border-2 rounded-lg shadow-lg p-4 w-full max-w-md">
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
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">Welcome Back!</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to access your personalized dashboard.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {renderPasswordIcon()}
            </span>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full mt-3 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
            disabled={isLoading} // Disable button while loading
          >
            <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              {isLoading ? "Login..." : "Log-In"} {/* Display Login... while loading */}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
