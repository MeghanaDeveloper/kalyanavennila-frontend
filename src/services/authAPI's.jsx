import axios from 'axios';
import { toast } from 'react-hot-toast';
import { loginUser } from '../redux/slices/authSlice';


const BASE_URL = import.meta.env.VITE_BASE_AUTH_URL;
console.log('BASE_URL',BASE_URL)
export const signUp = async (formData) => {    
    console.log(formData    )
    try {
        const response = await axios.post(`${BASE_URL}/registration`, formData);
console.log(`${BASE_URL}/registration`)
        if (response && response.data.token && response.status === 200) {
            localStorage.setItem("signUpToken", response.data.token);
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
        const signUpToken = localStorage.getItem('signUpToken');

        const response = await axios.post(`${BASE_URL}/verify-otp`, 
            {
                otp : otp
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
        const signUpToken = localStorage.getItem('signUpToken');

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
export const createPassword =  async(passwordData) => {
    try{
        const signUpToken = localStorage.getItem('signUpToken');

        const response = await axios.post(`${BASE_URL}/create-password`, passwordData,
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

//login
export const loginData = ( accountId, password) => async (dispatch) => {
    try{
        const response = await axios.post(`${BASE_URL}/login`, 
            {
                accountId : accountId,
                password: password
            }
        )
        console.log('response')
        console.log(response)
        if (response &&  response.status === 200 && response.data.token) {
            console.log(response, response.data.token)
            localStorage.setItem("loginToken", response.data.token);            
            dispatch(loginUser(response.data.profileDetails));
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 3000 ,
                 className: 'custom-toast'
            });
            return  { 
                success: true, 
                data: response.data 
            };
        }
    }
    catch (error) {
        let errorMessages = [];
        if (error.response && error.response.data && error.response.data.error) {
            if (Array.isArray(error.response.data.error)) {
                errorMessages = error.response.data.error.map(err => err.msg);
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
                autoClose: 5000,
                className: 'custom-toast'
            });
        });
        return { 
            success: false, 
            errors: errorMessages 
        };
    } 
}

//forgot password
export const forgotPassword =  async(accountId, email) => {
    try{
        const response = await axios.post(`${BASE_URL}/forgot-password`,
            {
                accountId:accountId,
                email:email
            }
        )
        console.log(response)
        if (response && response.data.token && response.status === 200) {
            sessionStorage.setItem("passwordToken", response.data.token);
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 3000 ,
                 className: 'custom-toast'
            });
            return  { 
                success: true, 
                data: response.data 
            };
        }
    }
    catch(error){
        console.log(error)
        const errors = error.response.data.error 
        toast.error(errors, {
            position: "top-center",
            autoClose: 3000,
             className: 'custom-toast'
          });
          return { 
            success: false, 
            errors: errors 
        };
    }
}

//update password
export const resetPassword =async  ( resetPasswordData)  => {
    try{
        const passwordToken = sessionStorage.getItem('passwordToken');

        const response = await axios.post(`${BASE_URL}/reset-password`,resetPasswordData,
            {
                headers: {
                    Authorization: `Bearer ${passwordToken}`
                  },
            }
        )
        console.log(response)
        if (response &&   response.status === 200) {
            console.log('data',response)
            sessionStorage.removeItem('passwordToken')
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 3000 ,
                 className: 'custom-toast'
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



