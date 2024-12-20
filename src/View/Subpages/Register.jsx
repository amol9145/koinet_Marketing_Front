import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Constant/ConstantFiles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        role: "user",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}/register_new_user`, formData);
            toast.success("Registration successful!");
            setErrorMessage("");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                role: "user",
            });
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "An error occurred during registration."
            );
            toast.error(errorMessage || "Registration failed!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-2">
            <div className="bg-cyan-100 p-6 w-[700px] h-auto max-w-full flex flex-col justify-center mt-20">
                <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-1 p-2">
                    Create Your Account
                </h2>
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 mb-3">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
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
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name ..."
                                className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number..."
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password ...."
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                            Role
                        </label>
                        <select
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-1 block w-full p-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                        </select>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="bg-red-400 w-60 rounded-lg text-white p-1 hover:shadow-lg hover:scale-105 transition-transform"
                        >
                            Register
                        </button>
                    </div>
                </form>
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
