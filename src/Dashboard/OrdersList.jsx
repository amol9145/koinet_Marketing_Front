import { useState, useEffect } from "react";
import axios from "axios";

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:3000/get-orders");
                setOrders(response.data.data.items); // Razorpay returns orders in `items` array
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setError("Failed to fetch orders");
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <p className="text-center text-xl">Loading orders...</p>;
    if (error) return <p className="text-center text-xl text-red-600">{error}</p>;

    return (
        <div className=" mt-10">
            <h2 className="text-3xl py-10 bg-blue-600 font-bold text-center text-white mb-6 mt-10">Orders List</h2>
          <div className="conteiner mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="font-semibold text-sm"> Order ID : {order.id}</div>
                            <div className="text-sm text-gray-500">
                                {new Date(order.created_at * 1000).toLocaleString()}
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">Amount: </span>
                            {order.amount / 100} {order.currency}
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">Currency: </span>
                            {order.currency}
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold">Status: </span>
                            <span className={`font-medium ${order.status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="border-t pt-4 text-center">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
    );
};

export default OrdersList;
