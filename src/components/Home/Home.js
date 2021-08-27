import React from "react";
import image from "../../img/Waves.svg";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <h1 className="title"> Welcome to my weather app </h1>
      <img className="bg" src={image} alt="" />
    </div>
  );
}
