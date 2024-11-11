// pages/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-6">
        
        {/* First Card: Freelancer Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Freelancer Overview</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Name:</h3>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Location:</h3>
            <p className="text-gray-600">New York, USA</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Availability:</h3>
            <p className="text-gray-600">Available for new projects</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Current Rate:</h3>
            <p className="text-gray-600">$50/hr</p>
          </div>
        </div>

        {/* Second Card: Skills and Projects */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Projects</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Skills:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>React.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Recent Projects:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>E-commerce Platform</li>
              <li>Portfolio Website</li>
              <li>Project Management Tool</li>
              <li>Chat Application</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
