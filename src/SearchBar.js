import React, { useState } from 'react';
import styles from './css/SearchBar.module.css'; // Use 'styles' instead of 'css'

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the search query (e.g., fetch search results)
    console.log('Search query:', query);
  };

  return (
    <div className={`${styles.searchBar} ${expanded ? styles.expanded : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.toggleButton} onClick={handleToggle}>
        <i className={`fas fa-search ${styles.expanded}`}></i>
      </div>
    </div>
  );
};

export default SearchBar;
