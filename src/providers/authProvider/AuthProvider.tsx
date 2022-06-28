import React, { useState } from "react";
import AuthContext from "./authContext";
import { Types, Const } from "./duck";

const AuthProvider: React.FC<Types.AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem(Const.FAKE_TOKEN)
  );

  const logIn = (token: string) => {
    localStorage.setItem(Const.FAKE_TOKEN, token);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem(Const.FAKE_TOKEN);
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
