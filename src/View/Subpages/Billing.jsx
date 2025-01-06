import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../Constant/ConstantFiles";
import Razorpay from "react-razorpay/dist/razorpay";
import { sendEmail } from "../../../redux/slices/createreport/ViewReportDetails";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Billing = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { reportDetails, selectedLicense } = location.state || {};
    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        designation: "",
        email: "",
        phone: "",
    });

    if (!reportDetails || !selectedLicense) {
        return <p>No report details or license selected.</p>;
    }

    let price = 0;
    if (selectedLicense === "single-user") {
        price = reportDetails.singleUserPrice;
    } else if (selectedLicense === "multi-user") {
        price = reportDetails.multiUserPrice;
    } else if (selectedLicense === "enterprise") {
        price = reportDetails.enterprisePrice;
    }

    const licenseDisplay = selectedLicense
        ? `${selectedLicense.charAt(0).toUpperCase() + selectedLicense.slice(1)} License`
        : "No License Selected";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const isFormValid = () => {
        return Object.values(billingDetails).every((value) => value.trim() !== "");
    };

    const handlePayment = async () => {
        if (!isFormValid()) {
            alert("Please fill all billing details before proceeding.");
            return;
        }

        const token = localStorage.getItem("userToken");
        let amount, currency;

        switch (selectedLicense) {
            case "single-user":
                amount = reportDetails.singleUserPrice * 100;
                currency = reportDetails.singleUserCurrency || "INR";
                break;
            case "multi-user":
                amount = reportDetails.multiUserPrice * 100;
                currency = reportDetails.multiUserCurrency || "INR";
                break;
            case "enterprise":
                amount = reportDetails.enterprisePrice * 100;
                currency = reportDetails.enterpriseCurrency || "INR";
                break;
            default:
                alert("Please select a valid license type.");
                return;
        }

        try {
            const createOrderResponse = await axios.post(`${baseUrl}/create-order`, {
                amount,
                currency,
                licenseType: selectedLicense,
                token,
            });

            const { id: order_id, amount: orderAmount, currency: orderCurrency } = createOrderResponse.data.data;

            const options = {
                key: "rzp_test_cUDdmmAIerYlSG",
                amount: orderAmount,
                currency: orderCurrency,
                name: "Report Purchase",
                description: `Purchase ${selectedLicense} license`,
                order_id,
                handler: async (response) => {
                    const { razorpay_payment_id, razorpay_signature } = response;

                    try {
                        const verifyResponse = await axios.post(`${baseUrl}/verify-payment`, {
                            razorpay_order_id: order_id,
                            razorpay_payment_id,
                            razorpay_signature,
                            token,
                            amount: orderAmount,
                            currency: orderCurrency,
                        });

                        alert(verifyResponse.data.message);

                        // Send Email After Successful Payment
                        try {
                            await dispatch(
                                sendEmail({
                                    user_name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                                    user_email: billingDetails.email,
                                    user_link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                                    report_title: reportDetails.title,
                                })
                            ).unwrap();
                        } catch (emailError) {
                            console.error("Failed to send email:", emailError);
                            toast.error("Failed to send confirmation email.");
                        }
                    } catch (error) {
                        console.error("Payment verification failed:", error);
                        alert("Payment verification failed! Please contact support.");
                    }
                },
                prefill: {
                    name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                    email: billingDetails.email,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const razorpayInstance = new Razorpay(options);
            razorpayInstance.open();

            razorpayInstance.on("payment.failed", (response) => {
                console.error("Payment failed:", response.error);
                alert("Payment failed! Please try again.");
            });
        } catch (error) {
            console.error("Error creating order:", error);
            alert("Unable to create payment order. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-5 mt-10">
            <div className="flex flex-wrap lg:flex-nowrap p-2 gap-2 mt-10">
                {/* Left Section */}
                <div className="w-full lg:w-2/3">
                    {/* Report Name Section */}
                    <div className="border rounded-lg shadow-lg bg-white text-black mb-6">
                        <div className="p-4 bg-sky-900 text-white text-lg font-semibold">Report Name</div>
                        <div className="p-4">
                            <h3 className="text-lg">{reportDetails.title}</h3>
                            <p className="text-sm leading-6 mt-2">Category: {reportDetails.category}</p>
                            <p className="mt-4 font-bold text-right ">
                                <span className="text-lg text-sky-900 bg-yellow-200 p-2 rounded-lg"> Price: ${price}</span>
                            </p>
                        </div>
                    </div>

                    {/* Billing Details Section */}
                    <div className="border rounded-lg shadow-lg bg-white text-black mb-6">
                        <div className="p-4 border-b bg-sky-900 text-white text-lg font-semibold">Billing Details</div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.keys(billingDetails).map((field) => (
                                <input
                                    key={field}
                                    name={field}
                                    value={billingDetails[field]}
                                    onChange={handleChange}
                                    type={field === "email" ? "email" : "text"}
                                    placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                                    className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/3">
                    {/* Order Summary Section */}
                    <div className="border rounded-lg shadow-lg bg-white text-black mb-6">
                        <div className="p-4 bg-sky-900 text-white text-lg font-semibold">Order Summary</div>
                        <div className="p-4">
                            <div className="flex justify-between mb-2">
                                <span>License Type</span>
                                <span>{licenseDisplay}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Items In Cart</span>
                                <span>1</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Price</span>
                                <span>${price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                        onClick={handlePayment}
                        disabled={!isFormValid()}
                        className={`w-full mt-3 px-5 py-2.5 text-white rounded-lg ${isFormValid()
                            ? "bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {!isFormValid()
                            ? "Complete all required fields to proceed with the purchase"
                            : `Proceed to Payment : $${price}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Billing;
