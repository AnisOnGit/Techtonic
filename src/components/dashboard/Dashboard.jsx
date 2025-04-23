import React from "react";
import DashTabs from "../dashTabs/DashTabs";



const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[rgba(255,255,255,255)] text-black">
        <h1 className="text-3xl font-bold py-7">Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <DashTabs></DashTabs>
    </div>
  );
};

export default Dashboard;
