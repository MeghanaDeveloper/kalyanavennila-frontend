
import { useContext } from "react";
import { ProfileContext } from "../context/profile/ProfileContext";


const useProfileContextData = () => useContext(ProfileContext);

export default useProfileContextData;
