import React, { useState } from "react";

function getImage(img) {
  return `https://openweathermap.org/img/wn/${img}@2x.png`;
}

export default function City({ city }) {
  return (
    <div>
      <img src={getImage(city.img)} alt="" />

      <h2>{city.name}</h2>
      <h1>{city.temp}&deg;</h1>

      <span>
        {city.min}&deg; / {city.max}&deg;
      </span>
      <p>{city.desc}</p>
    </div>
  );
}
