import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navbarRef = useRef(null);

    // Toggle the main menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close menu or dropdown when clicking outside the navbar
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsMenuOpen(false); // Close the menu
            setIsDropdownOpen(false); // Close the dropdown
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close the menu and dropdown after clicking a link
    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu
        setIsDropdownOpen(false); // Close the dropdown
    };

    return (
        <nav ref={navbarRef} className="bg-white text-black shadow-lg border-gray-200 dark:border-gray-600 fixed top-0 z-50 w-full">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-10 w-35" alt="Logo" />
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
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
                    className={`items-center justify-between font-medium ${isMenuOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-black md:border-0 md:bg-white dark:border-gray-700">
                        <li>
                            <Link
                                to={"/"}
                                onClick={handleLinkClick}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-700"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/latest_reports"}
                                onClick={handleLinkClick}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Industry Expertise
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                id="dropdownNavbarLink"
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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

                            {isDropdownOpen && (
                                <div
                                    id="dropdownNavbar"
                                    className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dark:divide-gray-600"
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                                        <li>
                                            <Link
                                                to={"/pressreleased"}
                                                onClick={handleLinkClick}
                                                className="block px-4 py-2 text-black"
                                            >
                                                Press Releases
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={"/infographics"}
                                                onClick={handleLinkClick}
                                                className="block px-4 py-2 text-black"
                                            >
                                                Infographics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to={"/whoweare"}
                                                onClick={handleLinkClick}
                                                className="block px-4 py-1 text-black"
                                            >
                                                Who We Are
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to={"/advisory"}
                                onClick={handleLinkClick}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Advisory Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/Dashboard"}
                                onClick={handleLinkClick}
                                className="block py-2 px-3 bg-blue text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to={"/contact"}
                        onClick={handleLinkClick}
                        className="block  p-2 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ms-5 "
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
