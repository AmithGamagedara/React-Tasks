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
    <div className="p-4">
      <form onSubmit={handleFormSubmit}>
        <label>Search Image: </label>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search your image here"
          className="py-1.5 px-2 border rounded w-1/3 ml-4"
        />
        <button className="bg-[#121212] py-1.5 px-4 text-white ml-2 rounded">search</button>
      </form>
    </div>
  );
}

export default SearchBar;
