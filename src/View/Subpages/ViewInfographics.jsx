import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Constant/ConstantFiles";
import { useRazorpay } from "react-razorpay";

import emailjs from 'emailjs-com';


function ViewInfographics() {
    const { id } = useParams();  // Extract `id` from the URL params

    const [activeTab, setActiveTab] = useState("summary");
    const [infographic, setInfographic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { Razorpay } = useRazorpay();

    const [selectedLicense, setSelectedLicense] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = useRef();
    // Function to open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_anhnjq1', // Replace with your EmailJS service ID
                'template_g6wzw9k', // Replace with your EmailJS template ID
                form.current,
                '9DlhYScldqmnqrNr1' // Replace with your public key
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('Failed to send email. Please try again.');
                }
            );
    };


    useEffect(() => {
        if (!id) {
            setError("No ID provided in the URL.");
            return;
        }

        const fetchInfographicById = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/get_infographic/${id}`);
                console.log(response);
                setInfographic(response.data.data);  // Set the infographic data from API response
            } catch (err) {
                setError("Error fetching infographic data.");
                console.error("Error fetching infographic:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInfographicById();  // Trigger API call if `id` exists
    }, [id]);  // Dependency array ensures this effect runs whenever `id` changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    const handlePayment = () => {
        if (!selectedLicense || !infographic) {
            alert("Please select a license before proceeding.");
            return;
        }

        // Determine amount based on the selected license
        let amount;
        if (selectedLicense === "single-user") {
            amount = infographic.singleUserPrice * 100; // Convert to paise
        } else if (selectedLicense === "multi-user") {
            amount = infographic.multiUserPrice * 100; // Convert to paise
        } else if (selectedLicense === "enterprise") {
            amount = infographic.enterprisePrice * 100; // Convert to paise
        }

        const options = {
            key: "rzp_test_cUDdmmAIerYlSG", // Replace with your Razorpay test/live key
            amount, // Amount in paise
            currency: "INR",
            name: "Report Purchase",
            description: `Purchase ${selectedLicense} license`,
            handler: (response) => {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                // Handle post-payment actions like saving payment details in DB
            },
            prefill: {
                name: "Customer Name", // Replace with actual user data
                email: "customer@example.com", // Replace with actual user data
            },
            theme: {
                color: "#3399cc",
            },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
    };

    if (!infographic) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <div >
                {/* Trigger Button */}
                <button
                    onClick={handleOpenModal}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Download Sample Report
                </button>

                {/* Modal */}
                {isModalOpen && (
                    <div
                        className=" fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
                    >
                        <div className="relative p-4 w-full max-w-2xl max-h-full ">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">


                                {/* Modal Body */}
                                <div className="bg-blue-200 md:p-2 space-y-4">
                                    <button
                                        onClick={handleCloseModal}
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Get in <span className="text-blue-800">Touch</span> with Us
                                    </h3>
                                    <p className="mb-3">
                                        Were here to help! Fill out the form below, and our market research team will get back to you shortly.
                                    </p>

                                    <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-medium mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-1 transition duration-200"
                                                    placeholder="Your Name"
                                                    name="user_name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1">Company Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-1 transition duration-200"
                                                    placeholder="Your Business Email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-1">Business Email</label>
                                            <input
                                                type="email"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-1 transition duration-200"
                                                placeholder="Your Business Email"
                                                name="user_email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-1 transition duration-200"
                                                placeholder="+91-1234567890"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Message</label>
                                            <textarea
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-1 transition duration-200"
                                                placeholder="Your Message"
                                                rows="4"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Download Sample Report
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <section className="relative mt-5 flex flex-col items-center overflow-hidden">
                {/* Check if infographic exists */}
                {infographic && (
                    <div className=" text-center">
                        <div className="text-start my-6 bg-blue-800 py-2  w-full ">
                            <p className="text-5xl font-bold  text-white ms-4   drop-shadow-lg">
                                View Infographics Details
                            </p>
                        </div>

                        <div className="relative max-w-7xl transition-all mt-2">
                            <div className="text-[#1e40af] text-start font-medium p-4 mb-6 border border-b-2 border-[#1e40af]">
                                {infographic.title}
                                <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600 mt-5 ">
                                    <span className="px-4 py-2 bg-[#e0e7ff] text-[#4338ca] rounded-full shadow-md">
                                        Published: {new Date(infographic.createdAt).toLocaleDateString()}
                                    </span>
                                    <span className="px-4 py-2 bg-[#fcd34d] text-[#92400e] rounded-full shadow-md">
                                        Report ID: {infographic.reportId}
                                    </span>
                                    <span className="px-4 py-2 bg-[#a78bfa] text-[#312e81] rounded-full shadow-md">
                                        {infographic.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <hr className="py-1 bg-zinc-300 mt-2" />
            <section>
                {infographic && (
                    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-4 lg:px-8">
                        <div className="mb-8  border-b-2 border-gray-300 dark:border-gray-700 ">
                            <ul
                                className="flex flex-wrap justify-center -mb-px text-sm  text-center gap-2 sm:gap-4 md:gap-6"
                                role="tablist"
                            >
                                <li className="me-2 " role="presentation">
                                    <button
                                        className={`inline-block text-lg py-1 sm:px-4 sm:py-2 md:px-1 md:py-3  ${activeTab === "summary" ? "bg-[#001F3F] text-white" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("summary")}
                                        type="button"
                                        role="tab"
                                        aria-controls="summary"
                                        aria-selected={activeTab === "summary"}
                                    >
                                        Summary
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block text-lg py-1 sm:px-4 sm:py-2 md:px-1 md:py-3 ${activeTab === "toc" ? "bg-[#001F3F] text-white" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("toc")}
                                        type="button"
                                        role="tab"
                                        aria-controls="toc"
                                        aria-selected={activeTab === "toc"}
                                    >
                                        Table Of Content
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block text-lg py-1 sm:px-4 sm:py-2 md:px-1 md:py-3 ${activeTab === "methodology" ? "bg-[#001F3F] text-white" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("methodology")}
                                        type="button"
                                        role="tab"
                                        aria-controls="methodology"
                                        aria-selected={activeTab === "methodology"}
                                    >
                                        Methodology
                                    </button>
                                </li>

                                <li role="presentation">
                                    <button
                                        className={`inline-block text-lg py-1 sm:px-4 sm:py-2 md:px-1 md:py-3 ${activeTab === "infographics" ? "bg-[#001F3F] text-white" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("infographics")}
                                        type="button"
                                        role="tab"
                                        aria-controls="infographics"
                                        aria-selected={activeTab === "infographics"}
                                    >
                                        Infographics
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="border-2  rounded-lg border-gray-200 p-4">
                            {activeTab === "summary" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.summary }} />
                                </div>
                            )}
                            {activeTab === "toc" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.tableOfContents }} />
                                </div>
                            )}
                            {activeTab === "methodology" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.methodology }} />
                                </div>
                            )}
                            {activeTab === "infographics" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.infographics }} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center gap-8">

                        {/* Available Formats Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 bg-gradient-to-tl from-teal-100 to-cyan-200 rounded-lg">
                            <div className="h-full text-center bg-white p-5 rounded-lg shadow-lg">
                                <p className="bg-gradient-to-r from-teal-400 to-cyan-800 text-white p-3 rounded-full text-xs font-semibold tracking-widest uppercase title-font shadow-md">
                                    Available Formats
                                </p>
                                <div className="border-1 border-gray-200 rounded-lg flex gap-6 justify-center mt-6 p-4 transition-all duration-300 ease-in-out hover:border-teal-600 hover:shadow-lg hover:scale-110">
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/pdf.svg" alt="PDF" className="w-16 h-16 transform transition-all duration-300 hover:scale-110" />
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/excel.svg" alt="EXCEL" className="w-16 h-16 transform transition-all duration-300 hover:scale-110" />
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/ppt.svg" alt="PPT" className="w-16 h-16 transform transition-all duration-300 hover:scale-110" />
                                </div>
                            </div>
                        </div>

                        {/* Report Buying Options Card (Different Color) */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 bg-gradient-to-tl from-indigo-100 to-purple-200 rounded-lg">
                            <div className="h-full text-center bg-white p-5 rounded-lg shadow-lg">
                                <p className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-3 rounded-full text-xs font-semibold tracking-widest uppercase title-font shadow-md">
                                    REPORT BUYING OPTIONS
                                </p>
                                <div className="mt-5">
                                    <ul className="text-sm font-medium text-black bg-white border border-gray-200 rounded-lg  dark:border-gray-600  transition-all duration-300 ease-in-out  ">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="single-user-checkbox"
                                                    type="radio"
                                                    name="license"
                                                    value="single-user"
                                                    onChange={(e) => setSelectedLicense(e.target.value)}
                                                    className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label className="w-full py-3 ms-2 text-sm font-medium  text-black">
                                                    Single-User License: US$ {infographic.singleUserPrice}
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="multi-user-checkbox"
                                                    type="radio"
                                                    name="license"
                                                    value="multi-user"
                                                    onChange={(e) => setSelectedLicense(e.target.value)}
                                                    className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label className="w-full py-3 ms-2 text-sm font-medium  text-black">
                                                    Multi-User License: US$ {infographic.multiUserPrice}
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="enterprise-checkbox"
                                                    type="radio"
                                                    name="license"
                                                    value="enterprise"
                                                    onChange={(e) => setSelectedLicense(e.target.value)}
                                                    className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-black">
                                                    Enterprise License: US$ {infographic.enterprisePrice}
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button onClick={handlePayment} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                        <span className="  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Buy Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Download Sample Reports & Customization Options Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 bg-gradient-to-tl from-teal-100 to-cyan-200 rounded-lg">
                            <div className="bg-white p-5 rounded-lg shadow-lg">

                                <div>
                                    {/* Button to open the modal */}
                                    <div className="mb-4">

                                        <Link onClick={handleOpenModal} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Download Sample Report
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Modal */}
                                    <div className="mb-4">
                                        <Link to={"/contact"} className="  relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Request Customization
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="mb-4">
                                        <Link to={"/contact"} className="  relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Speak to Consultant
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ViewInfographics;
