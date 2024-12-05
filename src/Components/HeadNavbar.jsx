import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // null indicates no dropdown is open

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    return (
        <nav className="bg-white text-black shadow-lg border-gray-200 dark:border-gray-600  fixed top-0 z-50 w-full">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={Logo}
                        className="h-10 w-35"
                        alt="Logo"
                    />
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    id="mega-menu-full"
                    className={`items-center justify-between font-medium ${isMenuOpen ? "flex" : "hidden"
                        } w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-black md:border-0 md:bg-white  dark:border-gray-700">
                        <li>
                            <Link
                                to={"/"}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500  dark:border-gray-700"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/latest_reports"}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Latest Reports
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleDropdown("dropdown1")}
                                id="mega-menu-full-dropdown-button"
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Industry Expertise
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleDropdown("dropdown2")}
                                id="mega-menu-full-dropdown-button"
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Featured Insights
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <Link
                                to={"/advisory"}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >

                                Advisory Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/Dashboard"}
                                className="block py-2 px-3 bg-blue text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {activeDropdown === "dropdown1" && (
                <div
                    id="mega-menu-full-dropdown"
                    className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y  dark:border-gray-600"
                >
                    <div className=" bg-customBlue grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900  sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <Link
                                    to={"Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold ">
                                        <p>Aerospace & Defence Industry</p>
                                    </div>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Agriculture and Agri Inputs</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Animal Nutriation and Helth</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Packadging</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    to={"/Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Automotive and Transportaion</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Building and Construction</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Chemicals and Materials</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Energy and Power</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/Allexpertise"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Food and Beverage</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {activeDropdown === "dropdown2" && (
                <div
                    id=""
                    className="mt-1 text-end w-full border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y  dark:border-gray-600"
                >
                    <div className="grid bg-customBlue text-end text-gray-900  sm:grid-cols-2 md:px-6">
                        <ul>
                            <li>
                                <Link
                                    to={"/pressreleased"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Press Releases</p>
                                    </div>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/infographics"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Infographics</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/whoweare"}
                                    className="block p-3 rounded-lg hover:bg-gray-100 "
                                >
                                    <div className="font-semibold">
                                        <p>Who we are</p>
                                    </div>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
