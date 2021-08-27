import React from "react";
import Card from "./Card";

import "./List.css";

export default function List(props) {
  return (
    <ul className="cards">
      {props.cities.map((city) => (
        <Card key={city.id} city={city} onDelete={props.onDelete} />
      ))}
    </ul>
  );
}
