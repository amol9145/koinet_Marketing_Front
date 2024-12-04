
function Contact() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500  text-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Left Column - Information */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-4xl font-extrabold mb-6">
                Ready to Drive Your Market Insights Forward?
              </h1>
              <p className="text-lg sm:text-2xl font-light mb-2">
                We provide actionable market research insights to help your business grow and succeed.
                Let us help you navigate the complex market landscape and uncover hidden opportunities.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-1/2  mt-4">
              <div className="bg-white shadow-lg p-4 rounded-2xl space-y-4">
                <form>
                  {/* Full Name and Company Name Fields */}
                  <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 text-sm font-semibold mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone Fields */}
                  <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Country, Street Address, City, Zip Code */}
                  <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="country" className="block text-gray-700 text-sm font-semibold mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        {/* Add more countries */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="street" className="block text-gray-700 text-sm font-semibold mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="street"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your street address"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-gray-700 text-sm font-semibold mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your zip code"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="mb-3">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full p-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us your market research needs..."
                      required
                    ></textarea>
                  </div>

                  {/* Conditions */}
                  <div className="mb-3 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                      I agree to the <a href="#" className="text-blue-500">terms and conditions</a>.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-5 rounded-full text-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Contact;
