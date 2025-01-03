import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { Editor } from "@tinymce/tinymce-react";
import { TimceApi } from '../Constant/ConstantFiles';
import { createReport } from '../../redux/slices/createreport/createnewreport';



const CreateReports = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.createnewreport);
  console.log(loading)

  const [reportDetails, setReportDetails] = useState({
    title: "",
    category: "",
    singleUserPrice: "",
    multiUserPrice: "",
    enterprisePrice: "",
    summary: "",
    tableOfContents: "",
    methodology: "",
    downloadSampleReport: "",
    reportId: "",
    file: null,
  });

  const categories = [
    "Automotive and Transportation",
    "Building & Construction, Infrastructure",
    "Chemical And Materials",
    "Energy And Mining",
    "Food And Beverage",
    "Aerospace & Defense Industry",
    "Agriculture and Agri Inputs",
    "Animal Nutrition & Health",
    "Battery",
    "Biotechnology",
    "Coating",
    "Construction",
    "Consumer Goods",
    "Cryptocurrency",
    "Diabetes",
    "DNA",
    "Electronics And Telecommunication",
    "Energy And Mining",
    "Healthcare",
    "Heavy Industry",
    "Medical Device",
    "Packaging",
    "Pharmaceutical",
    "Polymer",
    "Security",
    "Semiconductor",
    "Sensors",
    "Technology And Media",
    "Vaccines",
    "Vegan",
    "Warehouse Automation"
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
      // Dispatch the submitReport action
      await dispatch(createReport(reportDetails));

      // Clear form data on success
      setReportDetails({
        title: "",
        category: "",
        singleUserPrice: "",
        multiUserPrice: "",
        enterprisePrice: "",
        summary: "",
        tableOfContents: "",
        methodology: "",
        downloadSampleReport: "",
        reportId: "",
        file: null,
      });

      // Show success toast
      toast.success(successMessage);

    } catch (error) {
      console.log(error)
      toast.error(errorMessage || 'Error submitting the report.');
    }
  };

  const editorRefs = useRef({
    summary: null,
    tableOfContents: null,
    methodology: null,
    downloadSampleReport: null,
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
    <div className="min-h-screen bg-gradient-to-br from-i-100 via-blue-200 to-indigo-200 w-full ">
      <div className=" mx-auto bg-white rounded-xl shadow-lg ">
        <div className="bg-blue-700 text-white py-5 ">
          <h1 className="text-4xl font-bold mt-3">
            Create New Report
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-sm border-2 border-gray-200 p-10">
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

          {/* Amount */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price ($) : Single-User License
            </label>
            <input
              type="number"
              name="singleUserPrice"
              value={reportDetails.singleUserPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter amount"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price ($) : Multi-User License
            </label>
            <input
              type="number"
              name="multiUserPrice"
              value={reportDetails.multiUserPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter amount"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price ($):  Enterprise License
            </label>
            <input
              type="number"
              name="enterprisePrice"
              value={reportDetails.enterprisePrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter amount"
              required
            />
          </div>
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

          {/* SUMMARY */}
          {["summary", "tableOfContents", "methodology"].map(
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReports;