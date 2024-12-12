import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import striptags from "striptags";
import { baseUrl } from "../../Constant/ConstantFiles";

function Pressreleased() {
    const [pressReleases, setPressReleases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function truncateText(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }


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

    return (
        <>
            <section>
                <div className="mt-20">
                    <h1 className="text-3xl bg-sky-900 text-white font-bold text-start  py-3">
                        <span className="ms-4">Press Releases</span>
                    </h1>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {pressReleases.map((release, index) => (
                            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{release.category}</span>
                                    <span className="mt-1 text-gray-500 text-sm">Published: {formatDate(release.createdAt)}</span>
                                    <span className="mt-1 text-gray-500 text-sm font-bold">Report ID: {release.reportId}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <Link to={`/view_press_release/${release._id}`}>
                                        <h2 className="text-1xl font-medium text-blue-500 title-font mb-2">
                                            {release.title}
                                        </h2>
                                    </Link>
                                    <p className="leading-relaxed">
                                        {truncateText(striptags(release.description), 50)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex justify-center my-2">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center space-x-2">
                        <li>
                            <button

                                className="px-4 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700"  >
                                Previous
                            </button>
                        </li>
                        <li >
                            <button className="px-4 py-2 rounded-fullbg-blue-500 text-black bg-gray-200 hover:bg-blue-300" >
                                1
                            </button>
                        </li>
                        <li>
                            <button className="px-4 py-2 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 text-gray-700" >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default Pressreleased;
