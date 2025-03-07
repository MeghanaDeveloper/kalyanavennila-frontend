  import React from "react";
  import Modalsteps from "./signUpModelsteps";
  import SignUpModalsteps from "./signUpModelsteps";


  const SignUpModalLayout = () => {

    return (
      <div className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl  relative min-h-[75vh] max-h-[90vh] min-w-[35vw] max-w-[85vw]  overflow-y-scroll scrollbar-hide  transition-all duration-300 ease-in-out">

          <SignUpModalsteps />
        </div>
      </div>
    );  
  };

  export default SignUpModalLayout;
