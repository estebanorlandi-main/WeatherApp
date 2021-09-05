import React, { useState } from "react";
import "./Search.css";

let hashedList = null;

(async () => {
  await import("../../../utility/city.list.json").then((data) => {
    hashedList = data;
  });
})();

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [datalist, setDatalist] = useState("");

  const handleSubmit = (e, cb, name) => {
    // Seleccionar el input y eliminar el valor
    e.target.querySelector('input[type="text"]').value = "";
    setSearch((oldSearch) => "");

    e.preventDefault();
    e.stopPropagation();

    if (name) cb(name);
  };

  const filterHash = (value) => {
    const key = hashedList[value.charCodeAt(0)]
      ? value.charCodeAt(0)
      : value.toUpperCase().charCodeAt(0);

    value = value.toLowerCase();

    const r = new RegExp(`^(${value.replaceAll(" ", "\\s")})+`);

    const filteredData = hashedList[key].filter((city) =>
      r.test(city.name.toLowerCase())
    );

    setDatalist((oldData) =>
      filteredData.slice(0, filteredData.length > 5 ? 5 : filteredData.length)
    );
  };

  return (
    <form
      className="search"
      onSubmit={(e) => handleSubmit(e, onSearch, search)}
    >
      <input
        onChange={(e) => {
          const value = e.target.value;
          if (value && hashedList) filterHash(value);
          setSearch((oldSearch) => value);
        }}
        className="search__input"
        type="text"
        list="suggestions"
        placeholder="Search City..."
        autoComplete="off"
        autoFocus="on"
      />
      <datalist id="suggestions">
        {datalist
          ? datalist.map((city, i) => <option key={i} value={city.name} />)
          : ""}
      </datalist>
      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
}
