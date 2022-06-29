import React from "react";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface Auth {
  logIn: (token: string) => void;
  loggedIn: boolean;
  logOut: () => void;
}
