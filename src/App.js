import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// Pages
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ListCities from "./components/ListCities/ListCities";
import City from "./components/City/City";
import NotFound from "./components/404/index";

// Utility
import Nav from "./components/Utility/Navbar/Nav";
import Alerts from "./components/Utility/Alerts/Alerts";
import getData from "./utility/getData";

import "./App.css";

import datalist from "./utility/city.list.json";

function App() {
  const filterDataList = () => {
    const newData = {};

    for (let key in datalist) {
      newData[key] = [];
      for (let i = 0; i < datalist[key].length; i++) {
        newData[key].push({ name: datalist[key][i].name });
      }
    }
    return newData;
  };

  var json = JSON.stringify(filterDataList());

  json = [json];

  const bl1 = new Blob(json, { type: "text/play;charset=utf-8" });

  var url = window.URL || window.webkitURL;

  const link = url.createObjectURL(bl1);

  let downloadFile = (
    <a download="city.list.json" href={link}>
      download
    </a>
  );

  const [cities, setCities] = useState([]);
  const [alert, setAlert] = useState({});

  const onSearch = (name) => {
    const saveData = (city) => {
      setCities((oldCities) => [city, ...oldCities]);
    };

    const createAlert = ({ type, message }) => {
      setAlert((oldAlert) => {
        return { type, message };
      });
    };

    const cityExist = (id) => {
      return cities.filter((city) => city.id === id).length;
    };

    getData(name, saveData, createAlert, cityExist);

    setTimeout(
      () =>
        setAlert((oldAlert) => {
          return {};
        }),
      5000
    );
  };

  // Delete city
  const deleteCity = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };

  const location = useLocation();

  // Target pages with REGEX ( home - about - city )
  // /^\/(about|(city\/[0-9]+))?$/

  if (/^\/(about|(city\/[0-9]+))?$/.test(location.pathname)) {
    document.body.style.maxHeight = "100vh";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.maxHeight = "auto";
    document.body.style.overflowY = "auto";
  }

  return (
    <div>
      {/* Nav always on top */}

      {downloadFile}

      <Nav onSearch={onSearch} hashedList={datalist} />

      {alert.message && <Alerts alert={alert} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/List"
          render={() => <ListCities cities={cities} onDelete={deleteCity} />}
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

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
