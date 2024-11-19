import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './Services/axiosInstance';

const PrivateRoute = ({ children }) => {
  const token = getToken(); // Check if the user is authorized

  if (!token) {
    // Redirect to login if not authorized
    return <Navigate to="/Login" />;
  }

  // Render the child component if authorized
  return children;
};

export default PrivateRoute;
