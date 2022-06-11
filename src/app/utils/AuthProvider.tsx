import React, { useState } from "react";
import AuthContext from "./context/authContext";
import localStorageService from "./localStorageService";

type Props = { children: React.ReactNode };

const AuthProvider: React.FC<Props> = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorageService.getToken();

  if (loggedIn !== !!token) {
    setLoggedIn(!!token);
  }

  const logIn = (token: string) => {
    localStorageService.setToken(token);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorageService.removeToken();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      loggedIn, logIn, logOut, token,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;