import { useState } from 'react';
import CreateReports from './Createreports';
import CreatePressRelease from './CreatePressRelease';
import CreateInfographics from './CreateInfographics';
import OrdersList from './OrdersList';
import MainDashboardBack from './MainDashboardBack';
import { Link, useNavigate } from 'react-router-dom';



const HomeDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard'); // Default tab is 'dashboard'

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('hasRedirected'); // Optional: Clear other user-specific data

        // Redirect to the login page
        navigate('/login');
    };
    return (
        <div className="md:flex mt-10 py-10">
            <ul className="flex flex-col  space-y-4 mt-5 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                {/* Tab links */}
                <li>
                    <Link
                        to={"#"}
                        onClick={() => setActiveTab('dashboard')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'dashboard'
                            ? 'text-gray-900 bg-gray-100'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 text-black'
                            }`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to={"#"}
                        onClick={() => setActiveTab('uploadReport')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadReport'
                            ? 'text-gray-900 bg-gray-100'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100  dark:hover:bg-gray-700 text-black'
                            }`}
                    >
                        Upload Report
                    </Link>
                </li>
                <li>
                    <Link
                        to={"#"}
                        onClick={() => setActiveTab('uploadPressRelease')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadPressRelease'
                            ? 'text-gray-900 bg-gray-100'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 text-black '
                            }`}
                    >
                        Upload Press Release
                    </Link>
                </li>
                <li>
                    <Link
                        to={"#"}
                        onClick={() => setActiveTab('uploadInfographics')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'uploadInfographics'
                            ? 'text-gray-900 bg-gray-100 '
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100  text-black'
                            }`}
                    >
                        Upload Infographics
                    </Link>
                </li>
                <li>
                    <Link
                        to={"#"}
                        onClick={() => setActiveTab('allOrders')}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'allOrders'
                            ? 'text-gray-900 bg-gray-100'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 text-black'
                            }`}
                    >
                        All Orders
                    </Link>

                </li>
                <li>
                    <button
                        onClick={handleLogout}
                        className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${activeTab === 'allOrders'
                            ? 'text-gray-900 bg-gray-100'
                            : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 text-black'
                            }`}
                    >
                        Log-Out
                    </button>
                </li>
            </ul>

            {/* Tab content */}
            <div className="w\-full"> {/* Full width applied here */}
                {activeTab === 'dashboard' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 w-full">
                        <MainDashboardBack />
                    </div>
                )}
                {activeTab === 'uploadReport' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 w-full">
                        <CreateReports />
                    </div>
                )}
                {activeTab === 'uploadPressRelease' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 w-full">
                        <CreatePressRelease />
                    </div>
                )}
                {activeTab === 'uploadInfographics' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 w-full">
                        <CreateInfographics />
                    </div>
                )}
                {activeTab === 'allOrders' && (
                    <div className="p-6 bg-gray-50 text-medium text-gray-500 w-full">
                        <OrdersList />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeDashboard;
