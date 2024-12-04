
function GDPR() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl text-center font-bold text-white mb-4 bg-black p-2 rounded-lg mt-6">
                        GDPR Privacy Policy
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Intent Market Research (IMR) views the protection of your data in line with the GDPR as fundamental to doing
                        business. We are committed to protecting information, personal data, and client information under the GDPR
                        data protection policy. The GDPR’s requirements apply to EU residents’ personal information and anyone in
                        your organization who processes that data. IMR is committed to meeting GDPR’s six principles of data
                        processing and accountability.
                    </p>

                    <h2 className="text-2xl underline font-semibold text-gray-800 mb-4">
                        Data Sharing Practices
                    </h2>
                    <p className="text-gray-700 mb-6">
                        IMR carefully selects vendors and ensures they meet adequate data protection and security safeguards in
                        accordance with Article 28 of GDPR. For processors outside the European Economic Area, data transfers comply
                        with Chapter V of GDPR, including adequacy decisions or standard contractual clauses.
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700">
                        <li>Suppliers providing IT support to IMR.</li>
                        <li>Suppliers supporting marketing activities.</li>
                        <li>
                            Other third parties when necessary to comply with legal processes, prevent fraud, or ensure the security of
                            our services.
                        </li>
                    </ul>

                    <h2 className="text-2xl underline font-semibold text-gray-800 mb-4">
                        GDPR Data Subject Rights
                    </h2>
                    <p className="text-gray-700 mb-6">
                        As a data subject under GDPR, you are entitled to the following eight rights:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>
                            <strong>The Right to Receive Information:</strong> Request details about how your data is used, categorized,
                            and stored.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Access:</strong> Access your personal data and receive a copy of it.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Rectification:</strong> Correct inaccuracies or incomplete information in your personal
                            data.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Erasure:</strong> Request the deletion of your personal data from our records.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Restriction of Use:</strong> Restrict how we use your personal data according to your
                            preferences.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Portability:</strong> Receive your data in a structured, machine-readable format or
                            transfer it to another controller.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Object:</strong> Submit objections to our use of your data based on legitimate
                            interests.
                        </li>
                        <li className="mt-2">
                            <strong>The Right to Withdraw Consent:</strong> Withdraw consent at any time, without affecting prior lawful
                            processing.
                        </li>
                    </ul>

                    <h2 className="text-2xl underline font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h2>
                    <p className="text-gray-700 mb-6">
                        To exercise your GDPR rights or for additional information, contact us at:{" "}
                        <a href="mailto:info@koinetmedia.com" className="text-blue-600 underline">
                            info@koinetmedia.com
                        </a>
                    </p>
                    <p className="text-gray-700">
                        For further details, refer to our full{" "}
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

export default GDPR
