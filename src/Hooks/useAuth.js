import { useContext } from "react"
import { authContext } from "../Context/AuthProvider";

const useAuth = () => useContext(authContext);
export default useAuth;