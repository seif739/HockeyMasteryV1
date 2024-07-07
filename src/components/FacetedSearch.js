import React from 'react';

const FacetedSearch = ({ filters, onFilterChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="faceted-search">
      <h2>Filters</h2>
      <div>
        <label>
          Program:
          <select name="category" value={filters.category} onChange={handleChange}>
            <option value="">All</option>
            <option value="Power Skating">Power Skating</option>
            <option value="Stickhandling Mastery">Stickhandling Mastery</option>
            <option value="Defensive Strategies">Defensive Strategies</option>
            <option value="Goalie Training">Goalie Training</option>
            <option value="Shooting Accuracy">Shooting Accuracy</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <select name="priceRange" value={filters.priceRange} onChange={handleChange}>
            <option value="">All</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-130">$101 - $130</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FacetedSearch;
