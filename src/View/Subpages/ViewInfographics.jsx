import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Constant/ConstantFiles";

function ViewInfographics() {
    const { id } = useParams();  // Extract `id` from the URL params

    const [activeTab, setActiveTab] = useState("summary");
    const [infographic, setInfographic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("No ID provided in the URL.");
            return;
        }

        const fetchInfographicById = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/get_infographic/${id}`);
                console.log(response);
                setInfographic(response.data.data);  // Set the infographic data from API response
            } catch (err) {
                setError("Error fetching infographic data.");
                console.error("Error fetching infographic:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchInfographicById();  // Trigger API call if `id` exists
    }, [id]);  // Dependency array ensures this effect runs whenever `id` changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;




    return (
        <>
            <section>
                {/* Check if infographic exists */}
                {infographic && (
                    <div className="my-20 text-center">
                        <p className="text-blue-950 text-4xl font-bold">View Infographics Details</p>
                        <div className="container border-2 text-blue-700 border-black mx-auto my-5 rounded-lg py-2 text-start px-3">
                            <Link to="/some-link"> {/* Add a valid link path */}
                                <p className="font-semibold">{infographic.title}</p>
                            </Link>
                            <br />
                            <div className="text-black flex gap-4">
                                <p>Published: {new Date(infographic.createdAt).toLocaleDateString()}</p> {/* Format date if available */}
                                |
                                <p>Report ID: {infographic.reportId}</p> {/* Example field */}
                                |
                                <p>{infographic.category}</p> {/* Example category */}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <section>
                {infographic && (
                    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-4 lg:px-8">
                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 ">
                            <ul
                                className="flex flex-wrap -mb-px text-lg font-medium text-center"
                                role="tablist"
                            >
                                <li className="me-2 " role="presentation">
                                    <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "summary" ? "border-blue-600 bg-slate-300 text-blue-600" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("summary")}
                                        type="button"
                                        role="tab"
                                        aria-controls="summary"
                                        aria-selected={activeTab === "summary"}
                                    >
                                        Summary
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "toc" ? "border-blue-600 bg-slate-300 text-blue-600" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("toc")}
                                        type="button"
                                        role="tab"
                                        aria-controls="toc"
                                        aria-selected={activeTab === "toc"}
                                    >
                                        Table Of Content
                                    </button>
                                </li>
                                <li className="me-2" role="presentation">
                                    <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "methodology" ? "border-blue-600 bg-slate-300 text-blue-600" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("methodology")}
                                        type="button"
                                        role="tab"
                                        aria-controls="methodology"
                                        aria-selected={activeTab === "methodology"}
                                    >
                                        Methodology
                                    </button>
                                </li>

                                <li role="presentation">
                                    <button
                                        className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "infographics" ? "border-blue-600 bg-slate-300 text-blue-600" : "hover:text-gray-600 hover:border-gray-300"
                                            }`}
                                        onClick={() => setActiveTab("infographics")}
                                        type="button"
                                        role="tab"
                                        aria-controls="infographics"
                                        aria-selected={activeTab === "infographics"}
                                    >
                                        Infographics
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {activeTab === "summary" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.summary }} />
                                </div>
                            )}
                            {activeTab === "toc" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.tableOfContents }} />
                                </div>
                            )}
                            {activeTab === "methodology" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.methodology }} />
                                </div>
                            )}
                            {activeTab === "infographics" && (
                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: infographic.infographics }} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <p className="bg-blue-700 text-white p-2 rounded-full text-xs font-semibold tracking-widest uppercase title-font">Available Formats</p>
                                <div className="border-2 border-gray-200  rounded-lg flex gap-4 justify-center mt-3 p-3">
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/pdf.svg" alt="EXCEL" className="w-20 h-20" />
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/excel.svg" alt="EXCEL" className="w-20 h-20" />
                                    <img src="https://intentmarketresearch.com/assets/frontend/homepage/images/ppt.svg" alt="EXCEL" className="w-20 h-20" />
                                </div>


                            </div>

                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <p className="bg-blue-700 text-white p-2 rounded-full text-xs font-semibold tracking-widest uppercase title-font">REPORT BUYING OPTIONS</p>
                                {infographic && (
                                    <div className="mt-2">
                                        <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center ps-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Single-User License: US$ {infographic.singleUserPrice}</label>
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center ps-3">
                                                    <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Multi-User License: US$ {infographic.multiUserPrice}</label>
                                                </div>
                                            </li>
                                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div className="flex items-center ps-3">
                                                    <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enterprise License: US$ {infographic.enterprisePrice}</label>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="my-2">
                                            <Link to={"#"} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</Link>
                                        </div>
                                    </div>
                                )}
                            </div>


                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="mb-4">
                                <Link to={"#"} className="bg-pink-600 text-white p-2 rounded-lg  text-xs font-semibold tracking-widest uppercase title-font">Download Sample Reports</Link>
                            </div>

                            <div className="mb-4">
                                <Link to={"#"} className="bg-pink-600  text-white p-2 rounded-lg  text-xs font-semibold tracking-widest uppercase title-font">Request Customization</Link>
                            </div>

                            <div className="mb-4">
                                <Link to={"#"} className="bg-pink-600  text-white p-2 rounded-lg text-xs font-semibold tracking-widest uppercase title-font">Speek to Cunsultant</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ViewInfographics;
