import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav(props) {
  return (
    <nav>
      <Link to="/">
        <span>WeatherApp</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/List">
        <span>List</span>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}
