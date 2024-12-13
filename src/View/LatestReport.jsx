import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReports } from '../../redux/slices/ReportSlice';


function LatestReport() {
    const dispatch = useDispatch();
    const { data: reports, loading, error } = useSelector((state) => state.reports);
    const [filteredReports, setFilteredReports] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 5;

    useEffect(() => {
        dispatch(fetchReports());
    }, [dispatch]);

    useEffect(() => {
        setFilteredReports(reports);
    }, [reports]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setCurrentPage(1);
        if (category) {
            const filtered = reports.filter((report) => report.category === category);
            setFilteredReports(filtered);
        } else {
            setFilteredReports(reports);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    };

    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

    const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                    <label className="block mb-2 text-lg bg-red-600 rounded-lg p-2 text-center font-medium text-white">
                        Search Report
                    </label>
                    <select
                        id="reports"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className=" divide-y-2 divide-gray-100">
                        {currentReports.length > 0 ? (
                            currentReports.map((report) => (
                                <div className=" flex flex-wrap md:flex-nowrap mb-4" key={report.id}>
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700">{report.category}</span>
                                        <span className="mt-1 text-gray-800 text-sm">Published: {formatDate(report.createdAt)}</span>
                                        <span className="mt-1 text-black text-sm font-bold">Report ID: {report.reportId}</span>
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
                <section className="flex justify-center my-2">
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center space-x-2">
                            <li>
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700"
                                >
                                    Previous
                                </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <li key={page}>
                                    <button
                                        onClick={() => handlePageChange(page)}
                                        className={`px-4 py-2 rounded-full ${page === currentPage
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 hover:bg-blue-300"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700"
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>

        </div>
    );
}

export default LatestReport;
