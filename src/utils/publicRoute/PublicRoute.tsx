import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "..";

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const auth: any = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    children
  );
};

export default PublicRoute;
