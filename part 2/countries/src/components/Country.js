import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [lat, lng] = country.capitalInfo.latlng;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setWeather(res.data));
  }, [country]);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>population: {country.population}</p>
      <p>area: {country.area}</p>

      <h2>languages</h2>
      <ul>
        {Object.entries(country.languages).map(([abbr, lang]) => (
          <li key={abbr}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flag} />

      <h2>Weather in {country.capital[0]}</h2>
      {weather && (
        <div>
          <p>
            <b>temperature:</b> {(weather.main.temp - 273.15).toFixed(2)} Celsius
          </p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default Country;
