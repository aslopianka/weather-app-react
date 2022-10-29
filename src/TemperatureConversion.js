import React, { useState } from "react";

export default function TemperatureConversion({ celsiusTemp }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(celsiusTemp)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    return (
      <div className="TemperatureConversion">
        <span>{Math.round(fahrenheitTemp)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
