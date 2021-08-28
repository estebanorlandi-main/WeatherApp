import React, { useState } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import City from "./components/City/City";
import About from "./components/About/About";
import List from "./components/List/List";
import Alerts from "./components/Alerts/Alerts";

import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY || require("./config.js").API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  const [alert, setAlert] = useState({});

  const onSearch = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject({ message: "City not found." });
      })
      .then((data) => {
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
          return setAlert((oldError) => {
            return { type: "error", message: "City already save." };
          });
        }

        setCities((oldCities) => [res, ...oldCities]);
        setAlert((oldError) => {
          return { type: "success", message: "City added." };
        });
      })
      .catch((e) => {
        setAlert((oldError) => {
          return { type: "error", message: e.message };
        });
      });
    setTimeout(
      () =>
        setAlert((oldAlert) => {
          return {};
        }),
      6000
    );
  };

  const onDelete = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };

  return (
    <div>
      {/* Barra de navegacion siempre */}
      <Nav onSearch={onSearch} />

      {alert.message && <Alerts alert={alert} />}

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
