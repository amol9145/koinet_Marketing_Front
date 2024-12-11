
function CCPA() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-6 mt-10">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl text-center font-bold text-white mb-4 bg-black p-2 rounded-lg">CCPA Privacy Policy</h1>
                    <p className="text-gray-700 mb-6">
                        The California Consumer Privacy Act (CCPA) provides specific rights to California residents regarding their
                        personal information. This section outlines your CCPA rights and describes our practices concerning personal
                        information where applicable.
                    </p>

                    <h2 className="text-2xl underline font-semibold text-gray-800 mb-4">Your CCPA Rights</h2>
                    <ul className="list-disc pl-6 mb-6 text-gray-700">
                        <li>
                            <strong>Request Information:</strong> You can request information up to two times within a 12-month period
                            about our collection, use, disclosure, and sale of your personal data, including:
                            <ul className="list-disc pl-6 mt-2">
                                <li>Categories of personal data collected in the preceding 12 months and their sources.</li>
                                <li>
                                    Commercial or business purposes for collecting, using, disclosing, or selling the information.
                                </li>
                                <li>Categories of third parties with whom the information is shared or sold.</li>
                                <li>Specific pieces of personal data collected upon a verifiable request.</li>
                            </ul>
                        </li>
                        <li className="mt-4">
                            <strong>Request Correction:</strong> You can request corrections of inaccurate personal information.
                        </li>
                        <li className="mt-4">
                            <strong>Request Deletion:</strong> You can request deletion of personal information subject to California
                            law limitations.
                        </li>
                        <li className="mt-4">
                            <strong>Opt-Out:</strong> You can request that we refrain from selling or sharing your personal
                            information.
                        </li>
                    </ul>

                    <h2 className="text-2xl underline  font-semibold text-gray-800 mb-4">Our Practices</h2>
                    <p className="text-gray-700 mb-6">
                        Intent Market Research (IMR) collects personal data for specific business purposes. We do not collect
                        sensitive personal information as defined under the CCPA. Our practices are outlined in our{" "}
                        <a href="#Privacy-Policy" className="text-blue-600 underline">
                            Privacy Policy
                        </a>
                        .
                    </p>
                    <p className="text-gray-700 mb-6">
                        You may opt out of personalized advertising by adjusting your preferences in our cookie banner when you first
                        visit our website.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline">How to Make a Request</h2>
                    <p className="text-gray-700 mb-6">
                        To request information or exercise your CCPA rights, contact us at:{" "}
                        <a href="mailto:info@koinetmedia.com" className="text-blue-600 underline">
                            info@koinetmedia.com
                        </a>{" "}
                        and mention <strong>CCPA Request</strong> in the subject line.
                    </p>
                    <p className="text-gray-700">
                        For additional details, review our full{" "}
                        <a href="#Privacy-Policy" className="text-blue-600 underline">
                            Privacy Policy
                        </a>
                        .
                    </p>

                </div>

            </div>
        </div>
    )
}

export default CCPA
