import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Constant/ConstantFiles";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "india",
    street: "",
    city: "",
    zip: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/marketing/contact_page_data`, formData);
      console.log(response)
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "india",
        street: "",
        city: "",
        zip: "",
        message: "",
        terms: false,
      });
    } catch (error) {
      toast.error("An error occurred while submitting the form.", error);

    }
  };


  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-4xl font-extrabold mb-6">
                Ready to Drive Your Market Insights Forward?
              </h1>
              <p className="text-lg sm:text-2xl font-light mb-2">
                We provide actionable market research insights to help your business grow and succeed.
              </p>
            </div>
            <div className="lg:w-1/2 mt-4">
              <div className="bg-white shadow-lg p-4 rounded-2xl space-y-4">
                <form onSubmit={handleSubmit}>
                  {/* Full Name and Company Name Fields */}
                  <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.country}
                        onChange={handleChange}
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
                        value={formData.street}
                        onChange={handleChange}
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
                        value={formData.city}
                        onChange={handleChange}
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
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your zip code"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-2 text-gray-700 border rounded-lg focus:outline-none"
                      placeholder="Tell us your market research needs..."
                      required
                    ></textarea>
                  </div>

                  {/* Conditions */}
                  <div className="mb-3 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
                      I agree to the <a href="#" className="text-blue-500">terms and conditions</a>.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Submit
                      </span>
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
