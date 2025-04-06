import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";


 const ProfileProvider = ({ children }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [progress, setProgress] = useState(0);

  return (
    <>
      <ProfileContext.Provider value={{ profileModalOpen, setProfileModalOpen,progress ,setProgress}}>
        {children}
      </ProfileContext.Provider>
    </>
  );
};


export default  ProfileProvider
    