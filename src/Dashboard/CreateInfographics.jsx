import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRef, useState } from "react";
import { TimceApi, baseUrl } from "../Constant/ConstantFiles";


const CreateInfographics = () => {
    const [reportDetails, setReportDetails] = useState({
        title: "",
        category: "",
        singleUserPrice: "",
        multiUserPrice: "",
        enterprisePrice: "",
        file: null,
        imageUrl: "",
        summary: "",
        tableOfContents: "",
        methodology: "",
        reportId: "",
        infographics: "",
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReportDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setReportDetails((prev) => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", reportDetails.title);
            formData.append("category", reportDetails.category);
            formData.append("singleUserPrice", reportDetails.singleUserPrice);
            formData.append("multiUserPrice", reportDetails.multiUserPrice);
            formData.append("enterprisePrice", reportDetails.enterprisePrice);
            formData.append("file", reportDetails.file);
            formData.append("imageUrl", reportDetails.imageUrl);
            formData.append("reportId", reportDetails.reportId);
            formData.append("summary", reportDetails.summary);
            formData.append("tableOfContents", reportDetails.tableOfContents);
            formData.append("methodology", reportDetails.methodology);
            formData.append("infographics", reportDetails.infographics);

            const response = await axios.post(`${baseUrl}/infographics`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log("Report successfully submitted:", response.data);
                // Optionally reset form or show success message
            } else {
                console.error("Error submitting the report:", response.data);
            }
        } catch (error) {
            console.error("API error:", error);
        }
    };

    const editorRefs = useRef({
        summary: null,
        tableOfContents: null,
        methodology: null,
        infographics: null,
    });

    const logEditorContent = (field) => {
        if (editorRefs.current[field]) {
            setReportDetails((prev) => ({
                ...prev,
                [field]: editorRefs.current[field].getContent(),
            }));
        }
    };

    return (
        <div className="min-h-screen  ">
            <div className="mx-auto bg-white rounded-xl shadow-lg">
                <div className="bg-blue-700 text-white py-5">
                    <h1 className="text-4xl font-bold text-center">Create Infographics</h1>
                </div>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 rounded-sm border-2 border-gray-200 p-10"
                >
                    {/* Report Title */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Report Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={reportDetails.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter report title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Report ID
                        </label>
                        <input
                            type="text"
                            name="reportId"
                            value={reportDetails.reportId}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter report title"
                            required
                        />
                    </div>

                    {/* Report Category */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            value={reportDetails.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Pricing */}
                    {["singleUserPrice", "multiUserPrice", "enterprisePrice"].map(
                        (field, index) => (
                            <div key={index}>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Price ($):{" "}
                                    {field
                                        .replace(/([A-Z])/g, " $1")
                                        .replace("Price", "License")}
                                </label>
                                <input
                                    type="number"
                                    name={field}
                                    value={reportDetails[field]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Enter price"
                                    required
                                />
                            </div>
                        )
                    )}

                    {/* File Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Upload Report File
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Upload Image URL
                        </label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={reportDetails.imageUrl}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>

                    {/* Text Editors */}
                    {["summary", "tableOfContents", "methodology", "infographics"].map(
                        (field, index) => (
                            <div key={index}>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    {field.replace(/([A-Z])/g, " $1").toUpperCase()}
                                </label>
                                <Editor
                                    apiKey={TimceApi}
                                    onInit={(evt, editor) =>
                                        (editorRefs.current[field] = editor)
                                    }
                                    onBlur={() => logEditorContent(field)}
                                    init={{
                                        plugins: [
                                            // Core editing features
                                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                            // Your account includes a free trial of TinyMCE premium features
                                            // Try the most popular premium features until Dec 12, 2024:
                                            'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                                            // Early access to document converters
                                            'importword', 'exportword', 'exportpdf'
                                        ],
                                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                        tinycomments_mode: 'embedded',
                                        tinycomments_author: 'Author name',
                                        mergetags_list: [
                                            { value: 'First.Name', title: 'First Name' },
                                            { value: 'Email', title: 'Email' },
                                        ],
                                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                                        exportpdf_converter_options: { 'format': 'Letter', 'margin_top': '1in', 'margin_right': '1in', 'margin_bottom': '1in', 'margin_left': '1in' },
                                        exportword_converter_options: { 'document': { 'size': 'Letter' } },
                                        importword_converter_options: { 'formatting': { 'styles': 'inline', 'resets': 'inline', 'defaults': 'inline', } },
                                    }}

                                    initialValue={`Enter ${field.replace(
                                        /([A-Z])/g,
                                        " $1"
                                    )} here...`}
                                />
                            </div>
                        )
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateInfographics;
