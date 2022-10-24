import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";

export default function Weather() {
  // const [temperature, setTemperature] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [humidity, setHumidity] = useState(null);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(null);
  const [uiCity, setuiCity] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      // winddegree: response.data.wind.deg,
    });
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
              <span>{Math.round(weather.temperature)}</span>
              <span className="units">°C|F</span>
            </div>
          </div>
          <div className="col-8 d-flex rightPanel">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="current weather icon"
              width={200}
              height={200}
            />

            <p className="description">{weather.description}</p>
          </div>
        </div>
      </div>
      <div className="additionalWeatherInfo">
        <ul>
          <li> Temp min: {Math.round(weather.tempMin)} °C </li>
          <li> Temp max: {Math.round(weather.tempMax)} °C </li>
        </ul>
        <ul>
          <li> Humidity: {weather.humidity}% </li>
          <li> Windspeed: {weather.windspeed} km/h </li>
          {/* <li> Wind degree: {weather.winddegree}° </li> */}
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
