import React, { useState } from "react";

function handleSubmit(e, cb, name) {
  e.preventDefault();
  e.stopPropagation();
  cb(name);
}

export default function SearchBar({ onSearch, getSuggestions, suggestions }) {
  const [search, setSearch] = useState([]);

  return (
    <form onSubmit={(e) => handleSubmit(e, onSearch, search)}>
      <input
        onChange={(e) => {
          setSearch((oldSearch) => e.target.value);
        }}
        type="text"
        list="suggestions"
      />
      <button type="submit">Search</button>
    </form>
  );
}
