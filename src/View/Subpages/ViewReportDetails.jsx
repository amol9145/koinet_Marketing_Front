import { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchReportDetails, sendEmail } from "../../../redux/slices/createreport/ViewReportDetails";
import { toast } from "react-toastify";

function ViewReportDetails() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { reportDetails, loading } = useSelector((state) => state.reportDetails);
    const [activeTab, setActiveTab] = useState("summary");
    const [selectedLicense, setSelectedLicense] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(reportDetails)
    const form = useRef();

    // Open Modal
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchReportDetails(id));
        }
    }, [id, dispatch]);

    const handleSendEmail = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        formData.append("user_link", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");
        try {
            await dispatch(sendEmail(Object.fromEntries(formData))).unwrap();
            // toast.success("Email sent successfully");
            form.current.reset();
        } catch (error) {
            toast.error(error || "Failed to send email");
        }
    };

    if (loading || !reportDetails) {
        return <p>Loading...</p>;
    }

    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    }

    // Conditional redirect based on license selection
    const handleRedirect = () => {
        if (!selectedLicense) {
            toast.error("Please select a license type before proceeding.");
            return;
        }
        // Determine the price based on the selected license
        let price = 0;
        if (selectedLicense === "single-user") {
            price = reportDetails.singleUserPrice;
        } else if (selectedLicense === "multi-user") {
            price = reportDetails.multiUserPrice;
        } else if (selectedLicense === "enterprise") {
            price = reportDetails.enterprisePrice;
        }

        navigate(`/latest_reports/viewreportdetails/report_billing/${reportDetails._id}`, {
            state: {
                reportDetails,
                selectedLicense,
                price,  // Send the price here
            },
        });
    };
    return (
        <>
             <button
                onClick={handleOpenModal}
                className="block w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Download Sample Report
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow ">
                            {/* Modal Body */}
                            <div className="bg-blue-200 p-4 sm:p-2 md:p-8 space-y-2">
                                <button
                                    onClick={handleCloseModal}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
                                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                                    Get in <span className="text-blue-800">Touch</span> with Us
                                </h3>
                                {/* <p className="mb-3 text-sm sm:text-base">
                                    Were here to help! Complete the form, and our team will contact you soon.
                                </p> */}

                                <form className="space-y-4" ref={form} onSubmit={handleSendEmail}>
                                    <input
                                        type="hidden"
                                        name="report_title"
                                        value={reportDetails.category}
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-medium mb-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2 sm:p-1 transition duration-200"
                                                placeholder="Your Name"
                                                name="user_name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Company Name</label>
                                            <input
                                                type="text"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2 sm:p-1 transition duration-200"
                                                placeholder="Your Business Email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-1">Business Email</label>
                                        <input
                                            type="email"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2 sm:p-1 transition duration-200"
                                            placeholder="Your Business Email"
                                            name="user_email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2 sm:p-1 transition duration-200"
                                            placeholder="+91-1234567890"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-1">Message</label>
                                        <textarea
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-2 sm:p-1 transition duration-200"
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className=" text-black relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                                Download Sample Report
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/*1st section*/}
            <section
                className="relative mt-10 flex flex-col items-center overflow-hidden"
            >
                {/* Title */}
                <div className="text-start my-6 bg-sky-900 text-white py-2  w-full ">
                    <p className="text-5xl font-bold  text-white ms-4   drop-shadow-lg">
                        View Report Details
                    </p>
                </div>

                {/* Content Card */}
                <div className="relative max-w-7xl transition-all mt-2">
                    <div className="text-[#1e40af] text-start font-medium p-4 mb-6 border border-b-2 border-[#1e40af]">
                        {reportDetails.title}
                        <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600 ">
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
                </div>
            </section>

            {/* 2nd Section */}
            <hr className="py-1 bg-zinc-300 mt-2" />
            <section>
                <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:px-8 lg:px-12 ">
                    {/* Tab Navigation */}
                    <div className="mb-8  border-b-2 border-gray-300 dark:border-gray-700">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm  text-center gap-2 sm:gap-4 md:gap-6">
                            {[
                                { id: "summary", label: "Summary" },
                                { id: "toc", label: "Table Of Contents" },
                                { id: "methodology", label: "Methodology" },
                            ].map((tab) => (
                                <li
                                    key={tab.id}
                                    className="relative"
                                    role="presentation"
                                >
                                    <button
                                        className={`inline-block  py-1 sm:px-4 sm:py-2 md:px-1 md:py-1  ${activeTab === tab.id
                                            ? "bg-[#001F3F] text-white"
                                            : " "
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
                    <div className="border-2  rounded-lg border-gray-200 p-4">
                        {activeTab === "summary" && (
                            <div >
                                <div dangerouslySetInnerHTML={{ __html: reportDetails.summary }} />
                            </div>
                        )}

                        {activeTab === "toc" && (
                            <div >
                                <div dangerouslySetInnerHTML={{ __html: reportDetails.tableOfContents }} />
                            </div>
                        )}

                        {activeTab === "methodology" && (
                            <div >
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

                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 bg-gradient-to-tl from-indigo-100 to-purple-200 rounded-lg">
                            <div className="h-full text-center bg-white p-5 rounded-lg shadow-lg">
                                <p className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-3 rounded-full text-xs font-semibold tracking-widest uppercase title-font shadow-md">
                                    REPORT BUYING OPTIONS
                                </p>
                                <div className="mt-5">
                                    <ul className="text-sm font-medium text-black bg-white border border-gray-200 rounded-lg dark:border-gray-600 dark:text-white transition-all duration-300 ease-in-out hover:bg-gray-100">
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
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-black">
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
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-black">
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
                                                <label className="w-full py-3 ms-2 text-sm font-medium text-black">
                                                    Enterprise License: US$ {reportDetails.enterprisePrice}
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                    <button
                                        className="mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleRedirect}
                                    >
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-black bg-white rounded-md group-hover:bg-opacity-0">
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
                                    <div className="mb-1">
                                        <Link onClick={handleOpenModal} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-black bg-white  rounded-md group-hover:bg-opacity-0">
                                                Download Sample Report
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Modal */}
                                    <div className="mb-1">
                                        <Link to={"/contact"} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-black bg-white  rounded-md group-hover:bg-opacity-0">
                                                Request Customization
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="mb-1">
                                        <Link to={"/contact"} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-black bg-white  rounded-md group-hover:bg-opacity-0">
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

export default ViewReportDetails;
