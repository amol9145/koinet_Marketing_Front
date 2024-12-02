import React, { useState } from "react";
import { FaClipboardList, FaIndustry, FaLeaf, FaBuilding, FaCarSide } from "react-icons/fa";

const categories = [
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
  { category: "Automotive and Transportation", title: "EV Market Trends 2024", icon: <FaCarSide /> },
  { category: "Building and Construction", title: "Smart Cities Insights", icon: <FaBuilding /> },
  { category: "Chemicals and Materials", title: "Polymers Overview 2024", icon: <FaIndustry /> },
  { category: "Energy and Power", title: "Renewable Energy Prospects", icon: <FaClipboardList /> },
  { category: "Food and Beverage", title: "Global Food Trends 2024", icon: <FaLeaf /> },
  { category: "Aerospace & Defence Industry", title: "Aerospace Growth Forecast", icon: <FaIndustry /> },
  { category: "Agriculture and Agri Inputs", title: "Agri-Tech Innovations", icon: <FaLeaf /> },
  { category: "Animal Nutrition and Health", title: "Animal Feed Market 2024", icon: <FaClipboardList /> },
  { category: "Packaging", title: "Sustainable Packaging Insights", icon: <FaIndustry /> },
];

const Allexpertise = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredReports, setFilteredReports] = useState(reports);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "All Categories" || category === "") {
      setFilteredReports(reports); // Show all reports
    } else {
      const filtered = reports.filter((report) => report.category === category);
      setFilteredReports(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-sky-800 to-indigo-900 text-white p-10 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10 drop-shadow-lg">
          Latest Expertise Across All Categories
        </h1>

        {/* Search Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-80 bg-gray-200 text-gray-800 rounded-lg px-4 py-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Reports Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReports.map((report, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-100 text-gray-800 rounded-xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 transform transition"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-500 to-sky-500 text-white rounded-full mb-4">
                {report.icon}
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600">{report.category}</p>
              <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* No Reports Found */}
        {filteredReports.length === 0 && (
          <div className="text-center text-gray-300 mt-12 text-lg">
            No reports found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Allexpertise;
