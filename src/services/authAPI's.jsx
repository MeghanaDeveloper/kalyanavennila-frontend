import axios from 'axios';
import { toast } from 'react-hot-toast';

const BASE_URL = import.meta.env.VITE_BASE_AUTH_URL;

export const signUp = async (formData) => {    
    try {
        const response = await axios.post(`${BASE_URL}/registration`, formData);

        if (response && response.data.token && response.status === 200) {
            sessionStorage.setItem("signUpToken", response.data.token);
            toast.success(response.data.message, {
                position: "top-center",
                duration: 3000,
                style: {
                    border: '3px solid green',
                    padding: '16px',
                  },
            });
            return {
                success: true,
                data: response.data
            };
        }
    } catch (error) {
        let errorMessages = [];

        if (error.response && error.response.data && error.response.data.error) {
            if (Array.isArray(error.response.data.error)) {
                errorMessages = error.response.data.error;
            } else if (typeof error.response.data.error === 'string') {
                errorMessages = [error.response.data.error];
            } else {
                errorMessages = ['An unknown error occurred'];
            }
        } else {
            errorMessages = ['A network error occurred. Please try again later.'];
        }

        errorMessages.forEach(message => {
            toast.error(message, {
                position: "top-center",
                duration: 5000,
                style: {
                    border: '3px solid red',
                    padding: '16px',
                  },
            });
        });

        return { 
            success: false, 
            errors: errorMessages 
        };
    }
};

//verify otp
export const verifyOtp =  async ( otp) => {
    try{
        const signUpToken = sessionStorage.getItem('signUpToken');

        const response = await axios.post(`${BASE_URL}/verify-otp`, 
            {
                "verifyOtp" : otp
            },
            {
                headers: {
                    Authorization: `Bearer ${signUpToken}`,
                  },
            }
        )
        if (response &&  response.status === 200) {
            toast.success(response.data.message, {
                position: "top-center",
                duration: 3000,
                style: {
                    border: '3px solid green',
                    padding: '16px',
                  },
            });
            return  { 
                success: true, 
                data: response.data 
            };
        }
    }
    catch (error) {
        const errors = error.response.data.error 
        toast.error(errors, {
            position: "top-center",
            duration: 5000,
            style: {
                border: '3px solid red',
                padding: '16px',
              },
          });
          return { 
            success: false, 
            errors: errors 
        };
    }
}

//resend otp
export const resendOtp =  async() => {
    try{
        const signUpToken = sessionStorage.getItem('signUpToken');

        const response = await axios.post(`${BASE_URL}/resend-otp`,{ },
            {
                headers: {
                    Authorization: `Bearer ${signUpToken}`
                  },
            }
        )
        if (response &&  response.status === 200) {
            toast.success(response.data.message, {
                position: "top-center",
                duration: 3000,
                style: {
                    border: '3px solid green',
                    padding: '16px',
                  },
            });
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


//password
export const createPassword =  async() => {
    try{
        const signUpToken = sessionStorage.getItem('signUpToken');

        const response = await axios.post(`${BASE_URL}/resend-otp`,{ },
            {
                headers: {
                    Authorization: `Bearer ${signUpToken}`
                  },
            }
        )
        if (response &&  response.status === 200) {
            toast.success(response.data.message, {
                position: "top-center",
                duration: 3000,
                style: {
                    border: '3px solid green',
                    padding: '16px',
                  },
            });
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
