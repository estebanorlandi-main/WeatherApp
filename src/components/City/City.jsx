import React, { useState } from "react";

const icons = {
  d1: "../../img/Icons/01d.svg",
};

export default function City({ city }) {
  return (
    <div>
      <img src={icons[city.img]} alt="" />

      <h2>{city.name}</h2>
      <h1>{city.temp}&deg;</h1>

      <span>
        {city.min}&deg; / {city.max}&deg;
      </span>
      <p>{city.desc}</p>
    </div>
  );
}
