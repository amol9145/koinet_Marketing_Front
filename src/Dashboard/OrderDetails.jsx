import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../Constant/ConstantFiles";

const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { orderId } = useParams();  // Get orderId from URL parameters

    useEffect(() => {
        const fetchOrderDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${baseUrl}/get-order-details/${orderId}`);
                setOrderDetails(response.data.data);  // Save fetched order details
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order details:", error);
                setError("Failed to fetch order details");
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);  // Fetch details on initial render and whenever orderId changes

    if (loading) return <p className="text-center text-xl">Loading order details...</p>;
    if (error) return <p className="text-center text-xl text-red-600">{error}</p>;

    return (
        <div className="mt-10">

            {orderDetails && (
                <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Order Details</h2>
                    <div className="my-10">
                        <Link to={"/dashboard"} className="p-3 mt-5 bg-red-600 rounded-lg">Back To Dashboard</Link>
                    </div>
                    <div>
                        <p><strong>Order ID:</strong> {orderDetails.id}</p>
                        <p><strong>Amount:</strong> {orderDetails.amount / 100} {orderDetails.currency}</p>
                        <p><strong>Status:</strong> {orderDetails.status}</p>
                        <p><strong>Created At:</strong> {new Date(orderDetails.created_at * 1000).toLocaleString()}</p>
                        {/* You can add more details from orderDetails as needed */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
