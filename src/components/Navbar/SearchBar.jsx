import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [inputs, setInputs] = useState({ search: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(inputs.search);
  };

  const handleInput = (e) => {
    setInputs((oldInputs) => ({ ...oldInputs, search: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input onChange={handleInput} type="text" value={inputs.search} />
      <button type="submit">search</button>
    </form>
  );
}
