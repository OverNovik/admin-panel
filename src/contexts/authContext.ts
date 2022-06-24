import { createContext } from "react";
import { Auth } from "./types";

const AuthContext = createContext<Auth>(null as unknown as Auth);

export default AuthContext;
