import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { PublicRouteProps } from "./types";

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    children
  );
};

export default PublicRoute;
