/* eslint-disable no-undef */
import React, { useState } from "react";
import './index.css'

const api = {
  key:"eee64fc456baeeaa0be07dca450dabde",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [weather,setWeather] = useState({});

  const search = evt =>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <>
      {/* <div className = {(typeof weather.main != "undefined") ? ((weather.main.temp >= 16 ) ? 'app sunny' :(weather.main.temp >= 30 ) ? 'app warm':'app'):'app'}> */}
      <div className = {(typeof weather.main != "undefined") ? ((weather.main.temp <= 16 ) ? 'app':(weather.main.temp <= 34 ) ? 'app sunny' :(weather.main.temp <= 60 ) ? 'app warm':'app'):'app'}>
        <main>
          <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search Location..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
          </div>
         
          {(typeof weather.main!="undefined") ? (
          <div>
            <div className="location-box">
              <div className="location"> {weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather"> {weather.weather[0].main}</div>
              {/* <div className="weather"> {weather.main.humidity}</div>
              <div className="weather"> {weather.main.feels_like}</div>
              <div className="weather"> {weather.wind.speed}</div> */}
            </div>

              <div className="w_info">
                <div className="feels">
                  <p className="bold" >{Math.round(weather.main.feels_like)}°c</p>
                  <p>Feels like </p> 
                </div>
                <div className="humidity">
                  <p className="bold" > {weather.main.humidity}%</p>
                  <p> Humidity</p>
                </div>
                <div className="wind">
                  <p className="bold" >{Math.round(weather.wind.speed)} MPH</p>
                  <p>Wind speed</p>
                   
                </div>
              </div>

          </div>
          ):('')}
         
        </main>
      </div>
    </>
  );
}

export default App;
