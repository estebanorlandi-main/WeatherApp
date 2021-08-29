import React from "react";
import Card from "./Card";
import icon from "../../img/Icons/no_cities.svg";

import "./ListCities.css";

export default function List(props) {
  const cardCities = props.cities.map((city) => (
    <Card key={city.id} city={city} onDelete={props.onDelete} />
  ));

  return cardCities.length ? (
    <ul className="cards">{cardCities}</ul>
  ) : (
    <img draggable="false" className="no-cities" src={icon} alt="" />
  );
}
