import axios from 'axios'
import toast from 'react-hot-toast';


const BASE_URL = import.meta.env.VITE_BASE_TRACKING_URL;

export const clickTracking  = async  ( urlPath)  => {
    try{
        const token = localStorage.getItem("loginToken");
               if (!token) return; 

        const response = await axios.post(`${BASE_URL}/track-click`,
            {
                url:urlPath
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                  },
            }
        )
        if (response && response.data && response.status === 200) {
            return  { 
                success: true, 
                data: response.data 
            };
        }
    }
    catch(error){
        const errors = error.response.data.error 
        toast.error(errors, {
            position: "top-center",
            duration: 5000,
            style: {
                border: '3px solid red',
                padding: '16px',
              }
          });
          return { 
            success: false, 
            errors: errors 
        };
    }
}