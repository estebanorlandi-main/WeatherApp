import React from "react";
import "./City.css";

export default function City({ city }) {
  return (
    <div className="city">
      <h2 className="city__name">{city.name}</h2>
      <p className="city__desc">{city.desc}</p>
      <h1 className="city__temp">{city.temp}&deg;C</h1>
      <div className="min-max">
        <div className="min">
          <span>Min</span>
          <span>{city.min}&deg;C</span>
        </div>
        <div className="max">
          <span>Max</span>
          <span>{city.max}&deg;C</span>
        </div>
      </div>

      <div>
        <div className="min"></div>
      </div>
    </div>
  );
}
