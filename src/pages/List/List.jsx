import React from "react";
//import Card from "../../components/Card/Card";
//import icon from "../../img/Icons/no_cities.svg";

//import "./List.css";

export default function List(props) {
  const cardCities = props.cities.map((city) => (
    <p>
      {city.name} | {city.temp}
    </p>
  ));

  return (
    <div>
      <h4>Favorites</h4>
      <h4>All</h4>
      {cardCities}
    </div>
  );
}
