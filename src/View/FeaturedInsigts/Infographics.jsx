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
                                    <div className="flex text-center items-center justify-center">
                                        <button
                                            type="button"
                                            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                                        >
                                            <svg
                                                className="w-4 h-4 me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 8 19"
                                            >
                                                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                                            </svg>
                                            share
                                        </button>
                                        <button
                                            type="button"
                                            className="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#0077B5]/55 me-2 mb-2"
                                        >
                                            <svg
                                                className="w-4 h-4 me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M100.28 448H7.4V149.5h92.88zm-46.44-340a53.37 53.37 0 1 1 53.44-53.37A53.37 53.37 0 0 1 53.84 108zM447.8 448h-92.68V302.4c0-34.7-.7-79.2-48.2-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.6V149.5h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.3-48.3 93.4 0 110.5 61.5 110.5 141.3V448z" />
                                            </svg>
                                            Share
                                        </button>

                                        <button
                                            type="button"
                                            className="text-white bg-[#E1306C] hover:bg-[#E1306C]/90 focus:ring-4 focus:outline-none focus:ring-[#E1306C]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E1306C]/55 me-2 mb-2"
                                        >
                                            <svg
                                                className="w-4 h-4 me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zM370.5 136.1c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zM398.8 76.5C375.7 53.4 345.8 40 311.8 40H136.2c-34 0-63.9 13.4-87 36.5-23.1 23.1-35.8 52.9-35.8 84.7v204.2c0 31.8 12.7 61.6 35.8 84.7 23.1 23.1 53 36.5 87 36.5h175.6c34 0 63.9-13.4 87-36.5 23.1-23.1 35.8-52.9 35.8-84.7V161.2c0-31.8-12.7-61.6-35.8-84.7z" />
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
