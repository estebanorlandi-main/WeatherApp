import React, { useState } from "react";
import { Route } from "react-router-dom";

import API_KEY from "./config.js";

import Nav from "./components/Navbar/Nav";
import City from "./components/City/City";
import About from "./components/About/About";
import List from "./components/List/List";

import d1 from "./img/Icons/01d.svg";
import n1 from "./img/Icons/01n.svg";

import d2 from "./img/Icons/02d.svg";
import n2 from "./img/Icons/02n.svg";

import d3 from "./img/Icons/03d.svg";
import n3 from "./img/Icons/03n.svg";

import d4 from "./img/Icons/04d.svg";
import n4 from "./img/Icons/04n.svg";

import d9 from "./img/Icons/09d.svg";
import n9 from "./img/Icons/09n.svg";

import d10 from "./img/Icons/10d.svg";
import n10 from "./img/Icons/10n.svg";

import d11 from "./img/Icons/11d.svg";
import n11 from "./img/Icons/11n.svg";

import d13 from "./img/Icons/13d.svg";
import n13 from "./img/Icons/13n.svg";

import d50 from "./img/Icons/50d.svg";
import n50 from "./img/Icons/50n.svg";

import "./App.css";

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

  return (
    <div>
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route path="/about" component={About} />
      <Route path="/List" render={() => <List cities={cities} />} />

      <img src={d1} />
      <img src={n1} />

      <img src={d2} />
      <img src={n2} />

      <img src={d3} />
      <img src={n3} />

      <img src={d4} />
      <img src={n4} />

      <img src={d9} />
      <img src={n9} />

      <img src={d10} />
      <img src={n10} />

      <img src={d11} />
      <img src={n11} />

      <img src={d13} />
      <img src={n13} />

      <img src={d50} />
      <img src={n50} />

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
