import { useContext } from "react";
import { AuthContext } from "../providers";

const useAuth = () => useContext(AuthContext);

export default useAuth;
