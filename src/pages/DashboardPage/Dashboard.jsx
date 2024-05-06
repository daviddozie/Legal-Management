import React from "react";
import SideBar from "../../components/SideBar";
import User from "../../components/User"

const Dashboard = () => {
  return (
    <div className="dashboard w-full flex h-screen bg-black ">
      <SideBar /> 
      {/* Main content of the Dashboard */}
      <div className="main-content  flex bg-slate-500  " style={{ height: 'fit-content' }}>
        {/* Replace the current Header component with ResponsiveAppBar */}
        {/* Your main content here */}
        <User 
        userClass=""
        userSrc="src\assets\img\Ellipse 220.png"
        />
      </div>
    </div>
  );
};

export default Dashboard;
