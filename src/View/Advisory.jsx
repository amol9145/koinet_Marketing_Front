import { useState } from "react";

function Advisory() {
    const [activeIndex, setActiveIndex] = useState(null);
    {/*const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);
    const [activeIndex3, setActiveIndex3] = useState(null);
    const [activeIndex4, setActiveIndex4] = useState(null);*/}

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    {/*const toggleAccordion1 = (index) => {
        setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleAccordion2 = (index) => {
        setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleAccordion3 = (index) => {
        setActiveIndex3((prevIndex) => (prevIndex === index ? null : index));
    };
    const toggleAccordion4 = (index) => {
        setActiveIndex4((prevIndex) => (prevIndex === index ? null : index));
    };*/}
    return (
        <>

            <div className="mt-20">
                <div className="bg-sky-900 text-white mt-20 py-2">
                    <p className="text-4xl font-bold text-start py-2 mt-4"> Advisory Services</p>

                </div>

            </div>
            <section className=" text-black border-2 border-gray-200 rounded-lg p-4 my-3 mx-4">
                <div className="container px-5 py-4 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-6 px-6 mb-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg rounded-lg transition-transform transform ">
                            <div className="border-l-4 border-blue-500 pl-6">
                                <p className="text-black text-lg leading-relaxed tracking-wide">
                                    At <span className="font-bold text-blue-600">Koinet Market Research (KMR)</span>, we understand that our clients success relies on a complete and accurate assessment of market dynamics. Within market assessment services, we develop and provide valuable insights about the industry by analyzing market trends, customer demographics and behavior, market opportunities and drivers, and risk assessment to enable businesses to refine their strategies effectively.
                                </p>
                                <br />
                                <p className="text-black text-lg leading-relaxed tracking-wide">
                                    With our unique insights, organizations can assess product demand, identify unmet needs, enhance value propositions, and create marketing campaigns that resonate with their target audience. Our offerings serve as a compass, guiding businesses in making data-driven decisions for successful product launches, improved customer relationships, and a stronger positioning in the business landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/1  sm:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-fit" src="https://cdni.iconscout.com/illustration/premium/thumb/consultant-illustration-download-in-svg-png-gif-file-formats--call-logo-center-agent-customer-service-support-pack-business-illustrations-8327914.png?f=webp" alt="stats" />
                    </div>

                </div>


                <div className="my-5">
                    <p className="text-lg font-bold text-white dark:text-white ms-2 bg-sky-900 p-2 rounded-lg">Competitive Intelligence</p>
                </div>
                <div id="accordion-collapse" className="space-y-6">
                    {/* Accordion Item */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 1}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(1)}
                            >
                                <span>Growth Strategies</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 1 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR delves into specifics of market sizing, customer perspectives, industry trends & dynamics, etc. to formulate organic and inorganic growth strategies.</li>
                                    <li>Our recommendations enable clients to stay at the forefront in pursuing market expansion strategies leading to higher market shares and profitability.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 2}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span>Demand & Supply Analysis</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 2 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">

                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>
                                <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                <ul>
                                    <li>IMR tracks the complexities of supply networks by analyzing suppliers, raw material supplies, operational parameters, logistics networks, and so on</li>
                                    <li>We deliver high-value research services that are crucial for pricing strategies, sales forecasting, operational costs, etc. for informed Novision-making</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 3}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(3)}
                            >

                                <span>Product Opportunity Assessment</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 3 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="my-5">
                    <p className="text-lg font-bold text-black dark:text-white">Competitive Intelligence</p>
                    <div className="flex justify-center items-center rounded-lg">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/competitive-intelligence-illustration-download-in-svg-png-gif-file-formats--business-analysis-idea-data-strategy-ideas-strategic-planning-pack-illustrations-5624177.png?f=webp" alt="" className="my-3 w-80 h-80" />

                    </div>
                    <p>Intent Market Research provides a clear understanding of competitive dynamics through careful data collection, analysis, and interpretation. Through our competitive intelligence offerings, businesses can identify their unique sales considerations, differentiating factors, and areas of improvement.</p>
                    <br />
                    <p>Our insights empower organizations to precisely target their audience and set their brands apart from competitors. Through our proprietary competitive intelligence services, IMR helps businesses to understand their competition and fine-tune growth strategies.</p>
                </div>


                <p className=" my-5 text-lg font-bold text-white dark:text-white ms-2 bg-sky-900 p-2 rounded-lg">Few of our competitive intelligence services include the following:</p>
                <div id="accordion-collapse" className="space-y-6">
                    {/* Accordion Item 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 4}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(4)}
                            >
                                <span>Comppetative Threats</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 4 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR delves into specifics of market sizing, customer perspectives, industry trends & dynamics, etc. to formulate organic and inorganic growth strategies</li>
                                    <li>Our recommendations enable clients stay at the forefront in pursuing market expansion strategies leading to higher market shares and profitability</li>
                                </ul>
                            </div>
                        )}
                    </div>


                    {/* Accordion Item 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 5}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(5)}
                            >
                                <span>Benchmarketing Metrics</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 5 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">

                                <p className="text-gray-600 font-semibold dark:text-gray-400">Demand Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>
                                <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR tracks the complexities of supply networks by analyzing suppliers, raw material supplies, operational parameters, logistics networks, and so on</li>
                                    <li>We deliver high-value research services that are crucial for pricing strategies, sales forecasting, operational costs, etc. for informed Novision-making</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 6}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(6)}
                            >
                                <span>Competitor Tracking and Monitoring</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 6 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>

                            </div>
                        )}
                    </div>
                </div>
                <div className="my-5">
                    <p className="text-lg font-bold text-black dark:text-white ms-2">Competitive Intelligence</p>
                    <div className="flex justify-center items-center">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-growth-idea-illustration-download-in-svg-png-gif-file-formats--analytics-logo-strategic-planning-pack-illustrations-5501819.png?f=webp" alt="" className="my-5 w-100 h-100" />

                    </div>
                    <p>Intent Market Research partners with clients who are looking to succeed in global markets and achieve their business objectives. We develop detailed analyses of market entry strategies, ways to overcome potential challenges, and anticipate competitors’ reactions.</p>
                    <br />
                </div>
                <div>
                    <p className=" my-5 text-lg font-bold text-white dark:text-white ms-2 bg-sky-900 rounded-lg p-2 ">  Few of the strategic business objectives for which IMR supports business entities:</p>
                    <div id="accordion-collapse" className="space-y-6">
                        {/* Accordion Item 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                            <h2>
                                <button
                                    type="button"
                                    className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                    aria-expanded={activeIndex === 7}
                                    aria-controls="accordion-collapse-body-1"
                                    onClick={() => toggleAccordion(7)}
                                >
                                    <span>Mode of Entry</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </h2>
                            {activeIndex === 7 && (
                                <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>IMR delves into specifics of market sizing, customer perspectives, industry trends & dynamics, etc. to formulate organic and inorganic growth strategies</li>
                                        <li>Our recommendations enable clients stay at the forefront in pursuing market expansion strategies leading to higher market shares and profitability</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Accordion Item 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                            <h2>
                                <button
                                    type="button"
                                    className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                    aria-expanded={activeIndex === 8}
                                    aria-controls="accordion-collapse-body-1"
                                    onClick={() => toggleAccordion(8)}
                                >
                                    <span>Market Entry Barriers</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </h2>
                            {activeIndex === 8 && (
                                <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-600 font-semibold dark:text-gray-400">Competitor Reaction Assessment</p>
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                        <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                    </ul>
                                    <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>IMR tracks the complexities of supply networks by analyzing suppliers, raw material supplies, operational parameters, logistics networks, and so on</li>
                                        <li>We deliver high-value research services that are crucial for pricing strategies, sales forecasting, operational costs, etc. for informed Novision-making</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Accordion Item 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                            <h2>
                                <button
                                    type="button"
                                    className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                    aria-expanded={activeIndex === 9}
                                    aria-controls="accordion-collapse-body-1"
                                    onClick={() => toggleAccordion(9)}
                                >
                                    <span>Competitor Tracking and Monitoring</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-180" : ""}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </h2>
                            {activeIndex === 9 && (
                                <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                        <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                    </ul>

                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="my-5">
                    <p className="text-lg font-bold text-white dark:text-white ms-2 bg-sky-900 rounded-lg p-2">Strategic Alliances and Acquisition Services</p>
                </div>
                <div id="accordion-collapse" className="space-y-6">
                    {/* Accordion Item 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 10}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(10)}
                            >
                                <span>Strategic Alliance</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 10 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR delves into specifics of market sizing, customer perspectives, industry trends & dynamics, etc. to formulate organic and inorganic growth strategies</li>
                                    <li>Our recommendations enable clients stay at the forefront in pursuing market expansion strategies leading to higher market shares and profitability</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 11}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(11)}
                            >
                                <span>Mergers & Acquisitions</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 11 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">

                                <p className="text-gray-600 font-semibold dark:text-gray-400">Demand Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>
                                <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR tracks the complexities of supply networks by analyzing suppliers, raw material supplies, operational parameters, logistics networks, and so on</li>
                                    <li>We deliver high-value research services that are crucial for pricing strategies, sales forecasting, operational costs, etc. for informed Novision-making</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 12}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(12)}
                            >
                                <span>Mergers & Acquisitions</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 12 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">


                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>

                            </div>
                        )}
                    </div>
                </div>
                <div className="my-5">
                    <p className="text-lg font-bold text-white dark:text-white ms-2 bg-sky-900 p-2 rounded-lg">Supply Chain Optimization</p>
                </div>
                <div>
                    <p>Intent Market Research helps organizations focus on developing sustainability and resilience in their supply chain to deal with trade instability and mitigate disruptions. Through our insights on network optimization, inventory management, integrated business planning, transportation and logistics, we help our clients maximize the ROI.</p>
                    <p>In addition, with end-to-end supply chain optimization studies, we help companies reach the utmost supply chain performance by improving critical success factors such as cost (operational expenditures), speed (reduced lead time), and delivery (forecast accuracy).</p>
                </div>

                <div id="accordion-collapse" className="space-y-6">
                    {/* Accordion Item 1 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 13}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(13)}
                            >
                                <span>Supply Chain Overview</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 13 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR delves into specifics of market sizing, customer perspectives, industry trends & dynamics, etc. to formulate organic and inorganic growth strategies</li>
                                    <li>Our recommendations enable clients stay at the forefront in pursuing market expansion strategies leading to higher market shares and profitability</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform ">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 14}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(14)}
                            >
                                <span>Logistics Overview</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 14 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">

                                <p className="text-gray-600 font-semibold dark:text-gray-400">Demand Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>
                                <p className="text-gray-600 font-semibold dark:text-gray-400 mt-3">Supply Analysis:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>IMR tracks the complexities of supply networks by analyzing suppliers, raw material supplies, operational parameters, logistics networks, and so on</li>
                                    <li>We deliver high-value research services that are crucial for pricing strategies, sales forecasting, operational costs, etc. for informed Novision-making</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform">
                        <h2>
                            <button
                                type="button"
                                className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                aria-expanded={activeIndex === 15}
                                aria-controls="accordion-collapse-body-1"
                                onClick={() => toggleAccordion(15)}
                            >
                                <span>Low-Cost Country Sourcing</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-180" : ""}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </h2>
                        {activeIndex === 15 && (
                            <div id="accordion-collapse-body-1" className="p-5 bg-gray-50 border-t border-gray-200">

                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Intent Market Research analyzes economic conditions, consumer trends and preferences, availability, and advertising to assess product or service demand</li>
                                    <li>We develop strategies to understand behavior at the end-use levels and guide businesses on how pricing and service levels impact customer buying Novisions</li>
                                </ul>

                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="text-black body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white py-2 bg-sky-900 tracking-widest uppercase">Releted Reports</h1>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full  border-gray-200 border p-4 rounded-lg hover:bg-gray-100">
                                <p>AI-Based Predictive Maintenance Market Size Analysis, By Components Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in? </p>
                                <br />
                                <p className="text-gray-900">Published Date: Nov , 2024</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="text-black body-font  py-16">
                <div className="container px-5 mx-auto">
                    {/* Title Section */}
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white py-2 bg-sky-900 tracking-widest uppercase">
                            Featured Case Studies
                        </h1>
                        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                            Dive into our latest case studies that highlight innovative approaches and proven results.
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                    </div>

                    {/* Case Study Cards */}
                    <div className="flex flex-wrap m-4">
                        {/* Loop through cards */}
                        {Array(6).fill().map((_, index) => (
                            <div key={index} className="p-4 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-300  hover:shadow-xl">
                                    {/* Case Study Content */}
                                    <div className="p-6 relative">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-4 hover:text-white transition-all duration-300">
                                            AI in Manufacturing: Transforming Operations
                                        </h2>
                                        <p className="text-sm text-gray-600 opacity-75">
                                            Discover how AI-driven solutions are revolutionizing predictive maintenance in the manufacturing sector.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-4">Published: Nov, 2024</p>

                                        {/* Hover Effect (Overlay) */}
                                        <div className="absolute inset-0 bg-blue-300 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font bg-gradient-to-r from-white-200 to-skyblue-200 py-16">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-extrabold text-white bg-sky-900 tracking-widest uppercase mb-4 py-2">Related Thought Leadership</h1>
                        <p className="text-xl text-gray-800">Explore cutting-edge insights and research in AI-based predictive maintenance technology.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI-Based Predictive Maintenance Market Trends</h2>
                                <p className="text-gray-700 mb-4">
                                    Explore how AI is transforming predictive maintenance in industries and driving future innovations.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>
                        </div>

                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30" ></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered Solutions for Maintenance Optimization</h2>
                                <p className="text-gray-700 mb-4">
                                    Unlock the power of AI in maintenance to optimize performance and minimize downtime in complex industries.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30" ></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI in Predictive Maintenance: A Game Changer</h2>
                                <p className="text-gray-700 mb-4">
                                    Dive into the ways AI is revolutionizing predictive maintenance and delivering sustainable solutions.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30" ></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Revolutionizing Industries with AI Maintenance</h2>
                                <p className="text-gray-700 mb-4">
                                    Learn how AI is helping industries from automotive to energy leverage predictive maintenance for growth.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI-Driven Predictive Maintenance for Manufacturing</h2>
                                <p className="text-gray-700 mb-4">
                                    Investigate the growing role of AI in predictive maintenance for improving productivity in manufacturing.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="relative bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-100">
                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30" ></div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Predictive Maintenance & the Future of AI</h2>
                                <p className="text-gray-700 mb-4">
                                    A closer look at AI-powered predictive maintenance and how its shaping the future of various industries.
                                </p>
                                <p className="text-sm text-gray-600">Published Date: Nov 2024</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>



        </>
    )
}

export default Advisory
