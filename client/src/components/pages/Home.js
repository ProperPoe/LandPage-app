import React, { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Denver");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d9cb7c339605afd51ef5359009424a5a`)
      .then(resp => resp.json())
      .then(data => {
        setWeather(data)
      }
  )}, [city])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search);
  }

  return (
    <div>
      <div className='card'>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='search'/>
        <button type='submit'>Search</button>
        </form>
        City: {weather.name}
        Temp: {weather.main && Math.round(weather.main.temp)}
        Conditions: {weather.weather && weather.weather[0].main}
      </div>
    </div>
  )
}
