// RevenueDisplay.js
import React from 'react';

const RevenueDisplay = () => {
  const revenue = 1200.50;

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <h3 className="text-white text-xl mb-4">Revenue</h3>
      <div className="text-3xl font-bold text-green-400">${revenue.toFixed(2)}</div>
      <p className="text-gray-300">Total revenue this month</p>
    </div>
  );
};

export default RevenueDisplay;
