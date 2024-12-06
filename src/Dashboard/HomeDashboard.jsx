import { useState } from 'react';
import CreateReports from './Createreports';
import CreatePressRelease from './CreatePressRelease';
import CreateInfographics from './CreateInfographics';
import OrdersList from './OrdersList';


const HomeDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // Default tab is 'dashboard'

    return (
        <div className="md:flex mt-10 py-10">
            <ul className="flex flex-col  space-y-4 mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                {/* Tab links */}
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveTab('dashboard')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'dashboard'
                            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveTab('uploadReport')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadReport'
                            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        Upload Report
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveTab('uploadPressRelease')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadPressRelease'
                            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        Upload Press Release
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveTab('uploadInfographics')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadInfographics'
                            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        Upload Infographics
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveTab('allOrders')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'allOrders'
                            ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                            }`}
                    >
                        All Orders
                    </a>
                </li>
            </ul>

            {/* Tab content */}
            <div className="w\-full"> {/* Full width applied here */}
                {activeTab === 'dashboard' && (
                      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 w-full">
                      {/* <AllFieldCount /> */}Hello
                  </div>
                )}
                {activeTab === 'uploadReport' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 w-full">
                        <CreateReports />
                    </div>
                )}
                {activeTab === 'uploadPressRelease' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 w-full">
                    <CreatePressRelease />
                </div>
                )}
                {activeTab === 'uploadInfographics' && (
                     <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 w-full">
                     <CreateInfographics />
                 </div>
                )}
                {activeTab === 'allOrders' && (
                      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 w-full">
                      <OrdersList />
                  </div>
                )}
            </div>
        </div>
    );
};

export default HomeDashboard;
