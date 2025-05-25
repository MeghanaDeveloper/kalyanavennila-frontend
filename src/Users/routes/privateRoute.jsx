import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(state => state.authReducer); 
  console.log('is',isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
