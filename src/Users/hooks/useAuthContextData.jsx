
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";


const useAuthContextData = () => useContext(AuthContext);

export default useAuthContextData;
