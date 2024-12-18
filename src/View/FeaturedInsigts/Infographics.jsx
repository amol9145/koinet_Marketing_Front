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
                                        {/* Facebook Share */}
                                        <button
                                            type="button"
                                            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                                            onClick={() =>
                                                window.open(
                                                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                        'https://yourwebsite.com'
                                                    )}`,
                                                    '_blank'
                                                )
                                            }
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
                                            Share
                                        </button>

                                        {/* LinkedIn Share */}
                                        <button
                                            type="button"
                                            className="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#0077B5]/55 me-2 mb-2"
                                            onClick={() =>
                                                window.open(
                                                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                                        'https://yourwebsite.com'
                                                    )}`,
                                                    '_blank'
                                                )
                                            }
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

                                        {/* Twitter Share */}
                                        <button
                                            type="button"
                                            className="text-white bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 focus:ring-4 focus:outline-none focus:ring-[#1DA1F2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1DA1F2]/55 me-2 mb-2"
                                            onClick={() =>
                                                window.open(
                                                    'https://twitter.com/intent/tweet?text=Check%20this%20out!',
                                                    '_blank'
                                                )
                                            }
                                        >
                                            <svg
                                                className="w-4 h-4 me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 132.105-44.832-46.832-1.299-86.193-31.188-99.792-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.32-28.264-18.843-46.832-51.005-46.832-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.502 46.833-104.334 104.334-104.334 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.833-13.32 67.234-25.34-7.798 24.366-24.366 44.833-46.832 57.827 21.117-2.273 41.52-8.122 60.367-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
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
