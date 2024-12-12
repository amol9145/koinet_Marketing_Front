import { useEffect, useState } from "react";
import ServerImage from "../assets/server.png"
import Podium from "../assets/podium.png"
import LightImage from "../assets/light.png"
// import SvgMp4 from "../assets/svg.mp4"
import './Home.css';
import { Link } from "react-router-dom";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";



function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
    const [activeIndex, setActiveIndex] = useState(null);



    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100); // Simulates an animation delay
        return () => clearTimeout(timer);
    }, []);





    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const images = [
        {
            src: "https://thumbs.dreamstime.com/b/digital-marketing-strategy-analysis-concept-businessman-analyzing-advertising-data-seo-metrics-modern-laptop-commerce-311552818.jpg",
            alt: "Demo Image 1",
            link: "https://example.com/link-to-item-1"
        },
        {
            src: "https://media.istockphoto.com/id/1471378553/photo/digital-marketing-technology-global-business-analysis-of-online-marketing-strategies-and.jpg?s=612x612&w=0&k=20&c=64suuhCnLezbcusgxICtP2FSLAboxA9gOuWZskOFa8U=",
            alt: "Demo Image 2",
            link: "https://example.com/link-to-item-2"
        },
        {
            src: "https://t3.ftcdn.net/jpg/02/19/10/12/360_F_219101232_9gYB191gBUCxTSE455FUkmQB1MioqtVp.jpg",
            alt: "Demo Image 3",
            link: "https://example.com/link-to-item-3"
        },

    ];
    const reasons = [
        {
            title: "Tailored Market Insights",
            description:
                "We provide customized market research solutions that address your unique business challenges and opportunities.",
            icon: "📊",
        },
        {
            title: "Proven Expertise",
            description:
                "With decades of experience, we bring deep industry knowledge and a track record of delivering actionable insights.",
            icon: "💡",
        },
        {
            title: "Global Reach",
            description:
                "Our network spans across multiple regions, ensuring comprehensive and diverse data collection.",
            icon: "🌍",
        },
        {
            title: "Advanced Analytics",
            description:
                "We leverage cutting-edge tools and methodologies to deliver accurate and predictive market analysis.",
            icon: "⚙️",
        },
    ];


    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };


    const accordionData = [
        {
            id: 1,
            title: "Aerospace and Defence Industry",
            content:
                "Discover the latest advancements and insights in the Aerospace and Defence industry.",
            links: [
                { label: "Learn More", url: "https://example.com/aerospace" },
                { label: "Industry Overview", url: "https://example.com/overview" },
            ],
        },
        {
            id: 2,
            title: "Agriculture and Agri Inputs",
            content:
                "Explore our comprehensive reports on Agriculture and Agri Inputs industries.",
            links: [
                { label: "Explore Agriculture", url: "https://example.com/agriculture" },
            ],
        },
        {
            id: 3,
            title: "Animal Nutrition & Health",
            content:
                "Detailed insights into Animal Nutrition & Health, offering data-driven recommendations.",
            links: [
                { label: "Animal Insights", url: "https://example.com/animal" },
            ],
        },
        {
            id: 4,
            title: "Building & Construction, Infrastructure",
            content:
                "Uncover key trends shaping the Building & Construction industry globally.",
            links: [
                { label: "Explore Construction", url: "https://example.com/construction" },
            ],
        },
        {
            id: 5,
            title: "Automotive and Transportation",
            content:
                "Stay ahead with in-depth research on Automotive and Transportation trends.",
            links: [
                { label: "Automotive Trends", url: "https://example.com/automotive" },
            ],
        },
    ];

    const data = [
        {
            label: " Aerospace and Defence Industry",
            value: " Aerospace and Defence Industry",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Agriculture and Agri Inputs",
            value: "Agriculture and Agri Inputs",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Animal Nutrition & Health",
            value: "Animal Nutrition & Health",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Semiconductor and Electronics",
            value: "Semiconductor and Electronics",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Chemicals & Material",
            value: "Chemicals & Material",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative flex justify-center items-center h-screen bg-cover bg-center overflow-hidden bg-fixed"
            >
                {/* Animated Background SVG */}
                <div className="absolute inset-0">
                    <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 800 600"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00D4FF" />
                                <stop offset="50%" stopColor="#00204A" />
                            </radialGradient>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#radialGradient)" />

                        {/* Pulse Rings */}
                        <circle cx="400" cy="300" r="50" fill="none" stroke="white" strokeWidth="3">
                            <animate
                                attributeName="r"
                                from="50"
                                to="800"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="opacity"
                                from="1"
                                to="0"
                                dur="4s"
                                repeatCount="indefinite"
                            />

                        </circle>
                        <circle cx="400" cy="300" r="100" fill="none" stroke="white" strokeWidth="2">
                            <animate
                                attributeName="r"
                                from="100"
                                to="800"
                                dur="6s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="opacity"
                                from="1"
                                to="0"
                                dur="6s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>

                {/* Animated Content */}
                <div
                    className={`relative z-20 mx-auto text-center transition-all duration-1000 ease-in-out ${isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-90"
                        }`}
                >
                    <p className="mb-5 text-5xl font-bold text-white animate-slideDown tracking-wide">
                        Want to Expand into
                    </p>
                    <p className="mb-5 text-2xl font-bold text-yellow-400 animate-slideUp tracking-wider">
                        A NEW MARKET?
                    </p>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white animate-float">
                        We <span className="text-red-600 glow">invest</span> in the world’s{" "}
                        <span className="text-red-600 glow">potential</span>
                    </h1>
                    <p className="mb-8 text-lg font-bold text-yellow-400 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300 animate-zoomIn">
                        One-stop solution to uncover data from 13+ industries with 50+ countries
                        mapped
                    </p>
                    <form className="w-full max-w-md mx-auto animate-slideInUp">
                        <label
                            htmlFor="default-email"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search Reports...
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="default"
                                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg text-black shadow-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Reports....."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-800 hover:from-purple-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            </section>

            {/* INTRO SECTION */}
            <section className="text-gray-800 body-fontrelative overflow-hidden ">
                <div className="absolute inset-0  opacity-50"></div>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-10 relative">
                    {/* Left Content */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-10 flex flex-col md:items-start md:text-left mb-10md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 font-extrabold text-sky-900 tracking-wide leading-tight">
                            <span className="block  via-purple-500">
                                Igniting Growth-Focused Performance
                            </span>
                            <br />
                            <span className="text-2xl">
                                with Interconnected Segmentation

                            </span>
                        </h1>
                        <p className="mb-4 text-lg leading-relaxed text-gray-700">
                            At <span className="font-bold text-indigo-500">Koinet Market Research</span>, we deliver tailored research solutions that meet your unique needs. With advanced methodologies and industry expertise, we empower your business with actionable insights.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Let’s collaborate to unlock your businesss full potential. Reach out to discuss how we can help you grow.
                        </p>
                        <div className="flex justify-center ">
                            <Link to={"/contact"}
                                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">

                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    {/* Right Video Section */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-presentation-illustration-download-in-svg-png-gif-file-formats--analytics-logo-client-marketing-financial-meeting-pack-illustrations-4897493.png" alt="" />

                        </div>
                    </div>
                </div>
                {/* Floating Decorative Elements */}
                <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-float"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-blue-500 to-sky-500 rounded-full blur-3xl opacity-50 animate-float-reverse"></div>
            </section>
            <section className="relative text-gray-600 overflow-hidden my-10">

                {/* Main Container */}
                <div className="relative container px-5 mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col text-center w-full ">
                        <h1 className="sm:text-5xl text-3xl font-extrabold title-font mb-6 text-sky-900 tracking-widest uppercase">
                            Latest Release
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
                            Beyond delivering comprehensive reports, we inspire our clients to craft savvy growth strategies using insights that are accurate, reliable, and invaluable.
                        </p>
                    </div>

                    <div className="my-10">
                        <Tabs
                            value={data[0].value}
                            orientation="vertical"
                            className="bg-[#3A6D8C] p-6 md:flex md:flex-row flex-col"
                        >
                            <TabsHeader
                                className="w-full md:w-80 border-r-0 md:border-r-4 border-[#FCCD2A] mb-4 md:mb-0"
                            >
                                {data.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        className="bg-gray-100 rounded-lg hover:bg-blue-300 my-1 text-start hover:border-gray-900 hover:rounded-lg"
                                    >
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>

                            <TabsBody className="w-full md:w-auto">
                                {data.map(({ value, desc }) => (
                                    <TabPanel key={value} value={value} className="py-0 text-white">
                                        {desc}
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>


                </div>
            </section>
            {/* WHY Koinet MARKET RESEARCH?*/}
            <section className="text-gray-600 body-font bg-slate-50 my-10">
                <div className="container px-5  mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-5xl text-3xl font-extrabold title-font mb-6 text-sky-900 tracking-widest uppercase">
                            Why Koinet Market Research?
                        </h1>
                        <p className="text-lg leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-700">
                            Are you ready to take your business to new heights? Our tailored research services offer unparalleled insights and actionable strategies designed to fuel your growth.
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                        </div>
                    </div>
                    <div
                        className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 rounded-lg"

                    >
                        {/* Card 1 */}
                        <div className="p-2 md:w-1/3 bg-white scale-90 flex-col text-center items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300  rounded-lg ">
                            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white mb-5">
                                <img src={ServerImage} alt="Unique Data" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-grow ">
                                <h2 className="text-gray-900 text-xl font-bold  mb-2 ">Unique Data</h2>
                                <h3 className="text-indigo-700 text-lg font-semibold mb-3">Your Data-Driven Advantage</h3>
                                <p className="leading-relaxed text-start text-gray-600 px-3">
                                    Our extensive repository of accurate and reliable market research studies sets us apart. We meticulously analyze vast datasets to deliver validated insights that empower your decision-making. With Koinet Market Research, you’ll gain a competitive edge and make informed choices at every stage of your business journey.
                                </p>
                                <button className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                    <span className=" text-black relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                        Learn More...
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="p-2 md:w-1/3 scale-90 bg-white  flex-col text-center items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300  rounded-lg">
                            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white mb-5">
                                <img src={Podium} alt="One Platform" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-xl font-bold mb-2">One Platform</h2>
                                <h3 className="text-indigo-700 text-lg font-semibold mb-3">Empowering Your Growth with Data-Driven Insights</h3>
                                <p className="leading-relaxed text-start text-gray-600 px-3">
                                    Our research goes beyond the report. We provide actionable insights that inspire your team to craft winning growth strategies. With consistently accurate and reliable data, you’ll have the confidence to make informed decisions and drive your business forward.
                                </p>
                                <button className="  mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                    <span className=" text-black relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                        Learn More...
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="p-2 bg-white md:w-1/3 scale-90 flex flex-col text-center items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 rounded-lg relative">
                            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white mb-5">
                                <img src={LightImage} alt="Innovative Solutions" className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-xl font-bold mb-2">Innovative Solutions</h2>
                                <h3 className="text-indigo-700 text-lg font-semibold mb-3">Are you ready to elevate your decision-making?</h3>
                                <p className="leading-relaxed text-start text-gray-600 px-3">
                                    At Koinet Market Research, we offer a unique blend of accessibility, expertise, and cutting-edge methodologies. Our team of seasoned researchers is dedicated to providing you with the tools and insights you need to succeed.
                                </p>
                            </div>
                            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative text-black px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                    Learn More...
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* SLIDE IMAGES*/}
            <section className="relative w-full  py-8">
                {/* Carousel Container */}
                <div className="relative w-11/12 max-w-7xl mx-auto rounded-xl shadow-xl overflow-hidden">
                    {/* Carousel Items */}
                    <div className="relative h-56 md:h-96 overflow-hidden">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === currentIndex
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0"
                                    }`}
                            >
                                <a href={image.link}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center text-center px-4">
                                        <div className="text-white">
                                            <h2 className="text-3xl font-bold mb-2">{image.title}</h2>
                                            <p className="text-lg">{image.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for extra emphasis */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

                    {/* Indicators */}
                    <div className="absolute z-20 flex justify-center space-x-4 bottom-4 w-full">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "bg-white scale-150 shadow-xl"
                                    : "bg-white/50 hover:bg-white"
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {/* Previous Button */}
                    <button
                        type="button"
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/40 hover:bg-white/60 shadow-md group"
                    >
                        <svg
                            className="w-6 h-6 text-white group-hover:text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                d="M5 1L1 5l4 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        type="button"
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-white/40 hover:bg-white/60 shadow-md group"
                    >
                        <svg
                            className="w-6 h-6 text-white group-hover:text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                d="M1 9l4-4-4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </section>


            {/* Why Choose Us? */}
            <section className="relative  py-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h1 className="sm:text-5xl text-3xl font-extrabold title-font mb-6 text-sky-900 tracking-widest uppercase">
                            Why Choose Us?
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Discover what sets us apart as a leading market research partner for
                            businesses worldwide.
                        </p>
                    </div>

                    <div className="container mx-auto bg-blue-100 rounded-lg">
                        <div className="flex flex-col items-center justify-center my-6">
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
                                {/* Card 1 */}
                                <div className="border-r border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu1.svg"
                                        width="40"
                                        height="40"
                                        alt="Revenue"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            $<span id="count1">140</span> Bn
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Revenue Impact <br />
                                            Delivered
                                        </p>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="border-r border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu2.svg"
                                        width="40"
                                        height="40"
                                        alt="High-growth"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            <span id="count2">30000</span>+
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            High-growth <br />
                                            Opportunities
                                        </p>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="border-r border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu3.svg"
                                        width="40"
                                        height="40"
                                        alt="Connected Markets"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            <span id="count3">200000</span>
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Connected <br />
                                            Markets
                                        </p>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="border-r border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu4.svg"
                                        width="40"
                                        height="40"
                                        alt="Customers"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            <span id="count4">10000</span>+
                                        </h4>
                                        <p className="text-sm text-gray-600">Customers</p>
                                    </div>
                                </div>
                                {/* Card 5 */}
                                <div className="border-r border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu5.svg"
                                        width="40"
                                        height="40"
                                        alt="Promoter Score"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            <span id="count5">37</span>+
                                        </h4>
                                        <p className="text-sm text-gray-600">Net Promoter Score</p>
                                    </div>
                                </div>
                                {/* Card 6 */}
                                <div className="border-b p-3">
                                    <img
                                        className="mx-auto"
                                        src="https://mnmimg.marketsandmarkets.com/Pagespeed/assets/images/home/revenu6.svg"
                                        width="40"
                                        height="40"
                                        alt="Analysts"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-lg font-bold">
                                            <span id="count6">650</span>+
                                        </h4>
                                        <p className="text-sm text-gray-600">Analysts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-blue-50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-6 flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <div className="text-6xl text-indigo-500">{reason.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mt-4">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mt-2">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Trending Reports */}
            <section className="relative  py-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    {/* Section Title */}
                    <h1 className="sm:text-5xl text-3xl text-center font-extrabold title-font mb-6 text-sky-900 tracking-widest uppercase">
                        Our Trending Reports
                    </h1>

                    {/* Accordion Container */}
                    <div id="accordion-collapse" className="space-y-6">
                        {accordionData.map(({ id, title, content, links }) => (
                            <div
                                key={id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"                            >
                                <h2>
                                    <button
                                        type="button"
                                        className={`w-full flex items-center justify-between p-3 hover:text-white text-lg font-semibold text-sky-900 bg-gradient-to-r hover:bg-[#536493]`}
                                        aria-expanded={activeIndex === id}
                                        aria-controls={`accordion-collapse-body-${id}`}
                                        onClick={() => toggleAccordion(id)}
                                    >
                                        <span>{title}</span>
                                        <svg
                                            className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === id ? "rotate-180" : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                {activeIndex === id && (
                                    <div
                                        id={`accordion-collapse-body-${id}`}
                                        className="p-5 bg-gray-50 border-t border-gray-200"
                                    >
                                        <p className="text-gray-600 mb-4 leading-relaxed">{content}</p>
                                        <ul className="list-disc ml-5 space-y-2">
                                            {links.map((link, index) => (
                                                <li key={index}>
                                                    <Link

                                                        to={link.url}
                                                        className=" hover:underline transition-all duration-300"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


            </section>


        </>
    )
}

export default Home
