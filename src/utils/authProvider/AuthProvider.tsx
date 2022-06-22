import React, { useState } from "react";
import { AuthContext, localStorageService } from "..";

interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorageService.getToken();

  if (loggedIn !== !!token) {
    setLoggedIn(!!token);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const logIn = (token: string) => {
    localStorageService.setToken(token);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorageService.removeToken();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
