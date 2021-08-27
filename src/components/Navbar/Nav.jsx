import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";

export default function Nav(props) {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link className="home" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/List">
              <span>List</span>
            </Link>
          </li>
        </ul>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </nav>
  );
}
