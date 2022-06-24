import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { PrivateRouteProps } from "./types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth: any = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
