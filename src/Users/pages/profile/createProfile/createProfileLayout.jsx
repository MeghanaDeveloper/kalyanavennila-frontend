import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const CreateProfileLayout = () => {
  return (
    <div className="flex flex-col md:flex-row px-2 md:px-14  lg:px-34  padding-tb background-color">
      <Sidebar />
      <div className="w-full md:w-3/4 p-4 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default CreateProfileLayout;
