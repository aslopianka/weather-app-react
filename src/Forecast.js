import React from 'react';
import './Forecast.css';
import { getDayOfWeek } from './FormattedDate';
import convertTemperature from './convertTemperature';

export default function Forecast({ forecastData, unit }) {
  return (
    <div className='Forecast'>
      <div className='forecastBox'>
        <ul className='row'>
          {/* for each item in array run function */}
          {forecastData.map((item) => {
            return (
              <ForecastDay
                tempMax={item.temp.max}
                tempMin={item.temp.min}
                icon={item.weather[0].icon}
                weatherDescription={item.weather[0].description}
                timestamp={item.dt}
                unit={unit}
              />
            );
          })}
        </ul>
      </div>
      <span className='contactLink'>
        {' '}
        <a
          href='https://github.com/aslopianka/weather-app-react'
          target='-blank'
        >
          {' '}
          openSourceCode{' '}
        </a>{' '}
        by{' '}
        <a href='https://unrivaled-gaufre-1be69a.netlify.app' target='-blank'>
          Anna Slopianka
        </a>{' '}
      </span>
    </div>
  );
}

function ForecastDay({
  tempMax,
  tempMin,
  icon,
  weatherDescription,
  timestamp,
  unit,
  setUnit,
}) {
  const forecastDate = new Date(timestamp * 1000);
  const uiForecastDay = getDayOfWeek(forecastDate);
  return (
    <li className='col-sm-2'>
      <div className='d-flex forecastDay'>
        <strong>{uiForecastDay} </strong>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='forecast icon'
          width={100}
          height={100}
        ></img>
        <p>{weatherDescription}</p>

        <p>
          {convertTemperature({
            celsiusTemp: tempMin,
            unit: unit,
          })}{' '}
          /
          {convertTemperature({
            celsiusTemp: tempMax,
            unit: unit,
          })}{' '}
          {unit === 'celsius' ? '°C' : '°F'}
        </p>
      </div>
    </li>
  );
}
