import React, { useState } from 'react';
import '../styles/Search.css'; 
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={handleChange}
          className="searchInput"
        />
        <button type="submit" className="searchButton">
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Search;