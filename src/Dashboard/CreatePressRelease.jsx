import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TimceApi, baseUrl } from "../Constant/ConstantFiles";


function CreatePressRelease() {
    const [reportDetails, setReportDetails] = useState({
        title: "",
        category: "",
        description: "", // Already a string
        reportId: "",
        file: null,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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

    const handleEditorChange = (content) => {
        setReportDetails((prev) => ({ ...prev, description: content }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", reportDetails.title);
        formData.append("category", reportDetails.category);
        formData.append("description", reportDetails.description); // String content
        formData.append("reportId", reportDetails.reportId);
        if (reportDetails.file) {
            formData.append("file", reportDetails.file);
        }

        try {
            setLoading(true);
            const response = await axios.post(`${baseUrl}/upload_press_release`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(response.data.message);
            toast.success("Press release submitted successfully!");
            setReportDetails({ title: "", category: "", description: "", reportId: "", file: null });
        } catch (error) {
            setMessage(error.response?.data?.error || "An error occurred.");
            toast.error("Failed to submit press release.");
        } finally {
            setLoading(false);
        }
    };

    const editorRef = useRef(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-i-100 via-blue-200 to-indigo-200 ">
            <div className="mx-auto bg-white rounded-xl shadow-lg">
                <div className="bg-blue-700 text-white py-5">
                    <h1 className="text-4xl font-bold px-2">Create Press Release</h1>
                </div>
             
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 rounded-sm border-2 border-gray-200 p-10"
                >
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

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Upload Sample Report File
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Content
                        </label>
                        <Editor
                            apiKey={TimceApi}
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            onEditorChange={handleEditorChange} // Use this instead of `onChange`
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
                            initialValue="Enter your text here..."
                        />



                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Report"}
                        </button>
                    </div>
                    {message && (
                        <p className="text-center text-lg font-semibold text-gray-700 mt-4">
                            {message}
                        </p>
                    )}
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreatePressRelease;
