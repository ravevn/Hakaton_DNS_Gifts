import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Search.css";
import "../styles/SearchResult.css";
import presents from "../pages/presents.json"; 

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [data, setData] = useState(presents); 
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults(data);
    }
  }, [query, data]);

  return (
    <div className="search-results-container">
      <h2>Результаты поиска:</h2>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((item) => (
            <li key={item.id} className="result-item">
              <img src={item.imageUrl} alt={item.name} className="result-image" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  );
};

export default SearchResults;
