import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { logout } from "../redux/slices/authSlice";


export const isTokenExpired = (token) => {
    if (!token) return true;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
};

export const getValidToken = () => {
    const loginToken = localStorage.getItem("loginToken");

    if (loginToken && !isTokenExpired(loginToken)) {
        return loginToken;
    } else {
        return null;
    }
};

export const handleLogout = (dispatch, navigate) => {
    dispatch(logout());
    navigate("/");
};

export const checkTokenAndProceed = (dispatch, navigate) => {
    const token = getValidToken();

    if (!token) {
        toast.error("Your session has expired. Please log in again", {
            position: "top-center",
            autoClose: 5000,
            className: "custom-toast",
        });

        setTimeout(() => {
            handleLogout(dispatch, navigate); // let the toast show for a moment
          }, 1500);
        return null;
    }

    return token;
};
