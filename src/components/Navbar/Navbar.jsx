import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import styles from "./Navbar.module.css";

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((oldIsOpen) => !oldIsOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <button
          onClick={handleMenu}
          className={`${styles.menu__button} ${isOpen ? styles.close : ""}`}
        >
          <div className={styles.menu__bar1}></div>
          <div className={styles.menu__bar2}></div>
        </button>
        <SearchBar onSearch={props.onSearch} />
      </div>
      <ul className={`${styles.nav__menu} ${!isOpen ? styles.hide : ""}`}>
        <li className={styles.nav__item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/List">List</Link>
        </li>
      </ul>
    </nav>
  );
}
