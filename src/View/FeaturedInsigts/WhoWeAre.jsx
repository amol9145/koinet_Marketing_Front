import { useState } from "react";
import { Link } from "react-router-dom";

function WhoWeAre() {
    const [activeTab, setActiveTab] = useState("Trend_analysis");
    return (
        <>
            <div className=" bg-gradient-to-r py-12 ">
                {/* Header Section */}
                <div className="text-start mb-12 mt-12 py-4 bg-sky-900">
                    <h1 className="ms-4 text-4xl sm:text-5xl font-extrabold  text-white mb-4">
                        Who We Are
                    </h1>
                    <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl ms-4">
                        Welcome to Koinet Media ITES Pvt. Ltd. — your trusted partner in
                        market research solutions. Empowering businesses through data-driven insights.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r text-sky-900 mx-auto mt-6 rounded-full"></div>
                </div>
                <div className=" py-15 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://img.freepik.com/free-photo/working-girls-with-papers-table_23-2147764688.jpg?t=st=1733916182~exp=1733919782~hmac=17227dd87414eedad6d610816053b2bbf2d3d0de95bd719d411a73bea2f62c58&w=740" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p className="font-semibold text-gray-900 text-2xl mb-2">Empowering Growth with Insights That Matter</p>
                            <p className="leading-relaxed">At Koinet Marketing, we specialize in translating data into strategies that propel businesses forward. Our mission is to equip organizations with the knowledge and tools they need to thrive in a rapidly evolving global landscape.

                                Comprehensive Solutions for Every Industry
                                We deliver fact-based, in-depth market research and consulting services tailored to your unique objectives. Our expertise spans a wide range of industries, including:</p>
                            <ul className="p-2 border-2 rounded-lg mt-4 bg-orange-100">
                                <li>Chemicals & Materials</li>
                                <li>Healthcare</li>
                                <li>Food & Beverage</li>
                                <li>Automotive & Transportation</li>
                                <li>Energy & Power</li>
                                <li>Packaging</li>
                                <li>Industrial Equipment</li>
                                <li>Building & Construction</li>
                                <li>Aerospace & Defense</li>
                                <li>Semiconductor & Electronics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="text-gray-600 body-font mt-10">
                    <div>
                        <p className="text-center text-4xl font-bold">
                            <span className="bg-sky-900 p-4 text-white rounded-lg underline text-sm sm:text-base md:text-lg lg:text-4xl">
                                Why Koinet Market Research?
                            </span>
                        </p>
                    </div>
                    <div className="container px-5 py-20 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="">
                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font  text-gray-900 mb-1 tracking-wider text-2xl">Team of experts: </h2>
                                        <h3 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">Identify emerging market trends & dynamics in global markets!</h3>
                                        <p className="leading-relaxed">Our team of dedicated professionals help our clients pursue their business growth objectives along with sustainability and inclusion. In a constantly changing and challenging business environment our team develop comprehensive reports through expertise and cutting-edge competencies to help our clients growth.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font  text-gray-900 mb-1 tracking-wider text-2xl">Comprehensive Reports: </h2>
                                        <h3 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">Unlock exclusive insights to tackle market challenges and achieve your business objectives!</h3>
                                        <p className="leading-relaxed">Our research methodology gathers valuable information from trusted sources to meet the client requirements. Our reports are designed with robust research methodology considering information procurement, data analysis, market formulation and validation. These reports uphold ethical standards and provide insightful information for competitive advantages in their respective sectors, making them indispensable tools for individuals and businesses operating in complicated environments.</p>
                                    </div>
                                </div>

                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font  text-gray-900 mb-1 tracking-wider text-2xl">Tailored solutions:</h2>
                                        <h3 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider">We provide forward-looking insights to businesses, aiding them in tackling their unique challenges</h3>
                                        <p className="leading-relaxed">Our team of skilled analysts and consultants designs solutions rooted in facts and focuses on deep engagement with clients. Each of our services is highly adaptable and can be customized to suit the unique needs of each client.</p>
                                    </div>
                                </div>

                                <div className="flex relative pb-12">
                                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow pl-4">
                                        <h2 className="font-bold title-font  text-gray-900 mb-1 tracking-wider text-2xl">Compliance and ethical standards: </h2>
                                        <h3 className="font-medium title-font text-sm text-gray-600 mb-1 tracking-wider"> we consider ethical standards and compliance a fundamental part of our vision. </h3>
                                        <p className="leading-relaxed">We are dedicated to conduct our research with transparency, integrity, and strict adherence to applicable regulations. We place a high priority on safeguarding data privacy, maintaining confidentiality, and respecting industry standards.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div>
                        <p className="text-center text-4xl font-bold mb-10">
                            <span className="bg-sky-900 p-4 text-white rounded-lg underline text-sm sm:text-base md:text-lg lg:text-4xl">
                                What distinguishes us?
                            </span>
                        </p>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700 text-center">
                            <ul
                                className="flex flex-wrap justify-center -mb-px text-lg font-medium text-center"
                                id="default-tab"
                                role="tablist"
                            >
                                {[
                                    { id: "Trend_analysis", label: "Trend analysis" },
                                    { id: "Insight_driven_reports", label: "Insight-driven reports" },
                                    { id: "Industrial_Expertise", label: "Industrial Expertise" },
                                    { id: "Validation", label: "Validation" },
                                ].map((tab) => (
                                    <li className="me-2" role="presentation" key={tab.id}>
                                        <button
                                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                                ? "text-white border-blue-600 bg-sky-900 p-2"
                                                : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                                }`}
                                            type="button"
                                            role="tab"
                                            aria-controls={tab.id}
                                            aria-selected={activeTab === tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id="default-tab-content" className="text-center">
                            {[
                                {
                                    id: "Trend_analysis",
                                    content:
                                        "Our dedicated team of analysts and domain experts analyze latest industry trends with a better understanding of shifting consumer behaviors and market dynamics.",
                                },
                                {
                                    id: "Insight_driven_reports",
                                    content:
                                        "With our team and network of industry experts we deliver subject matter expertise and innovative solutions through our syndicated and custom reports.",
                                },
                                {
                                    id: "Industrial_Expertise",
                                    content:
                                        "We have a team of skilled experts, who are dedicated to deliver tailor-made solutions and forward-thinking insights to clients. With our insights, clients can make lasting impact and promote their business growth.",
                                },
                                {
                                    id: "Validation",
                                    content:
                                        "The validation process stands as the pivotal step in our methodology. Through a structured process, validate and we re-validate the data points, ensuring their reliability and compatibility for the final computations.",
                                },
                            ].map((tabContent) => (
                                <div
                                    key={tabContent.id}
                                    className={`p-4 rounded-lg bg-gray-50 ${activeTab === tabContent.id ? "block" : "hidden"
                                        }`}
                                    id={tabContent.id}
                                    role="tabpanel"
                                    aria-labelledby={`${tabContent.id}-tab`}
                                >
                                    <p className="text-lg text-gray-500 dark:text-gray-400 px-20">
                                        {tabContent.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Closing Section */}
                <div className="  mt-16 text-center bg-slate-100 py-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        Let’s Join Forces!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Join forces with us to leverage market insights and drive your business success.
                    </p>
                    <Link to={"/contact"} className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre
