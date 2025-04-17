import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";


 const ProfileProvider = ({ children }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <>
      <ProfileContext.Provider value={{ profileModalOpen, setProfileModalOpen}}>
        {children}
      </ProfileContext.Provider>
    </>
  );
};


export default  ProfileProvider
    