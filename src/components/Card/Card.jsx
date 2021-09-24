import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
import icon from "../../img/Icons/index";

export default function Card({ city, onDelete }) {
  /*const formatDate = () => {
    let t = new Date();

    return `${t.getHours()}:${t.getMinutes()} - ${t.getDate()} / ${t.getMonth()}`;
  };

  const handleDelete = (id, e) => {
    onDelete(id);
  };*/

  return (
    <li className="item">
      <Link className="card-link" to={`/city/${city.id}`}>
        <div className="card">
          <div>
            <h2 className="card__name"> {city.name} </h2>
          </div>
          <img className="card__icon" src={icon(city.img)} alt="" />
          <h1 className="card__temp"> {city.temp}&deg; C </h1>
        </div>
      </Link>
      <button onClick={() => onDelete(city.id)} className="card__delete">
        X
      </button>
    </li>
  );
}
