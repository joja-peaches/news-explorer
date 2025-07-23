import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children}) => {
    return isLoggedIn ? children : <Navigate to="/" replace />
};
// API branch
export default ProtectedRoute;