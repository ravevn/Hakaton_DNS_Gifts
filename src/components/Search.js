import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`); // Редирект на страницу поиска
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
        <button type="submit" className="searchButton">Поиск</button>
      </form>
    </div>
  );
};

export default Search;
