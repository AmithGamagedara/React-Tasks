import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search Image: </label>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search your image here"
        />
        <button>search</button>
      </form>
    </div>
  );
}

export default SearchBar;
