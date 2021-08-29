import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";

export default function Nav(props) {
  const [menuIsActive, setMenu] = useState(false);

  const handleMenu = (e) => {
    setMenu((oldMenu) => !menuIsActive);
  };

  return (
    <nav>
      <div className="container">
        <button onClick={handleMenu} className="btn-menu">
          {menuIsActive ? "x" : "-"}
        </button>
        <ul className={menuIsActive ? `menu show` : `menu hide`}>
          <li>
            <Link onClick={handleMenu} className="home" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={handleMenu} to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link onClick={handleMenu} to="/List">
              <span>List</span>
            </Link>
          </li>
        </ul>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </nav>
  );
}
