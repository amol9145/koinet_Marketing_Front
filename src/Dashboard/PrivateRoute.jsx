
import { Navigate } from 'react-router-dom';

// Mock authentication function; replace with real authentication logic.
const isAuthenticated = () => {
    return localStorage.getItem('token') !== null; // Example: check if a token exists
};

const PrivateRoute = () => {
    return isAuthenticated() && <Navigate to="/login" />
};

export default PrivateRoute;
