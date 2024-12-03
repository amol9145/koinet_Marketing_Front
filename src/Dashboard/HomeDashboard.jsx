import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className={`mt-12 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium mt-5">
                        <li className='py-2 ms-4 text-start hover:bg-slate-800 hover:text-white hover:rounded-md px-2'>
                            <Link> My Dashboard</Link>
                        </li>
                        <li className='py-2 ms-4 text-start hover:bg-slate-800 hover:text-white hover:rounded-md px-2'>

                            <Link to={"/create_report"}>Upload Report</Link>
                        </li>
                        <li className='py-2 ms-4 text-start hover:bg-slate-800 hover:text-white hover:rounded-md px-2'>

                            <Link to={"/create_press_release"}>Upload Press Release</Link>
                        </li>
                        <li className='py-2 ms-4 text-start hover:bg-slate-800 hover:text-white hover:rounded-md px-2'>

                            <Link to={"/createinfographics"}>Upload Infographics</Link>
                        </li>
                        {/* More items can be added here */}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default HomeDashboard;
