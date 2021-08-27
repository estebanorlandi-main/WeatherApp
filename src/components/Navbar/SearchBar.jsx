import React, { useState } from "react";
import "./Search.css";

export default function SearchBar({ onSearch, getSuggestions, suggestions }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e, cb, name) => {
    // Seleccionar el input y eliminar el valor
    e.target.querySelector('input[type="text"]').value = "";
    setSearch((oldSearch) => "");

    e.preventDefault();
    e.stopPropagation();

    if (name) cb(name);
  };

  return (
    <form
      className="search"
      onSubmit={(e) => handleSubmit(e, onSearch, search)}
    >
      <input
        onChange={(e) => {
          setSearch((oldSearch) => e.target.value);
        }}
        className="search__input"
        type="text"
        list="suggestions"
        placeholder="Search City..."
      />
      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
}
