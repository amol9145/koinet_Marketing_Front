import { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../../redux/slices/ReportSlice';
import { fetchPressReleases } from '../../redux/slices/PressRelesead';
import { fetchInfographics } from '../../redux/slices/Infographicsslice';
import { fetchContactData } from '../../redux/slices/GetContactForm';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement // Register ArcElement for Doughnut chart
);

const MainDashboardBack = () => {
    const dispatch = useDispatch();
    const { data: reports } = useSelector((state) => state.reports);
    const { data: pressReleases } = useSelector((state) => state.pressReleases);
    const { data: infographics } = useSelector((state) => state.infographics);
    const { data: contacts } = useSelector((state) => state.contactForm);

    useEffect(() => {
        dispatch(fetchPressReleases());
        dispatch(fetchReports());
        dispatch(fetchInfographics());
        dispatch(fetchContactData());
    }, [dispatch]);
    ;
    // Sample data for demonstration
    const reportCount = reports.length;
    const pressReleaseCount = pressReleases.length;
    const infographicCount = infographics.length;
    const contactSubmissionsCount = contacts.length;
    const monthlySalesData = [10, 20, 30, 25, 40, 50, 35, 60, 70, 55, 45, 80];
    const monthlyRevenueData = [1000, 2000, 1500, 3000, 2500, 4000, 3500, 4500, 6000, 5000, 7000, 8000];
    const monthlyDownloadsData = [5, 15, 10, 20, 25, 30, 35, 40, 45, 50, 55, 60]; // Downloads data
    // Modal state management
    const [modalType, setModalType] = useState(null); // 'reports', 'press', 'infographics', 'contact'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: monthlySalesData,
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
            {
                label: 'Monthly Revenue',
                data: monthlyRevenueData,
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
            },
            {
                label: 'Monthly Downloads',
                data: monthlyDownloadsData,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    boxWidth: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                    font: {
                        size: 16,
                    },
                },
                beginAtZero: true,
            },
        },
    };

    const renderModalContent = () => {
        switch (modalType) {
            case 'reports':
                return (
                    <Bar
                        data={{
                            labels: data.labels,
                            datasets: [
                                {
                                    label: 'Monthly Sales',
                                    data: monthlySalesData,
                                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                },
                                {
                                    label: 'Monthly Revenue',
                                    data: monthlyRevenueData,
                                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                                },
                                {
                                    label: 'Monthly Downloads',
                                    data: monthlyDownloadsData,
                                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                                },
                            ],
                        }}
                        options={options}
                    />
                );
            case 'press':
                return (
                    <Bar
                        data={{
                            labels: data.labels,
                            datasets: [
                                {
                                    label: 'Monthly Sales',
                                    data: monthlySalesData,
                                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                },
                                {
                                    label: 'Monthly Revenue',
                                    data: monthlyRevenueData,
                                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                                },
                                {
                                    label: 'Monthly Downloads',
                                    data: monthlyDownloadsData,
                                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                                },
                            ],
                        }}
                        options={options}
                    />
                );
            case 'infographics':
                return (
                    <Bar
                        data={{
                            labels: data.labels,
                            datasets: [
                                {
                                    label: 'Monthly Sales',
                                    data: monthlySalesData,
                                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                },
                                {
                                    label: 'Monthly Revenue',
                                    data: monthlyRevenueData,
                                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                                },
                                {
                                    label: 'Monthly Downloads',
                                    data: monthlyDownloadsData,
                                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                                },
                            ],
                        }}
                        options={options}
                    />
                );
            case 'contact':
                return (
                    <Bar
                        data={{
                            labels: data.labels,
                            datasets: [
                                {
                                    label: 'Monthly Sales',
                                    data: monthlySalesData,
                                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                                },
                                {
                                    label: 'Monthly Revenue',
                                    data: monthlyRevenueData,
                                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                                },
                                {
                                    label: 'Monthly Downloads',
                                    data: monthlyDownloadsData,
                                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                                },
                            ],
                        }}
                        options={options}
                    />
                );
            default:
                return null;
        }
    };
    const toggleModal = (type) => {
        setModalType(type);
        setIsModalOpen(!isModalOpen);
    };


    const doughnutData1 = {
        labels: ['Reports', 'Press Releases', 'Infographics', 'Contact Submissions'],
        datasets: [
            {
                data: [reportCount, pressReleaseCount, infographicCount, contactSubmissionsCount],
                backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'],
                hoverOffset: 10,
            },
        ],
    };

    const doughnutData2 = {
        labels: ['Revenue Q1', 'Revenue Q2', 'Revenue Q3', 'Revenue Q4'],
        datasets: [
            {
                data: [
                    monthlyRevenueData.slice(0, 3).reduce((a, b) => a + b, 0),
                    monthlyRevenueData.slice(3, 6).reduce((a, b) => a + b, 0),
                    monthlyRevenueData.slice(6, 9).reduce((a, b) => a + b, 0),
                    monthlyRevenueData.slice(9, 12).reduce((a, b) => a + b, 0),
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#9CCC65'],
                hoverOffset: 10,
            },
        ],
    };

    const doughnutData3 = {
        labels: ['Downloads Q1', 'Downloads Q2', 'Downloads Q3', 'Downloads Q4'],
        datasets: [
            {
                data: [
                    monthlyDownloadsData.slice(0, 3).reduce((a, b) => a + b, 0),
                    monthlyDownloadsData.slice(3, 6).reduce((a, b) => a + b, 0),
                    monthlyDownloadsData.slice(6, 9).reduce((a, b) => a + b, 0),
                    monthlyDownloadsData.slice(9, 12).reduce((a, b) => a + b, 0),
                ],
                backgroundColor: ['#8E44AD', '#3498DB', '#E74C3C', '#F1C40F'],
                hoverOffset: 10,
            },
        ],
    };
    return (
        <>
            <div className="container mx-auto p-5">
                <h1 className="text-3xl font-bold mb-8 text-start text-white bg-blue-700 py-4">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div
                        className="bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => toggleModal('reports')}
                    >
                        <h2 className="text-sm font-semibold text-gray-800">Total Reports</h2>
                        <p className="text-4xl font-bold text-indigo-500">{reportCount}</p>
                    </div>
                    <div
                        className="bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => toggleModal('press')}
                    >
                        <h2 className="text-sm font-semibold text-gray-800">Press Releases</h2>
                        <p className="text-4xl font-bold text-indigo-500">{pressReleaseCount}</p>
                    </div>
                    <div
                        className="bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => toggleModal('infographics')}
                    >
                        <h2 className="text-sm font-semibold text-gray-800">Infographics</h2>
                        <p className="text-4xl font-bold text-indigo-500">{infographicCount}</p>
                    </div>
                    <div
                        className="bg-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => toggleModal('contact')}
                    >
                        <h2 className="text-sm font-semibold text-gray-800">Contact Form Submissions</h2>
                        <p className="text-4xl font-bold text-indigo-500">{contactSubmissionsCount}</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="inline-block bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                            📊
                        </span>
                        Monthly Sales and Revenue
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        {/* Left Side Information */}
                        <div className="w-full lg:w-1/2 lg:pr-6">
                            <p className="text-gray-700 text-base leading-relaxed">
                                This chart provides a detailed overview of your monthly sales and revenue data for the current year.
                                Leverage these insights to identify growth opportunities and streamline your business strategies.
                            </p>
                            <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
                                <p className="text-indigo-700 font-medium text-lg">
                                    💰 Total Monthly Revenue:
                                </p>
                                <p className="text-2xl font-bold text-indigo-600">
                                    {monthlyRevenueData.reduce((a, b) => a + b, 0).toLocaleString()} USD
                                </p>
                            </div>
                        </div>

                        {/* Right Side Chart */}
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Modal for Data Charts */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/2">
                            <h2 className="text-xl font-semibold mb-4">{modalType === 'reports' ? 'Total Reports Breakdown' : modalType === 'press' ? 'Press Releases Breakdown' : modalType === 'infographics' ? 'Infographics Breakdown' : 'Contact Form Submissions Breakdown'}</h2>
                            {renderModalContent()}
                            <button
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Additional Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Overall Data Distribution</h3>
                            <Doughnut data={doughnutData1} />
                        </div>
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quarterly Revenue</h3>
                            <Doughnut data={doughnutData2} />
                        </div>
                        <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quarterly Downloads</h3>
                            <Doughnut data={doughnutData3} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MainDashboardBack;
