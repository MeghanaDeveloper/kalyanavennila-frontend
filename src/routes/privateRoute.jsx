import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(state => state.authReducer); // Check if user is authenticated

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />; // Redirect if not authenticated
};

export default PrivateRoute;
