import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className={styles.filtersContainer}>
      <label className={styles.filterLabel}>
        <input type="checkbox" value="GB" onChange={handleFilterChange} />
        <span>GB</span>
      </label>
      <label className={styles.filterLabel}>
        <input type="checkbox" value="US" onChange={handleFilterChange} />
        <span>US</span>
      </label>
      <label className={styles.filterLabel}>
        <input type="checkbox" value="ES" onChange={handleFilterChange} />
        <span>ES</span>
      </label>
    </div>
  );
};

export default Filters;