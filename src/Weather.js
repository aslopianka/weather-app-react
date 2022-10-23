import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [city, setCity] = useState(null);
  let [uiCity, setuiCity] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    console.log(response.data.weather.icon);
    // all this should be in one object
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setIcon(response.data.weather[0].icon);
  }
  function handleSumit(event) {
    event.preventDefault();
    setuiCity(city);
    const apiKey = "f7577236b82e90879ca7e6c7b2f05c47";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="box">
        <form onSubmit={handleSumit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={handleChange}
                type="search"
                placeholder="Enter city"
                autoFocus="on"
                id="city-input"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4 mt-5 d-flex leftPanel">
            {!!uiCity && <h2>{uiCity}</h2>}
            {/* {uiCity &&} is if statement && meaning if uiCity is "true" then render h2, !! important for some reason     */}
            <h6>Saturday, 22.10.2022</h6>
            <div className="temperature mt-4">
              <span>{Math.round(temperature)}</span>
              <span className="units">°C|F</span>
            </div>
          </div>
          <div className="col-8 d-flex rightPanel">
            {/* <div className="icon d-felx"> */}
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="current weather icon"
              width={150}
              height={200}
            />
            {/* </div> */}
            {/* <div> */}
            <p className="description">{description}</p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="additionalWeatherInfo">
        <ul>
          <li> Humidity: {humidity}% </li>
          <li> Windspeed: 13 km/h </li>
        </ul>
      </div>
      <span>
        {" "}
        <a
          href="https://github.com/aslopianka/weather-app-react"
          target="-blank"
        >
          {" "}
          openSourceCode{" "}
        </a>{" "}
        by Anna Slopianka{" "}
      </span>
    </div>
  );
}
