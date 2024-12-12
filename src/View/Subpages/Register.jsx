import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-2">
            <div className=" bg-cyan-100 p-6 w-[700px] h-auto max-w-full flex flex-col justify-center mt-20">
                <div className="flex justify-center mb-2">
                    {/* <div className="   items-center">
            <img
              src="https://koinetmedia.com/images/Logo.png"
              alt="Logo"
              className="h-16 w-32"
            />
          </div> */}
                </div>
                <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-1 p-2">
                    Create Your Account
                </h2>
                <form >
                    {/* First Name & Last Name */}
                    <div className="flex gap-2 mb-3">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name ..."
                                className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name ..."
                                className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email ...."
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                            Phone
                        </label>
                        <input
                            type="number"
                            id="phone"
                            placeholder="Enter your phone number..."
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password ...."
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                            Role
                        </label>
                        <select
                            id="role"
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">

                        <button
                            type="submit"
                            className=" bg-red-400 w-60  rounded-lg  text-white p-1 hover:shadow-lg hover:scale-105 transition-transform"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* Already Registered */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-blue-600 font-semibold hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;