// SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    // Implement search functionality here
  };

  return (
    <div className="w-full max-w-lg flex items-center bg-gray-800 p-3 rounded-md">
      <input
        type="text"
        placeholder="Search for jobs, offers..."
        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
