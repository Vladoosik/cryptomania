// modules
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user, navigate }) =>
  user ? children : <Navigate to={navigate} />;

export default PrivateRoute;
