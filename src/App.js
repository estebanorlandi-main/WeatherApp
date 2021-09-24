import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import List from "./pages/List/List";

// Utility
import Nav from "./components/Navbar/Navbar";
import "./App.css";

export default function App() {
  const [cities, setCities] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const onSearch = (name) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=9561990c751a1e83ff43936326173469`
    )
      .then((res) => res.json())
      .then((data) => {
        if (cities.some((city) => city.id === data.id)) return;
        const cityModel = {
          id: data.id,
          name: data.name,
          temp: Math.floor(data.main.temp),
          min: Math.floor(data.main.temp_min),
          max: Math.floor(data.main.temp_max),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        };
        setCities((oldCities) => [...oldCities, cityModel]);
      });
  };
  const toFavorite = (id) => {
    if (favorites.length > 2) return;

    setFavorites((oldFavorites) => [...oldFavorites, id]);
  };

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" render={({ match }) => <List cities={cities} />} />
      </Switch>
    </div>
  );
}
