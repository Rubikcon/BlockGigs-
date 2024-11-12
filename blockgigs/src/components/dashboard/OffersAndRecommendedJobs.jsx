// OffersAndRecommendedJobs.js
import React from 'react';

const OffersAndRecommendedJobs = () => {
  const offers = [
    { id: 1, title: "Frontend Developer Needed", description: "Looking for a frontend developer..." },
    { id: 2, title: "React.js Freelance Work", description: "Freelance opportunity for React.js" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <h3 className="text-white text-xl mb-4">Offers and Recommended Jobs</h3>
      {offers.map((offer) => (
        <div key={offer.id} className="mb-4">
          <h4 className="text-white text-lg">{offer.title}</h4>
          <p className="text-gray-300">{offer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OffersAndRecommendedJobs;
