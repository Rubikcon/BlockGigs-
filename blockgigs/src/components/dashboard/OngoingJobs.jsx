// OngoingJobs.js
import React from 'react';

const OngoingJobs = () => {
  const jobs = [
    { id: 1, title: "Web Development", progress: 50 },
    { id: 2, title: "Mobile App Design", progress: 75 },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <h3 className="text-white text-xl mb-4">Ongoing Jobs</h3>
      {jobs.map((job) => (
        <div key={job.id} className="mb-4">
          <div className="flex justify-between">
            <span className="text-gray-300">{job.title}</span>
            <span className="text-gray-500">{job.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${job.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingJobs;
