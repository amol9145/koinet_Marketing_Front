
import { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf, FaFileExcel, FaFilePowerpoint, FaChartBar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Constant/ConstantFiles";
import ReCAPTCHA from "react-google-recaptcha";

const ViewPressRelease = () => {
    const [pressRelease, setPressRelease] = useState(null); // State to store API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [pressReleases, setPressReleases] = useState([]);


    const { id } = useParams()
    const handleReCAPTCHAChange = (value) => {
        return value
    };
    // Fetch API data
    useEffect(() => {
        const fetchPressRelease = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/get_data_press_releases/${id}`
                );
                console.log(response)
                setPressRelease(response.data.data); // Store API data in state
            } catch (err) {
                setError("Failed to fetch press release data. Please try again later.", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPressRelease();
    }, []);

    useEffect(() => {
        // Fetch data from API
        fetch(`${baseUrl}/get_data_press_releases`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch press releases");
                }
                return response.json();
            })
            .then((data) => {
                if (data && Array.isArray(data.data)) {
                    setPressReleases(data.data); // Use the `data` key from the response
                } else {
                    setPressReleases([]); // Fallback if `data` is not an array
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options); // "en-GB" ensures DD MMM YYYY format
    }


    const formatIcons = {
        PDF: <FaFilePdf className="text-red-600 text-2xl" />,
        Excel: <FaFileExcel className="text-green-600 text-2xl" />,
        PPT: <FaFilePowerpoint className="text-orange-600 text-2xl" />,
        "Power BI": <FaChartBar className="text-blue-600 text-2xl" />,
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600 py-10">{error}</div>;
    }
    return (
        <div className="container mx-auto pt-10 mt-10">
            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-6">

                {pressRelease && (
                    <>
                        {/* Left Section */}
                        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                            <h2 className="text-4xl font-bold text-blue-700 mb-4 hover:text-blue-500 transition duration-200">
                                {pressRelease.title}
                            </h2>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>Published on: <span className="font-semibold">{new Date(pressRelease.createdAt).toLocaleDateString()}</span></p>
                                <p>Category: <span className="font-semibold">{pressRelease.category}</span></p>
                            </div>
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: pressRelease.description }} />

                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col gap-6 w-full lg:w-1/3">

                            {/* Formats Card */}
                            <div className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-xl duration-200">
                                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Download Report Formats</h3>
                                <div className="flex flex-col space-y-4">
                                    {["PDF", "Excel", "PPT"].map((format, index) => {

                                        return (
                                            <div key={index} className="flex items-center bg-gray-50 rounded-md p-3 transition duration-200 hover:bg-gray-200 shadow-sm hover:shadow-md">
                                                {formatIcons[format]}
                                                <a
                                                    // Linking to the download URL
                                                    className="text-blue-600 font-medium hover:underline ml-2"
                                                >
                                                    Download as {format}
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Enhanced Contact Form */}
                            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 transition duration-200 hover:shadow-xl shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Get in <span className="text-yellow-300">Touch</span> with Us</h3>
                                <p className="mb-4">Were here to help! Fill out the form below, and our market research team will get back to you shortly.</p>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-medium mb-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-3 transition duration-200"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1">Company Name</label>
                                            <input
                                                type="text"
                                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-3 transition duration-200"
                                                placeholder="Your Business Email"
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div>
                                        <label className="block font-medium mb-1">Business Email</label>
                                        <input
                                            type="text"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-3 transition duration-200"
                                            placeholder="Your Business Email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-3 transition duration-200"
                                            placeholder="+91-1234567890"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium mb-1">Message</label>
                                        <textarea
                                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 p-3 transition duration-200"
                                            placeholder="Your Message"
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mt-4">
                                        <ReCAPTCHA
                                            sitekey="HHIJJ"
                                            onChange={handleReCAPTCHAChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:shadow-lg transition duration-200 transform hover:scale-105"
                                    >
                                        Download Sample Report
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Attractive Recent Market Reports */}
            <div className="mt-10 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Recent Market Research Reports</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pressReleases.map((release, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200">
                            <h4 className="text-lg font-medium text-gray-800">{release.title}</h4>
                            <p className="text-sm text-gray-500">
                                <span>{formatDate(release.createdAt)}</span> | <span>{release.category}</span>
                            </p>
                            <Link to={`/view_press_release/${release._id}`} className="mt-2 inline-block bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-lg hover:bg-blue-500 transition duration-200">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ViewPressRelease;