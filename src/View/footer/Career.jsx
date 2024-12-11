

const Career = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-white py-6 mt-20 px-4 sm:px-6 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4 animate__animated animate__fadeIn">
          Join Our Team
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
          At Intent Market Research, we are driven by innovation and excellence. We are looking for passionate individuals to help us revolutionize market research.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
      </div>

      {/* Job Listings Section */}
      <div className="space-y-12 sm:space-y-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center sm:text-4xl font-semibold text-gray-800 mb-6">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Job Listing 1 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Market Research Analyst</h3>
              <p className="text-gray-600 mb-4">
                Join our team and contribute to groundbreaking market research that drives business success. You will gather and analyze data to provide key insights.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Apply Now
              </a>
            </div>

            {/* Job Listing 2 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Client Relationship Manager</h3>
              <p className="text-gray-600 mb-4">
                Your role will focus on building strong client relationships, ensuring seamless collaboration and project success. We need someone who thrives in a fast-paced environment.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Apply Now
              </a>
            </div>

            {/* Job Listing 3 */}
            <div className="bg-white shadow-xl rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Business Development Executive</h3>
              <p className="text-gray-600 mb-4">
                A go-getter who will drive new business opportunities and build long-lasting relationships with key stakeholders. Your efforts will directly contribute to our growth.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="mt-16 sm:mt-24 bg-teal-100 py-12 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">Why Work With Us?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            At Intent Market Research, we believe in empowering our employees and fostering a creative and collaborative environment. Here’s what we stand for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and encourage innovative thinking to solve problems and create value.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Collaboration</h4>
              <p className="text-gray-600">
                We believe in the power of teamwork, working closely together to achieve common goals and drive success.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring quality, precision, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
