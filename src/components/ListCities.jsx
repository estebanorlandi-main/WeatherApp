import React from "react";
import List from "./List";

export default function ListCities(props) {
  return (
    <ul>
      {props.cities
        .map((city) => (
          <List key={city.id} name={city.name} />
        ))}
    </ul>
  );
}
