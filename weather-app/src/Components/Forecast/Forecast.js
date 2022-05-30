import React, { useState } from 'react';
import Conditions from './Conditions';
import './Forecast.css';
export const Forecast = () => {
  let [city, setCity] = useState('');
  let [units, setUnits] = useState('metric');
  let [responseObj, setResponseObj] = useState({});
  const encodedCity = encodeURIComponent(city);
  function getForecast(event) {
      event.preventDefault()
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '4b8a5c1716msh90be831e8f5647bp165509jsn8aaaa62c5f1f',
      },
    };

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedCity}&units=${units}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResponseObj(response);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h2>Current Weather</h2>
      <div>
        <Conditions responseObj={responseObj} />
      </div>
      <form className='input-form' onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={units === 'imperial'}
            value="imperial"
            onChange={(event) => setUnits(event.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={units === 'metric'}
            value="metric"
            onChange={(event) => setUnits(event.target.value)}
          />
          Celsius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
    </div>
  );
};
