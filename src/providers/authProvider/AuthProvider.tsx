import React, { useState } from "react";
import AuthContext from "./authContext";
import { Types, сonsts } from "./duck";

const AuthProvider: React.FC<Types.AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem(сonsts.FAKE_TOKEN)
  );

  const logIn = (token: string) => {
    localStorage.setItem(сonsts.FAKE_TOKEN, token);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem(сonsts.FAKE_TOKEN);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
