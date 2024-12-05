import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../Constant/ConstantFiles";

function LatestReport() {
    const [reports, setReports] = useState([]);
    const [filteredReports, setFilteredReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        // Fetch reports data from the API
        axios
            .get(`${baseUrl}/get_reports`)
            .then((response) => {
                setReports(response.data.data); // Assuming the response data is an array of reports
                setFilteredReports(response.data.data); // Set initial filtered reports
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        if (category) {
            const filtered = reports.filter(
                (report) => report.category === category
            );
            setFilteredReports(filtered);
        } else {
            setFilteredReports(reports);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "short", year: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", options); // "en-GB" ensures DD MMM YYYY format
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <section>
                <div className="bg-sky-900 text-white mt-10 py-5">
                    <p className="text-4xl font-bold text-start mt-4">Industry Expertise</p>
                    <br />
                    <p>
                        Beyond delivering comprehensive reports, we inspire our clients to craft savvy growth strategies using the insights we provide-information that is consistently accurate, reliable, and invaluable.
                    </p>
                </div>
            </section>
            <section>
                <form className="w-full max-w-lg mx-auto my-6">
                    <label className="block mb-2 text-lg bg-red-600 rounded-lg p-2 text-center font-medium text-white ">
                        Search Report
                    </label>
                    <select
                        id="reports"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">All Categories</option>
                        <option value="Aerospace & Defense Industry">Aerospace & Defense Industry</option>
                        <option value="Agriculture and Agri Inputs">Agriculture and Agri Inputs</option>
                        <option value="Animal Nutrition & Health">Animal Nutrition & Health</option>
                        <option value="Automotive and Transportation">Automotive and Transportation</option>
                        <option value="Building & Construction, Infrastructure">
                            Building & Construction, Infrastructure
                        </option>
                    </select>
                </form>
            </section>
            <hr className="bg-gray-950 py-2" />
            <section>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            {filteredReports.length > 0 ? (
                                filteredReports.map((report) => (
                                    <div className="py-8 flex flex-wrap md:flex-nowrap" key={report.id}>
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">{report.category}</span>
                                            <span className="mt-1 text-gray-500 text-sm">Published: {formatDate(report.createdAt)}</span>
                                            <span className="mt-1 text-gray-500 text-sm font-bold">Report ID: {report.reportId}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <Link to={`/latest_reports/viewreportdetails/${report._id}`}>
                                                <h2 className="text-1xl font-medium title-font mb-2 text-blue-500">{report.title}</h2>
                                            </Link>
                                            <p className="leading-relaxed">{report.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No data available for the selected category.</p>
                            )}
                        </div>
                    </div>
                    <section className="flex justify-center mt-10 p-5">
                        <nav aria-label="Page navigation example">
                            <ul className="flex items-center space-x-2">
                                <li>
                                    <Link
                                        to="#"
                                        className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700"
                                    >
                                        Previous
                                    </Link>
                                </li>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <li key={page}>
                                        <Link
                                            to="#"
                                            className={`px-4 py-2 rounded-full ${page === 1
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200 hover:bg-blue-300"
                                                }`}
                                        >
                                            {page}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="#"
                                        className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700"
                                    >
                                        Next
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default LatestReport;
