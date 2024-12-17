import { Link } from "react-router-dom";
import Logo from "../assets/logo2.jpg"

const Footer = () => {
    return (
        <footer className="text-white  bg-[#243642] ">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img
                            src={Logo}
                            className="h-12 w-35"
                            alt="Logo" />
                    </a>
                    <p className="mt-2 text-sm text-gray-300">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-start">Services</h2>
                        <nav className="list-none mb-10 text-start ">
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-white" >Latest Reports</a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-white">Advisory Services</a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-white">Emerging Technologies</a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-white">Customer Research</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-start">Useful Links</h2>
                        <nav className="list-none mb-10 text-start ">
                            <li>
                                <Link to={"/ccpa"} className="text-gray-300 hover:text-white" >CCPA Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/gdpr"} className="text-gray-300 hover:text-white">GDPR Data Protection</Link>
                            </li>
                            <li>
                                <Link to={"/termsandconditions"} className="text-gray-300 hover:text-white">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to={"/privacypolicy"} className="text-gray-300 hover:text-white">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/refundpolicy"} className="text-gray-300 hover:text-white">Cancellation / Refund policy</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-start">Featured Insights</h2>
                        <nav className="list-none mb-10 text-start ">
                            <li>
                                <Link to={"/pressreleased"} className="text-gray-300 hover:text-white">Press Release</Link>
                            </li>
                            <li>
                                <Link to={"/"} className="text-gray-300 hover:text-white">Case Studies</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className="text-gray-300 hover:text-white">Contact us</Link>
                            </li>
                            <li>
                                <Link to={"/about_us"} className="text-gray-300 hover:text-white">About us</Link>
                            </li>
                            <li>
                                <Link to={"/career"} className="text-gray-300 hover:text-white">Career</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-2">
                        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3 text-start">Need help or have a question?</h2>
                        <nav className="list-none mb-10 text-start ">
                            <li>
                                <a className="text-gray-300  hover:text-white">Kharadi,pune,Maharashtra, <br />India,411014</a>
                            </li>
                            <li className="text-gray-300 hover:text-white">
                                <p>info@koinetmedia.com</p>
                            </li>

                            <li>
                                <p className="text-gray-300 hover:text-white">
                                    +91 90215 68448</p>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 ">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-black text-sm text-center sm:text-left">© 2024 koinetmedia —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-red-600 ml-1" target="_blank">@koinetmedia</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-black">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-black">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-black">
                            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-black">
                            <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
