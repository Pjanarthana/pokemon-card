import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Pokemon"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;