import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchInfographics } from '../../../redux/slices/Infographicsslice';

function Infographics() {
    const dispatch = useDispatch();
    const { data: infographics, loading, error } = useSelector(
        (state) => state.infographics
    );

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredInfographics, setFilteredInfographics] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    useEffect(() => {
        dispatch(fetchInfographics());
    }, [dispatch]);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredInfographics(infographics);
        } else {
            const filtered = infographics.filter((item) =>
                item.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredInfographics(filtered);
        }
    }, [searchQuery, infographics]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Pagination logic
    const totalItems = filteredInfographics.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredInfographics.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <section>
                <div className="mt-20">
                    <h1 className="text-3xl bg-blue-800 font-bold text-start text-white py-3">
                        <span className="ms-4">Infographics</span>
                    </h1>
                </div>
            </section>
            <section>
                <form className="w-full max-w-lg mx-auto my-6">
                    <label className="block mb-2 text-lg bg-red-600 rounded-lg p-2 text-center font-medium text-white">
                        Search Infographics
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search by category..."
                        />
                    </div>
                </form>
            </section>
            <hr className="bg-black py-2" />
            <section className="text-gray-600 body-font">
                <div className="container px-4 sm:px-2 py-10 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        {currentItems.map((item, index) => (
                            <div className="p-4 w-full md:w-1/2 lg:w-1/3" key={index}>
                                <div className="flex rounded-lg h-full bg-blue-100 p-6 hover:p-4 flex-col">
                                    <Link to={`/infographics/viewInfographics/${item._id}`}>
                                        <div className="flex items-center mb-3">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-auto object-cover object-center rounded-lg"
                                            />
                                        </div>
                                    </Link>
                                    <Link to={`/infographics/viewInfographics/${item._id}`}>
                                        <p className="mb-2 text-black text-sm sm:text-base">{item.category}</p>
                                    </Link>
                                    <div className="flex items-center justify-center flex-wrap gap-2">
                                        <button
                                            type="button"
                                            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 8 19"
                                            >
                                                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                                            </svg>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center my-5">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
}

export default Infographics;
