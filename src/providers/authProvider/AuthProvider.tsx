import React, { useState } from "react";
import AuthContext from "./authContext";
import { Types, consts } from "./duck";

const AuthProvider: React.FC<Types.AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem(consts.FAKE_TOKEN)
  );

  const logIn = (token: string) => {
    localStorage.setItem(consts.FAKE_TOKEN, token);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem(consts.FAKE_TOKEN);
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
