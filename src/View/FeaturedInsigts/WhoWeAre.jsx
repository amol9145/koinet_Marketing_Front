
function WhoWeAre() {
    return (
        <>
            <div className=" bg-gradient-to-r from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-20">
                {/* Header Section */}
                <div className="text-center mb-12 mt-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-sky-900 mb-4">
                        Who We Are
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Welcome to Koinet Media ITES Pvt. Ltd. — your trusted partner in
                        market research solutions. Empowering businesses through data-driven insights.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r text-sky-900 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Mission, Vision, and Values Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Mission */}
                    <div className="bg-blue-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-semibold text-black-800 mb-3">Our Mission</h3>
                        <p className="text-black-600">
                            To provide actionable insights that empower B2B companies to make informed decisions and drive growth in competitive markets.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-blue-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-semibold text-black-800 mb-3">Our Vision</h3>
                        <p className="text-black-600">
                            To be the leading market research partner for B2B organizations, revolutionizing the way businesses utilize data for success.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="bg-blue-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-semibold text-black-800 mb-3">Our Values</h3>
                        <ul className="list-disc list-inside text-black-600">
                            <li>Integrity and Transparency</li>
                            <li>Commitment to Excellence</li>
                            <li>Innovation and Adaptability</li>
                            <li>Customer-Centric Approach</li>
                        </ul>
                    </div>
                </div>

                {/* Expertise Section */}
                <div className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 py-12 rounded-lg shadow-lg">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                            What Sets Us Apart
                        </h2>
                        <p className="text-lg text-black-600 max-w-3xl mx-auto">
                            With a proven track record of delivering high-quality market research solutions, we specialize in transforming data into actionable insights that drive business results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Expertise 1 */}
                        <div className="bg-cyan-100 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-blue-950 mb-3">
                                Industry Expertise
                            </h3>
                            <p className="text-black-600">
                                Deep insights across diverse industries, including technology, healthcare, and finance.
                            </p>
                        </div>

                        {/* Expertise 2 */}
                        <div className="bg-cyan-100 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-blue-950 mb-3">
                                Tailored Solutions
                            </h3>
                            <p className="text-black-600">
                                Custom research services designed to meet unique business needs and objectives.
                            </p>
                        </div>

                        {/* Expertise 3 */}
                        <div className="bg-cyan-100 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-blue-950 mb-3">
                                Data Accuracy
                            </h3>
                            <p className="text-black-600">
                                Rigorous methodologies ensure precise and reliable market data for strategic decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        Ready to Collaborate?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Partner with us to harness the power of market insights and achieve your business goals.
                    </p>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre
