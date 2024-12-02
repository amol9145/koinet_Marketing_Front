import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // For accessing URL params
import axios from "axios"; // For making API calls
// import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl } from "../../Constant/ConstantFiles";


function ViewReportDetails() {
    const { id } = useParams(); // Get the report ID from the URL
    const [reportDetails, setReportDetails] = useState(null);
    const [activeTab, setActiveTab] = useState("summary");

    useEffect(() => {
        // Function to fetch report details by ID
        const fetchReportDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/get_report/${id}`);
                setReportDetails(response.data.data); // Store fetched data in state
            } catch (error) {
                console.error("Error fetching report:", error);
            }
        };

        // Only fetch report details if ID is available
        if (id) {
            fetchReportDetails();
        }
    }, [id]);

    // const handleReCAPTCHAChange = (value) => {
    //     return value
    // };

    if (!reportDetails) {
        return <div>Loading report details...</div>;
    }
    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options); // "en-GB" ensures DD MMM YYYY format
    }

    return (
        <>
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

            {/*2nd section*/}
            <section>
                <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-4 lg:px-8">
                    <div className="mb-8 border-b-2 border-gray-300 dark:border-gray-700">
                        <ul className="flex justify-center -mb-px text-lg font-semibold text-center space-x-4">
                            {[
                                { id: "summary", label: "SUMMARY" },
                                { id: "toc", label: "TABLE OF CONTENTS" },
                                { id: "methodology", label: "METHODOLOGY" },
                                { id: "dsr", label: "DOWNLOAD SAMPLE REPORTS" },
                            ].map((tab) => (
                                <li key={tab.id} className="relative" role="presentation">
                                    <button
                                        className={`inline-block px-6 py-3 transition-all duration-300 ease-in-out rounded-full ${activeTab === tab.id
                                            ? "bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-xl scale-105"
                                            : "bg-white text-gray-700 hover:text-indigo-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-600"
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                        type="button"
                                        role="tab"
                                        aria-controls={tab.id}
                                        aria-selected={activeTab === tab.id}
                                    >
                                        <span className="relative z-10">{tab.label}</span>
                                        {activeTab === tab.id && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-full"></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {activeTab === "summary" && (
                            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-all duration-300 ease-in-out">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: reportDetails.summary }} />
                                </div>
                            </div>
                        )}

                        {activeTab === "toc" && (
                            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-all duration-300 ease-in-out">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: reportDetails.tableOfContents }} />
                                </div>
                            </div>
                        )}

                        {activeTab === "methodology" && (
                            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-all duration-300 ease-in-out">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: reportDetails.methodology }} />
                                </div>
                            </div>
                        )}

                        {/* {activeTab === "dsr" && (
                            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-all duration-300 ease-in-out">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: reportDetails.methodology }} />
                                </div>
                            </div>
                        )} */}
                        {activeTab === "dsr" && (
                            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-all duration-300 ease-in-out">
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: reportDetails.downloadSampleReport }} />
                                </div>
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
                                    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Single-User License: US$ {reportDetails.singleUserPrice}</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Multi-User License: US$ {reportDetails.multiUserPrice}</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enterprise License: US$ {reportDetails.enterprisePrice}</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button
                                        onClick={() => {
                                            const selectedOption = document.querySelector('input[name="license"]:checked')?.value;
                                            if (selectedOption) {
                                                if (selectedOption === "single-user") {
                                                    window.location.href = "/checkout";
                                                } else if (selectedOption === "multi-user") {
                                                    window.location.href = "/checkout";
                                                } else if (selectedOption === "enterprise") {
                                                    window.location.href = "/checkout";
                                                }
                                            } else {
                                                alert("Please select a license option before proceeding.");
                                            }
                                        }}
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

                                <div className="mb-4">
                                    <Link to={"/contact"} className="block bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-3 rounded-lg text-xs font-semibold tracking-widest uppercase title-font shadow-md text-center">
                                        Download Sample Reports
                                    </Link>
                                </div>

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
            </section>

        </>
    )
}

export default ViewReportDetails;
