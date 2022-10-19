import React,  {useState} from "react";

import "./Weather.css"
import axios from "axios";

export default function Weather() {
    let [temperature, setTemperature] = useState(null);
    let [description, setDescription] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [city, setCity] = useState(null);
    let [uiCity, setuiCity] = useState(null);
  
    function showWeather(response) {
      // console.log(response);
      // all this should be in one object
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
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
      <div className="Search">
        <div className="SearchEngine">
          <form onSubmit={handleSumit}>
            <input
              onChange={handleChange}
              type="search"
              placeholder="Enter city"
              autoFocus="on"
              id="city-input"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        {!!uiCity && <h2>{uiCity}</h2>} 
  {/* {uiCity &&} is if statement && meaning if uiCity is "true"then render h2, !!  */}
        <div>
          <ul className="WeatherInfo">
            <li> Temperature: {Math.round(temperature)} °C </li>
            <li> Description: {description} </li>
            <li> Humidity: {humidity}% </li>
          </ul>
        </div>
      </div>
    );
  }