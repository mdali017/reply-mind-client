import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div className="flex md:gap-20 md:mt-16">
      <SideBar></SideBar>
      <div className="border container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
