import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "All Categories",
  "Consumer Goods",
  "Automotive and Transportation",
  "Building and Construction",
  "Chemicals and Materials",
  "Energy and Power",
  "Food and Beverage",
  "Aerospace & Defence Industry",
  "Agriculture and Agri Inputs",
  "Animal Nutrition and Health",
  "Packaging",
];

const reports = [
  {
    category: "Consumer Goods",
    title:
      "Mineral Cosmetics Market By Product Type (Face Cosmetics, Eye Cosmetics, Lips Cosmetics), By Distribution Channel (Retail Distribution, E-Commerce, Beauty Centre & Spas), By Nature (Organic, Inorganic) and by Region; Global Insights & Forecasts (2024 - 2030)",
    reportId: "CG4464",
    published: "November, 2024",
    description:
      "According to Intent Market Research, the Mineral Cosmetics Market is expected to grow from USD 4.1 billion in 2023 at a CAGR of 8.6% to touch USD 7.3 billion by 2030. The Mineral Cosmetics market is competitive; where the prominent players include BASF, Estée Lauder Companies, L’Oreal, Merck, Mineralissima Mineral Makeup, Clariant, Revlon, and Shiseido Company.",
  },
  // Add more report objects here as needed
];

const Allexpertise = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredReports, setFilteredReports] = useState(reports);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "All Categories") {
      setFilteredReports(reports);
    } else {
      const filtered = reports.filter((report) => report.category === category);
      setFilteredReports(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-10 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10 drop-shadow-lg text-white bg-indigo-900">
          Explore Our Expertise Across All Categories
        </h1>

        {/* Search Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-80 bg-gray-200 text-gray-800 rounded-lg px-4 py-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Reports Section */}
        <section>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                {filteredReports.map((report, index) => (
                  <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">
                        {report.category}
                      </span>
                      <span className="mt-1 text-gray-500 text-sm">
                        Published: {report.published}
                      </span>
                      <span className="mt-1 text-gray-500 text-sm font-bold">
                        Report ID: {report.reportId}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <Link to={`/latest_reports/viewreportdetails/${report.reportId}`}>
                        <h2 className="text-1xl font-medium title-font mb-2 text-blue-500">
                          {report.title}
                        </h2>
                      </Link>
                      <p className="leading-relaxed">{report.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-center my-3">
              <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <Link
                      to={"#"}
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </Link>
                  </li>
                  {[1, 2, 3, 4, 5].map((page, index) => (
                    <li key={index}>
                      <Link
                        to={"#"}
                        className={`flex items-center justify-center px-3 h-8 leading-tight ${page === 3
                            ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          }`}
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to={"#"}
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Allexpertise;