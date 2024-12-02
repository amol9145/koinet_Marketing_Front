
function TermsAndConditions() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-yellow-50 mb-6 bg-slate-600 p-2 rounded-lg">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-700 mb-4 text-center">
                        By availing our services, you agree and promise to follow these conditions.
                    </p>

                    <div className="divide-y divide-gray-300">
                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Products and Services</h2>
                            <p className="text-gray-700">
                                Intent Market Research holds all the rights to change, modify, or discontinue any of its material or
                                services with or without prior notice.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Delivery</h2>
                            <p className="text-gray-700">
                                The delivery of physical reports is based on the commitments mentioned in the scope of work and accepted
                                by both parties.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Personal Information</h2>
                            <p className="text-gray-700">
                                We, at Intent Market Research, maintain 100% confidentiality of our user’s personal information. We
                                disclose the same to third-party publishers only with the customer’s full consent.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Liability</h2>
                            <p className="text-gray-700">
                                If any of our information, products, or services lead to monetary or statutory loss or damage to users, we
                                do not stand accountable.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Payment</h2>
                            <p className="text-gray-700">
                                At Intent Market Research, we request your approval to process payment through third-party gateways. All
                                payments are processed on behalf of{" "}
                                <a
                                    href="https://koinetmedia.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    https://koinetmedia.com/
                                </a>
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Warranty</h2>
                            <p className="text-gray-700">
                                As per the policy, we do not offer any kind of warranty or guarantee for our products and services.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline  font-semibold text-gray-800 mb-2">Refund and Cancellation</h2>
                            <p className="text-gray-700">
                                Please visit our{" "}
                                <a
                                    href="/refund-and-cancellation"
                                    className="text-blue-600 underline"
                                >
                                    Refund and Cancellation
                                </a>{" "}
                                page for more details.
                            </p>
                        </div>

                        <div className="py-4">
                            <h2 className="text-2xl underline font-semibold text-gray-800 mb-2">Trademarks</h2>
                            <p className="text-gray-700">
                                All our service marks, trademarks, trade names, and logos on and in products and services are proprietary
                                of their respective owners and protected under trademark and copyright law.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions
