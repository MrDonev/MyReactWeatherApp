import { useState } from 'react';
import('./index.css');

const FiveDayForecast = (props) => {
  if(!Object.keys(props.daysList).length) return <></>
  const fiveDayList=props.daysList;
  const day1=Object.entries(fiveDayList).slice(0,8).map(entry=>entry[1])
  const day2=Object.entries(fiveDayList).slice(8,16).map(entry=>entry[1])
  const day3=Object.entries(fiveDayList).slice(16,24).map(entry=>entry[1])
  const day4=Object.entries(fiveDayList).slice(24,32).map(entry=>entry[1])
  const day5=Object.entries(fiveDayList).slice(32).map(entry=>entry[1])
 const day1Forecast={
   temp_min: Math.round(day1.map(weatherObj=>+weatherObj.main.temp_min - 273.15).reduce((a,b)=>a+b)/day1.length),
   temp_max: Math.round(day1.map(weatherObj=>+weatherObj.main.temp_max - 273.15).reduce((a,b)=>a+b)/day1.length),
   feels_like: Math.round(day1.map(weatherObj=>+weatherObj.main.feels_like - 273.15).reduce((a,b)=>a+b)/day1.length),
   wind: Math.round(day1.map(weatherObj=>+weatherObj.wind.speed * 1000 / 60).reduce((a,b)=>a+b)/day1.length)
 } 
 const day2Forecast={
  temp_min: Math.round(day2.map(weatherObj=>+weatherObj.main.temp_min - 273.15).reduce((a,b)=>a+b)/day2.length),
  temp_max: Math.round(day2.map(weatherObj=>+weatherObj.main.temp_max - 273.15).reduce((a,b)=>a+b)/day2.length),
  feels_like: Math.round(day2.map(weatherObj=>+weatherObj.main.feels_like - 273.15).reduce((a,b)=>a+b)/day2.length),
  wind: Math.round(day2.map(weatherObj=>+weatherObj.wind.speed * 1000 / 60).reduce((a,b)=>a+b)/day2.length)
} 
const day3Forecast={
  temp_min: Math.round(day3.map(weatherObj=>+weatherObj.main.temp_min - 273.15).reduce((a,b)=>a+b)/day3.length),
  temp_max: Math.round(day3.map(weatherObj=>+weatherObj.main.temp_max - 273.15).reduce((a,b)=>a+b)/day3.length),
  feels_like: Math.round(day3.map(weatherObj=>+weatherObj.main.feels_like - 273.15).reduce((a,b)=>a+b)/day3.length),
  wind: Math.round(day3.map(weatherObj=>+weatherObj.wind.speed * 1000 / 60).reduce((a,b)=>a+b)/day3.length)
} 
const day4Forecast={
  temp_min: Math.round(day4.map(weatherObj=>+weatherObj.main.temp_min - 273.15).reduce((a,b)=>a+b)/day4.length),
  temp_max: Math.round(day4.map(weatherObj=>+weatherObj.main.temp_max - 273.15).reduce((a,b)=>a+b)/day4.length),
  feels_like: Math.round(day4.map(weatherObj=>+weatherObj.main.feels_like - 273.15).reduce((a,b)=>a+b)/day4.length),
  wind: Math.round(day4.map(weatherObj=>+weatherObj.wind.speed * 1000 / 60).reduce((a,b)=>a+b)/day4.length)
} 
const day5Forecast={
  temp_min: Math.round(day5.map(weatherObj=>+weatherObj.main.temp_min - 273.15).reduce((a,b)=>a+b)/day5.length),
  temp_max: Math.round(day5.map(weatherObj=>+weatherObj.main.temp_max - 273.15).reduce((a,b)=>a+b)/day5.length),
  feels_like: Math.round(day5.map(weatherObj=>+weatherObj.main.feels_like - 273.15).reduce((a,b)=>a+b)/day5.length),
  wind: Math.round(day5.map(weatherObj=>+weatherObj.wind.speed * 1000 / 60).reduce((a,b)=>a+b)/day5.length)
}
 console.log(day1Forecast)
  return (
    <div id='DaysForecast' className="forecast-section">
      <div>Day 1 
        <p>Min temperature : {day1Forecast.temp_min}°C</p>
        <p>Max temperature : {day1Forecast.temp_max}°C</p>
        <p>Wind : {day1Forecast.wind} km/h</p>
      </div>
      <div>Day 2
      <p>Min temperature : {day2Forecast.temp_min}°C</p>
        <p>Max temperature : {day2Forecast.temp_max}°C</p>
        <p>Wind : {day2Forecast.wind} km/h</p>
      </div>
      <div>Day 3
      <p>Min temperature : {day3Forecast.temp_min}°C</p>
        <p>Max temperature : {day3Forecast.temp_max}°C</p>
        <p>Wind : {day3Forecast.wind} km/h</p>
      </div>
      <div>Day 4
      <p>Min temperature : {day4Forecast.temp_min}°C</p>
        <p>Max temperature : {day4Forecast.temp_max}°C</p>
        <p>Wind : {day4Forecast.wind} km/h</p>
      </div>
      <div>Day 5
      <p>Min temperature : {day5Forecast.temp_min}°C</p>
        <p>Max temperature : {day5Forecast.temp_max}°C</p>
        <p>Wind : {day5Forecast.wind} km/h</p>
      </div>
    </div>
  );
};

export default FiveDayForecast;
