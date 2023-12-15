import React from "react";

const Filter = ({
  filterName,
  filterConfig,
  filterValues,
  handleFilterChange,
}) => {
  const handleCheckboxChange = (option, checked) => {
    const values = filterValues[filterName] || [];
    const updatedValues = checked
      ? [...values, option]
      : values.filter((value) => value !== option);
    handleFilterChange(filterName, updatedValues);
  };

  return (
    <div key={filterName} className="filter-section">
      <h4>{filterConfig.label}:</h4>
      {filterConfig.type === "search" ? (
        <input
          type="text"
          placeholder="Search"
          value={filterValues[filterName] || ""}
          onChange={(e) => handleFilterChange(filterName, e.target.value)}
          className="filter-input"
        />
      ) : (
        filterConfig.options.map((option) => (
          <label key={option} className="filter-label">
            <input
              type="checkbox"
              checked={(filterValues[filterName] || []).includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
              className="filter-checkbox"
            />
            {option}
          </label>
        ))
      )}
    </div>
  );
};

export default Filter;
