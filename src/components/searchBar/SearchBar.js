import React from "react";
import "./searchBar.scss";

export function SearchBar({ term, handleSearch }) {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input id="search-btn" type="checkbox" />
        <label htmlFor="search-btn"></label>
        <input value={term} id="search-bar" type="text" placeholder="Search..." onChange={handleSearch} />
      </div>
    </div>
  );
}
