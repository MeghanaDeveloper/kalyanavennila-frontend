  import React from "react";
import AuthModalsteps from "../../pages/auth/authModals/authModalsteps";


  const AuthModalLayout = () => {

    return (
      <div className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl  relative min-h-[75vh] max-h-[90vh] min-w-[35vw] max-w-[85vw]  overflow-y-scroll scrollbar-hide  transition-all duration-300 ease-in-out">

          <AuthModalsteps />
        </div>
      </div>
    );  
  };

  export default AuthModalLayout;
