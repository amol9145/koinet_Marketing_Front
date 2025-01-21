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
        additionalEmails: [], // State to store additional emails
    });
    // console.log(reportDetails)
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

    const handleEmailChange = (e, index) => {
        const { value } = e.target;
        setBillingDetails((prev) => {
            const updatedEmails = [...prev.additionalEmails];
            updatedEmails[index] = value;
            return { ...prev, additionalEmails: updatedEmails };
        });
    };

    const addEmailField = () => {
        setBillingDetails((prev) => ({
            ...prev,
            additionalEmails: [...prev.additionalEmails, ""],
        }));
    };

    const removeEmailField = (index) => {
        setBillingDetails((prev) => {
            const updatedEmails = prev.additionalEmails.filter((_, i) => i !== index);
            return { ...prev, additionalEmails: updatedEmails };
        });
    };

    const isFormValid = () => {
        return Object.values(billingDetails).every((value) => value) &&
            (selectedLicense !== "multi-user" && selectedLicense !== "enterprise" || billingDetails.additionalEmails.every(email => email.trim() !== ""));
    };

    const handleUpdateBillingDetails = async () => {
        try {
            const response = await axios.put(
                `${baseUrl}/reports_update/${reportDetails._id}`, // Use the correct report ID
                billingDetails
            );
            if (response.status === 200) {
                toast.success("Billing details updated successfully!");
            }
        } catch (error) {
            console.error("Error updating billing details:", error);
            toast.error("Failed to update billing details. Please try again.");
        }
    };

    const handlePayment = async () => {
        if (!isFormValid()) {
            alert("Please fill all billing details before proceeding.");
            return;
        }

        let amount, currency;

        if (selectedLicense === "single-user") {
            amount = reportDetails.singleUserPrice * 100; // Convert to paise
            currency = reportDetails.singleUserCurrency || "INR";
        } else if (selectedLicense === "multi-user") {
            amount = reportDetails.multiUserPrice * 100;
            currency = reportDetails.multiUserCurrency || "INR";
        } else if (selectedLicense === "enterprise") {
            amount = reportDetails.enterprisePrice * 100;
            currency = reportDetails.enterpriseCurrency || "INR";
        } else {
            alert("Please select a valid license type.");
            return;
        }

        try {
            const createOrderResponse = await axios.post(`${baseUrl}/create-order`, {
                amount,
                currency,
                licenseType: selectedLicense, // Pass selected license type
            });

            const { data } = createOrderResponse.data;
            const { id: order_id, amount: orderAmount, currency: orderCurrency } = data;
            const { token } = createOrderResponse.data; // Extract token from response

            localStorage.setItem("paymentToken", token);

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
                            token, // Use token from localStorage
                            amount: orderAmount,
                            currency: orderCurrency,
                        });

                        alert(verifyResponse.data.message);
                        handleUpdateBillingDetails()
                        const storedToken = localStorage.getItem("paymentToken");
                        if (storedToken) {
                            try {
                                await dispatch(
                                    sendEmail({
                                        user_name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                                        user_email: billingDetails.email,
                                        user_link: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf?token=${storedToken}&license=${selectedLicense}`,
                                        report_title: reportDetails.title,
                                        additionalEmails: billingDetails.additionalEmails,
                                    })
                                ).unwrap();
                            } catch (emailError) {
                                console.error("Failed to send email:", emailError);
                                toast.error("Failed to send confirmation email.");
                            }
                        } else {
                            console.error("Token is missing in localStorage!");
                            toast.error("Token is missing. Please try again.");
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
                                field !== "additionalEmails" && (
                                    <input
                                        key={field}
                                        name={field}
                                        value={billingDetails[field]}
                                        onChange={handleChange}
                                        type={field === "email" ? "email" : "text"}
                                        placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                                        className="border w-full rounded-lg p-3 focus:outline-sky-500"
                                    />
                                )
                            ))}

                            {/* Add emails for multi-user or enterprise licenses */}
                            {(selectedLicense === "multi-user" || selectedLicense === "enterprise") && (
                                <div>
                                    <h4 className="font-semibold ">Additional Emails</h4>
                                    {billingDetails.additionalEmails.map((email, index) => (
                                        <div key={index} className="flex items-center gap-2 mt-2">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => handleEmailChange(e, index)}
                                                placeholder={`Email ${index + 1}`}
                                                className="border w-full rounded-lg p-2 focus:outline-sky-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeEmailField(index)}
                                                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addEmailField}
                                        className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
                                    >
                                        Add Emails
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="w-full lg:w-1/3">
                    <div className="border rounded-lg shadow-lg bg-white text-black p-4 mb-6">
                        <div className="p-4 border-b bg-sky-900 text-white text-lg font-semibold">Payment</div>
                        <div className="p-4">
                            <p className="font-semibold text-xl">License Type: {licenseDisplay}</p>
                            <p className="font-semibold text-lg mt-4">
                                Total Price: ${price}
                            </p>

                        </div>
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
        </div>
    );
};

export default Billing;
