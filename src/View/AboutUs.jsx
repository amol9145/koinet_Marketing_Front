
import Aboutimage from '../assets/about.webp'
function AboutUs() {
    return (
        <div className="bg-gray-50 mt-20">

            {/* About Us Section */}
            <section className="text-start py-2 px-8 bg-sky-900">
                <h1 className="text-4xl font-bold text-start py-2 mt-4 text-white ">About Us</h1>
                <p className="text-start text-white text-1xl mt-2">
                    At Koinet Market Research, we specialize in providing actionable insights that help businesses understand their market and make informed decisions.
                </p>

            </section>

            {/* Insights & Strengths Section */}
            <section className=" flex flex-col md:flex-row justify-center items-center mx-10">
                {/* Insights Left Side */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-sky-900 mb-4 tracking-widest uppercase">Our Insights</h2>
                    <p className="text-lg text-gray-900 mb-4">
                        We deliver high-quality market insights tailored to your specific business needs. With extensive research and analysis, we empower businesses to navigate the complexities of the market and drive growth.
                    </p>
                    <p className="text-lg text-gray-900 mb-4">
                        Our expert analysts are skilled in providing actionable insights based on the latest market trends, consumer behavior, and competitor analysis. We ensure that our clients receive data-driven solutions that foster long-term success.
                    </p>
                    <p className="text-lg text-gray-900">
                        Through strategic insights, businesses can optimize their operations, anticipate market changes, and make informed decisions. Our dedication to precision and expertise ensures that you stay ahead of the competition.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2  mt-2 md:mt-0">
                    <img
                        src={Aboutimage}
                        alt="Market Research"
                        className="rounded-lg  w-full h-90 object-cover"
                    />
                </div>
            </section>

            {/* Our Offerings Section */}
            <section className="py-8 px-8 bg-gray-100 mt-4">
                <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-6 tracking-widest uppercase">Our Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Syndicated Reports */}
                    <div className="bg-white rounded-lg shadow-lg text-center p-4">
                        <h3 className="text-xl font-extrabold text-sky-900 mb-4 text-start">Syndicated Reports</h3>
                        <p className="text-black font-bold mb-4 text-start">
                            Explore emerging market trends with industry-specific research reports.
                        </p>
                        <br/>
                        <p className='text-gray-900 mb-4 text-start'>Our industry-focused syndicated research reports offer quantifiable market insights to our clients exploring new markets, developing new products or looking for new growth opportunities. These reports are formulated with strong attention to detail and broader industry audience to ensure sustainable organization development.</p>

                    </div>
               
                    {/* Competitor Analysis */}
                    <div className="bg-white rounded-lg shadow-lg text-center p-4">
                        <h3 className="text-xl font-extrabold text-sky-900 mb-4 text-start">Competitor Analysis</h3>
                        <p className="text-black font-bold mb-4 text-start">
                            In-depth analysis of competitors to help refine your market strategy.
                        </p>
                        <br/>
                        <p className='text-gray-900 mb-4 text-start'>We offer complete tailored market intelligence report to meet our client’s unique business requirements. Our cross-functional consultants along with subject matter experts design tailor-made solution to meet your business growth objective. We offer a range of services from market assessment, competitor intelligence, go-to-market strategy along with many more.</p>
                       
                    </div>
                </div>
            </section>

            {/* Consulting Services Section */}
            <section className="py-16 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-sky-900 mb-6 tracking-widest uppercase">Consulting Services</h2>
                    <p className="text-lg text-gray-900 mb-8">
                        Our consulting services offer strategic guidance for market entry, customer segmentation, competitive analysis, and more. We work closely with businesses to drive growth and efficiency.
                    </p>
                    <p className="text-lg text-gray-900">
                        Whether you exploring new markets or seeking to optimize your current strategies, our expert consultants are here to assist every step of the way.
                    </p>
                </div>
            </section>

            {/* Why Koinet Market Research Section */}
            <section className="py-16 px-8 bg-gray-100">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-sky-900 mb-6 tracking-widest uppercase">Why Choose Koinet Market Research?</h2>
                    <p className="text-lg text-gray-900 mb-8 max-w-3xl mx-auto">
                        Koinet Market Research provides customized, data-driven insights that enable businesses to make informed decisions. Our team of experienced researchers and consultants delivers actionable solutions backed by thorough data analysis. Partner with us for high-quality research and strategic growth opportunities.
                    </p>
                </div>
            </section>

            {/* What Makes Us Unique Section */}
            <section className="py-16 px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-sky-900 mb-6 tracking-widest uppercase">What Makes Us Unique?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {/* Unique Factor 1 */}
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
                            <h3 className="text-xl font-bold text-sky-900 mb-4">Tailored Insights</h3>
                            <p className="text-gray-900">
                                We provide bespoke market research solutions designed specifically for your business needs.
                            </p>
                        </div>
                        {/* Unique Factor 2 */}
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
                            <h3 className="text-xl font-bold text-sky-900mb-4">Expert Team</h3>
                            <p className="text-gray-900">
                                Our team consists of industry experts who understand the complexities of global markets.
                            </p>
                        </div>
                        {/* Unique Factor 3 */}
                        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
                            <h3 className="text-xl font-bold text-sky-900 mb-4">Innovative Solutions</h3>
                            <p className="text-gray-900">
                                We use cutting-edge research tools and methodologies to deliver actionable insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
