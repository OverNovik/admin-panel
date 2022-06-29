import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { Types } from "./duck";

const PublicRoute: React.FC<Types.PublicRouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    children
  );
};

export default PublicRoute;
