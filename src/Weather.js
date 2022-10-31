import React, { useState, useEffect } from "react";

import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function Weather({ defaultCity }) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(defaultCity);

  async function fetchAndStoreWeatherData(newCity) {
    setReady(false);
    const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
    // Data is fetched here
    const response = await axios.get(WeatherUrl);

    const latitude = response.data.coord.lat;
    const longitude = response.data.coord.lon;
    const ForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=6&appid=${apiKey}&units=metric`;
    const forecastResponse = await axios.get(ForecastUrl);

    // Data is formatted here
    const formattedData = {
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      forecast: forecastResponse.data.daily.slice(1, 6),
    };

    // Data is set to state here
    setWeather(formattedData);
    setCity(newCity);
    setReady(true);
  }

  function handleSumit(event) {
    event.preventDefault();
    const city = event.target.elements["city-input"].value;
    fetchAndStoreWeatherData(city);
  }

  // React use effect - https://reactjs.org/docs/hooks-effect.html, it is a standard
  // react hook that allows you to interact with services (an api for instance) outside of your component
  // the array at the end (brackets) are the pieces of data that the useEffect depends on. If they change,
  // the effect will be called again
  useEffect(() => {
    fetchAndStoreWeatherData(city);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Weather">
      <div className="box">
        <form onSubmit={handleSumit}>
          <div className="row">
            <div className="col-9">
              <input
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
        {/* if (=?) ready (=condition) is false (=!) render (loading..) else (=:) render ()*/}
        {!ready ? (
          <p>Loading..</p>
        ) : (
          <div className="row">
            <div className="col-sm-4 mt-5 d-flex leftPanel">
              <h2>{city}</h2>
              <h6>
                {" "}
                <FormattedDate currentDate={weather.date} />{" "}
              </h6>
              <div className="temperature mt-4">
                <TemperatureConversion celsiusTemp={weather.temperature} />
              </div>
            </div>
            <div className="col-sm-8 d-flex rightPanel">
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="current weather icon"
              />

              <p className="description">{weather.description}</p>
            </div>
          </div>
        )}
      </div>
      {/* if ready is true then render what is in () (= condition &&) 
      second if condition (1. in line 80) needed here because otherwise the 
      layout of page would have changed when rendering "loading.." */}
      {ready && (
        <>
          <div className="additionalWeatherInfo">
            <ul>
              <li> Temp min: {Math.round(weather.tempMin)} °C </li>
              <li> Temp max: {Math.round(weather.tempMax)} °C </li>
            </ul>
            <ul>
              <li> Humidity: {weather.humidity}% </li>
              <li> Windspeed: {weather.windspeed} km/h </li>
            </ul>
          </div>
          <Forecast forecastData={weather.forecast} />
        </>
      )}
    </div>
  );
}
