import React from "react";

export default function NavCity(props) {
  return (
    <div>
      {props.cities.map((city) => (
        <button onClick={() => props.onClick(city)} key={city.id}>
          {city.name}
        </button>
      ))}
    </div>
  );
}
