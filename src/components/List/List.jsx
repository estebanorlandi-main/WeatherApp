import React from "react";
import Card from "./Card";

export default function List(props) {
  return (
    <ul>
      {props.cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          name={city.name}
          temp={city.temp}
          max={city.max}
          min={city.min}
        />
      ))}
    </ul>
  );
}
