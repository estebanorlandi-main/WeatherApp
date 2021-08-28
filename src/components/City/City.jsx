import React from "react";
import "./City.css";
import getIcon from "../../img/Icons/index";

export default function City({ city }) {
  return (
    <div className="city">
      <img className="bg-icon" src={getIcon(city.img)} alt="" />
      <h2 className="city__name">{city.name}</h2>
      <p className="city__desc">{city.desc}</p>
      <h1 className="city__temp">{city.temp}&deg;C</h1>
      <div className="f-inline my-1">
        <div className="f-col mx-1">
          <span>Min</span>
          <span>{city.min}&deg;C</span>
        </div>
        <div className="f-col mx-1">
          <span>Max</span>
          <span>{city.max}&deg;C</span>
        </div>
      </div>
    </div>
  );
}
