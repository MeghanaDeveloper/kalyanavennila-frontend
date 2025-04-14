import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview',
      page: location.pathname,
    });
  }, [location]);
};

export default usePageTracking;
