import { createContext } from "react";
import { Types } from "./authProvider/duck";

const AuthContext = createContext<Types.Auth>(null as unknown as Types.Auth);

export default AuthContext;
