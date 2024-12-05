import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom"; // For accessing URL params
import axios from "axios"; // For making API calls
// import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl } from "../../Constant/ConstantFiles";
import { useRazorpay } from "react-razorpay";
import { toast } from "react-toastify";


function ViewReportDetails() {
    const { Razorpay } = useRazorpay();
    const { id } = useParams(); // Get the report ID from the URL
    const [reportDetails, setReportDetails] = useState(null);
    const [activeTab, setActiveTab] = useState("summary");
    const [selectedLicense, setSelectedLicense] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [loading, setLoading] = useState(false); // State for loading status

    const form = useRef();
    // Function to open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    useEffect(() => {
        // Fetch report details by ID
        const fetchReportDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/get_report/${id}`);
                setReportDetails(response.data.data); // Store fetched data in state
            } catch (error) {
                console.error("Error fetching report:", error);
            }
        };

        if (id) {
            fetchReportDetails();
        }
    }, [id, baseUrl]);

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);


        const formData = new FormData(form.current);

        // Append the link to the form data
        formData.append("user_link", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");

        try {
            const response = await axios.post(`${baseUrl}/send-email`, Object.fromEntries(formData));
            toast.success(response.data.message);
            form.current.reset();

        } catch (error) {
            toast.error(error);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePayment = () => {
        if (!selectedLicense || !reportDetails) {
            alert("Please select a license before proceeding.");
            return;
        }

        // Determine amount based on the selected license
        let amount;
        if (selectedLicense === "single-user") {
            amount = reportDetails.singleUserPrice * 100; // Convert to paise
        } else if (selectedLicense === "multi-user") {
            amount = reportDetails.multiUserPrice * 100; // Convert to paise
        } else if (selectedLicense === "enterprise") {
            amount = reportDetails.enterprisePrice * 100; // Convert to paise
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

    if (!reportDetails) {
        return <p>Loading...</p>;
    }
    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options); // "en-GB" ensures DD MMM YYYY format
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
                                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition duration-200 transform hover:scale-105"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Get Sample Report"}
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/*1st section*/}
            <section
                className="relative py-16 px-8 bg-gradient-to-r from-[#f9f5ff] via-[#e0e7ff] to-[#dbeafe] flex flex-col items-center overflow-hidden"
            >
                {/* Title */}
                <div className="text-center mb-16 mt-10">
                    <p className="text-5xl font-extrabold  text-indigo-900 tracking-widest uppercase  drop-shadow-lg">
                        View Report Details
                    </p>
                </div>

                {/* Content Card */}
                <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8 text-left transition-all hover:scale-[1.02]">
                    <a href="#">
                        <p className="text-[#1e40af] text-base font-medium leading-7 mb-6">
                            {reportDetails.title}
                        </p>
                    </a>
                    <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600">
                        <span className="px-4 py-2 bg-[#e0e7ff] text-[#4338ca] rounded-full shadow-md">
                            Published: {formatDate(reportDetails.createdAt)}
                        </span>
                        <span className="px-4 py-2 bg-[#fcd34d] text-[#92400e] rounded-full shadow-md">
                            Report ID: {reportDetails.reportId}
                        </span>
                        <span className="px-4 py-2 bg-[#a78bfa] text-[#312e81] rounded-full shadow-md">
                            {reportDetails.category}
                        </span>
                    </div>
                </div>
            </section>

            {/* 2nd Section */}
            <section>
                <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:px-8 lg:px-12 hidden sm:block">
                    {/* Tab Navigation */}
                    <div className="mb-8 border-b-2 border-gray-300 dark:border-gray-700">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-semibold text-center gap-2 sm:gap-4 md:gap-6">
                            {[
                                { id: "summary", label: "SUMMARY" },
                                { id: "toc", label: "TABLE OF CONTENTS" },
                                { id: "methodology", label: "METHODOLOGY" },
                            ].map((tab) => (
                                <li
                                    key={tab.id}
                                    className="relative"
                                    role="presentation"
                                >
                                    <button
                                        className={`inline-block px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 transition-all duration-300 ease-in-out rounded-full ${activeTab === tab.id
                                            ? "bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-xl scale-105"
                                            : "bg-white text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-600"
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                        role="tab"
                                        aria-controls={tab.id}
                                        aria-selected={activeTab === tab.id}
                                    >
                                        <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg">
                                            {tab.label}
                                        </span>
                                        {activeTab === tab.id && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-full"></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === "summary" && (
                            <div className="p-4 sm:p-6 md:p-8 rounded-lg ">
                                <div dangerouslySetInnerHTML={{ __html: reportDetails.summary }} />
                            </div>
                        )}

                        {activeTab === "toc" && (
                            <div className="p-4 sm:p-6 md:p-8 rounded-lg ">
                                <div dangerouslySetInnerHTML={{ __html: reportDetails.tableOfContents }} />
                            </div>
                        )}

                        {activeTab === "methodology" && (
                            <div className="p-4 sm:p-6 md:p-8 rounded-lg ">
                                <div dangerouslySetInnerHTML={{ __html: reportDetails.methodology }} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/*last section*/}
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
                                    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out hover:bg-gray-100 ">
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
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Single-User License: US$ {reportDetails.singleUserPrice}
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
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Multi-User License: US$ {reportDetails.multiUserPrice}
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input
                                                    id="enterprise-checkbox"
                                                    type="radio"
                                                    name="license"
                                                    value="enterprise"
                                                    onChange={(e) => setSelectedLicense(e.target.value)}
                                                    className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Enterprise License: US$ {reportDetails.enterprisePrice}
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={handlePayment}
                                        className="mt-5 w-full bg-gradient-to-r from-teal-400 to-green-500 text-white p-3 rounded-full text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
                                    >
                                        Buy Now
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
                                        <button
                                            onClick={handleOpenModal}
                                            className="block bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-3 rounded-lg text-xs font-semibold tracking-widest uppercase title-font shadow-md text-center"
                                            type="button"
                                        >
                                            Download Sample Report
                                        </button>
                                    </div>

                                    {/* Modal */}


                                    <div className="mb-4">
                                        <Link to={"/contact"} className="block bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-3 rounded-lg text-xs font-semibold tracking-widest uppercase title-font shadow-md text-center">
                                            Request Customization
                                        </Link>
                                    </div>

                                    <div className="mb-4">
                                        <Link to={"/contact"} className="block bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-3 rounded-lg text-xs font-semibold tracking-widest uppercase title-font shadow-md text-center">
                                            Speak to Consultant
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

export default ViewReportDetails;
