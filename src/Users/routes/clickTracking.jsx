import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clickTracking } from "../services/trackingApis";



const ClickTracker = () => {
  const location = useLocation();

  useEffect(() => {
    clickTracking(location.pathname);
  }, [location]);

  return null;
};

export default ClickTracker;
