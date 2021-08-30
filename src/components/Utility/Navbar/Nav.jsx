import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";

export default function Nav(props) {
  const [menuIsActive, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((oldMenu) => !menuIsActive);
  };

  return (
    <nav>
      <div className="nav__container">
        <button onClick={handleMenu} className="btn-menu">
          {menuIsActive ? "x" : "-"}{" "}
        </button>
        <ul className={`menu ${menuIsActive ? "show" : "hide"}`}>
          <li className="menu__item">
            <Link onClick={handleMenu} className="menu__link home" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={handleMenu} className="menu__link" to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link onClick={handleMenu} className="menu__link" to="/List">
              <span>List</span>
            </Link>
          </li>
        </ul>
        <SearchBar onSearch={props.onSearch} hashedList={props.hashedList} />
      </div>
    </nav>
  );
}
