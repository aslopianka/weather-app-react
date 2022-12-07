const convertTemperature = ({ celsiusTemp, unit }) => {
  if (unit === 'celsius') {
    return Math.round(celsiusTemp);
  } else {
    const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    return Math.round(fahrenheitTemp);
  }
};

export default convertTemperature;
