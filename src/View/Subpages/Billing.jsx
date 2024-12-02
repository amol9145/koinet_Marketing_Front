import { useState } from "react";

const Billing = () => {
    const [paymentMethod, setPaymentMethod] = useState("HDFC");

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-5 mt-10">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">


                <div className="flex flex-wrap lg:flex-nowrap p-6 gap-6">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3">
                        {/* Report Name Section */}
                        <div className="border rounded-lg shadow-lg bg-white text-black-800 mb-6">
                            <div className="p-4 border-b bg-blue-500 rounded-lg text-white text-lg font-semibold">
                                REPORT NAME
                            </div>
                            <div className="p-4">
                                <p className="text-sm leading-6">
                                    Diabetes Care Devices Market by Product Type (Blood Glucose
                                    Monitoring Devices, Insulin Delivery Devices, Continuous
                                    Glucose Monitoring Devices, Insulin Pumps, Smart Diabetes
                                    Management Devices, Lancets and Lancing Devices, Glucometers),
                                    By End-User Industry (Hospitals and Clinics, Homecare
                                    Settings, Diagnostic Centers, Diabetes Care Centers), By
                                    Technology (Wearable Devices, Non-invasive Devices, Smart
                                    Glucose Monitors, Connected Diabetes Devices), and By
                                    Distribution Channel (Online Sales, Retail Pharmacies,
                                    Hospitals and Clinics, Diabetes Care Centers); Global
                                    Insights & Forecast (2024 – 2030)
                                </p>
                                <p className="mt-4 font-bold text-right text-2xl text-blue-600">
                                    $4,250
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-500 text-sm flex items-center mt-3 underline"
                                >
                                    <span className="mr-2">👁️</span> View Report
                                </a>
                            </div>
                        </div>

                        {/* Billing Details Section */}
                        <div className="border rounded-lg shadow-lg bg-white text-black-800 mb-6">
                            <div className="p-4 border-b bg-blue-500 rounded-lg text-white text-lg font-semibold">
                                BILLING DETAILS
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Designation"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/3">
                        {/* Order Summary Section */}
                        <div className="border rounded-lg shadow-lg bg-white text-black-800 mb-6">
                            <div className="p-4 border-b bg-blue-500 rounded-lg text-white text-lg font-semibold">
                                ORDER SUMMARY
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between mb-2">
                                    <span>Licence Type</span>
                                    <span>Single-User License</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Items In Cart</span>
                                    <span>1</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Price</span>
                                    <span>$4,250.00</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Sub Total</span>
                                    <span>$4,250.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div className="border rounded-lg shadow-lg bg-white text-black-800 mb-6">
                            <div className="p-4 bg-blue-500 rounded-lg text-white text-lg font-bold">
                                PAYMENT METHOD
                            </div>
                            <div className="p-4">
                                <div className="flex items-center mb-3">
                                    <input
                                        type="radio"
                                        id="hdfc"
                                        value="HDFC"
                                        name="payment"
                                        checked={paymentMethod === "HDFC"}
                                        onChange={handlePaymentChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="hdfc" className="flex items-center">
                                        <img
                                            src="data:image/png;base64,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"
                                            alt="HDFC"
                                            className="h-6 mr-2"
                                        />
                                        HDFC Bank
                                    </label>
                                </div>
                                <div className="flex items-center mb-3">
                                    <input
                                        type="radio"
                                        id="icici"
                                        value="ICICI"
                                        name="payment"
                                        checked={paymentMethod === "ICICI"}
                                        onChange={handlePaymentChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="icici" className="flex items-center">
                                        <img
                                            src="https://e7.pngegg.com/pngimages/892/32/png-clipart-icici-bank-logo-bank-logos-thumbnail.png"
                                            alt="ICICI"
                                            className="h-6 mr-2"
                                        />
                                        ICICI Bank
                                    </label>
                                </div>
                                <div className="flex items-center mb-3">
                                    <input
                                        type="radio"
                                        id="sbi"
                                        value="SBI"
                                        name="payment"
                                        checked={paymentMethod === "SBI"}
                                        onChange={handlePaymentChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="sbi" className="flex items-center">
                                        <img
                                            src="https://e7.pngegg.com/pngimages/830/540/png-clipart-state-bank-of-india-probationary-officer-exam-sbi-po-ibps-probationary-officer-exam-ibps-po-institute-of-banking-personnel-selection-india-chapter-material-blue-text-thumbnail.png"
                                            alt="SBI"
                                            className="h-6 mr-2"
                                        />
                                        State Bank of India
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <div className="text-center">
                            <button className="bg-gradient-to-r px-2 from-purple-600 via-blue-600 to-green-400 hover:from-purple-700 hover:to-green-500 text-white py-3 rounded-lg text-lg font-bold">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;