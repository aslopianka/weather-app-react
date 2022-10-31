import React from "react";
import "./Forecast.css";
import { getDayOfWeek } from "./FormattedDate";

export default function Forecast({ forecastData }) {
  return (
    <div className="Forecast">
      <div className="forecastBox">
        <ul className="row">
          {/* for each item in array run function */}
          {forecastData.map((item) => {
            return (
              <ForecastDay
                maxTemp={item.temp.max}
                minTemp={item.temp.min}
                icon={item.weather[0].icon}
                weatherDescription={item.weather[0].description}
                timestamp={item.dt}
              />
            );
          })}
        </ul>
      </div>
      <span className="contactLink">
        {" "}
        <a
          href="https://github.com/aslopianka/weather-app-react"
          target="-blank"
        >
          {" "}
          openSourceCode{" "}
        </a>{" "}
        by{" "}
        <a href="https://unrivaled-gaufre-1be69a.netlify.app" target="-blank">
          Anna Slopianka
        </a>{" "}
      </span>
    </div>
  );
}

function ForecastDay({
  maxTemp,
  minTemp,
  icon,
  weatherDescription,
  timestamp,
}) {
  const forecastDate = new Date(timestamp * 1000);
  const uiForecastDay = getDayOfWeek(forecastDate);
  return (
    <li className="col-sm-2">
      <div className="d-flex forecastDay">
        <strong>{uiForecastDay} </strong>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="forecast icon"
          width={100}
          height={100}
        ></img>
        <p>{weatherDescription}</p>
        <p>
          {Math.round(minTemp)}/{Math.round(maxTemp)}°C
        </p>
      </div>
    </li>
  );
}
