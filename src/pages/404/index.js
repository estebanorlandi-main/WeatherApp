import React from "react";
import icon from "../../img/Icons/not_found.svg";

export default function NotFound(props) {
  return (
    <img
      style={{
        display: "block",
        width: "10em",
        margin: "3em auto",
      }}
      src={icon}
      alt="Not found"
    />
  );
}
