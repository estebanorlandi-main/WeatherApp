import React, { useState } from "react";
import "./App.css";
import cities from "./utility/city.list.json";
import ListCities from "./components/ListCities";
import Nav from "./components/Nav";
import APIKEY from "../config.js"

function App() {
  const [toShow, setToShow] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  const onSearch = (name) => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${name}&appid=${}`).then(res => res.json()).then(data => setToShow(oldToShow => data))
    setToShow((oldToShow) =>
    );
  };

  return (
    <div>
      <Nav onSearch={onSearch} />
      <ListCities cities={toShow} />
    </div>
  );
}

export default App;
