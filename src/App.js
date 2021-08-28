import React, { useState } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import City from "./components/City/City";
import About from "./components/About/About";
import List from "./components/List/List";

import "./App.css";

const API_KEY = process.env.API_KEY || require("./config");

function App() {
  const [cities, setCities] = useState([]);

  const onSearch = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY.weather}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.main) return console.log("city doesn't exist");
        const res = {
          id: data.id,
          name: data.name,
          img: data.weather[0].icon,
          temp: Math.floor(data.main.temp),
          min: Math.floor(data.main.temp_min),
          max: Math.floor(data.main.temp_max),
          desc: data.weather[0].description,
        };

        if (cities.filter((city) => city.id === res.id).length) {
          return console.log("city already exist");
        }

        setCities((oldCities) => [res, ...oldCities]);
      });
  };

  const onDelete = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };

  return (
    <div>
      {/* Barra de navegacion siempre */}
      <Nav onSearch={onSearch} />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/List"
        render={() => <List cities={cities} onDelete={onDelete} />}
      />

      <Route
        path="/city/:id"
        render={({ match }) => (
          <City
            city={
              cities.filter((val) => val.id === parseInt(match.params.id))[0]
            }
          />
        )}
      />
    </div>
  );
}

export default App;
