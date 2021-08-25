import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, temp, max, min }) {
  return (
    <li>
      <Link to={`/city/${id}`}>
	<span>{name}</span>
      </Link>
    </li>
  );
}
