import React from "react";
import "./Forecast.css";

export default function Forecast({ forecastData }) {
  console.log(forecastData);
  return (
    <div className="Forecast">
      <div className="forecastBox">
        <ul className="row">
          <li className="col-2">
            {/* this all needs to be in new component that maps through forecastData */}
            <img
              src={`http://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`}
              alt="current weather icon"
            />
          </li>
          <li className="col-2"></li>
          <li className="col-2"></li>
          <li className="col-2"></li>
          <li className="col-2"></li>
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

/* {forecastData.map((item) => { */

// return (
//   <ForecastDay
//     maxTemp={item.main.temp_max}
//     minTemp={item.main.temp_max}
//     icon={item.weather[0].icon}
//     weatherDescription={item.weather[0].description}
//     timestamp={item.dt}
//   />
// );
//           })}
// function ForecastDay({
//   maxTemp,
//   minTemp,
//   icon,
//   weatherDescription,
//   timestamp,
// }) {
//   const dateObject = new Date(timestamp);
//   console.log(dateObject);
//   // const day = new Date(timestamp) get Day()
//   return (
//     <li className="col-2">
//       {" "}
//       <img
//         src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
//         alt="forecast icon"
//         width={100}
//         height={100}
//       ></img>
//       <p>{weatherDescription}</p>
//       {Math.round(minTemp)}/{Math.round(maxTemp)}
//     </li>
//   );
// }
