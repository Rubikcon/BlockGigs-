// DashboardLayout.js
import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;