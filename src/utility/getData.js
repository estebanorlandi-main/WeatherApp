// Get API key from env or config file
const API_KEY =
  process.env.REACT_APP_API_KEY || require("../config.js").API_KEY;

const URL = (q) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}&units=metric`;

const getData = (q, cbData, cbAlert, cityExist) => {
  fetch(URL(q))
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject({ type: "error", message: "City not found." });
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

      if (cityExist(data.id)) {
        return cbAlert({ type: "error", message: "City already save." });
      }

      cbData(res);
      cbAlert({ type: "success", message: "City added." });
    })
    .catch((e) => {
      cbAlert({ type: e.type, message: e.message });
    });
};

export default getData;
