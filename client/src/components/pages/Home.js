import React, { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=d9cb7c339605afd51ef5359009424a5a')
      .then(resp => resp.json())
      .then(data => {
        setWeather(data)
        console.log(data)
      }
  )}, [])
  return (
    <div>
      <input type='text'/>
      <button>Search</button>
      City: {weather.name}
      Temp: {weather.main && Math.round(weather.main.temp)}
      Conditions: {weather.weather && weather.weather[0].main}
    </div>
  )
}
