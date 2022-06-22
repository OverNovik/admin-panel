import { useContext } from "react";
import { AuthContext } from "..";

const useAuth = () => useContext(AuthContext);

export default useAuth;
