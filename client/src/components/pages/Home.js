import React, { useEffect, useState } from 'react'
import './Home.css'

/*
.weather {
    background: url("https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTIyMTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1OTU2MzM4OA&ixlib=rb-1.2.1&q=80&w=1080") center center/cover no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
}*/

const page = Math.floor(Math.random() * 100) + 1


export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Denver");
  const [bg, setBg] = useState("");
  const [backState, setBackState] = useState("");
  const [search, setSearch] = useState("");
  const [photo, setPhoto] = useState("Denver")

  console.log(page)
 

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

  const handleClick = () => {
    setPhoto(search)
  }

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${photo}&client_id=7dNP4Ri3043iEDptPjB64Ik8FlEZTD8KH6Mz-dT_-Ho`)
      .then(res => res.json())
      .then(pics => {
        setBg(pics.results[Math.floor(Math.random() * 9) + 1].urls.regular)
        setBackState(pics)
        console.log(pics)
      })
  }, [photo])

  return (
    <div className='weather' style={ photo === "Denver" ? ({
      backgroundImage: `url('${bg}')`
      }) : ({backgroundImage: `url('${backState.results[Math.floor(Math.random() * 9) + 1].urls.regular}')`})}>
      <div className='card'>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='search'/>
        <button onClick={handleClick} type='submit'>Search</button>
        </form>
        <div className='weather--display'>
          <div>City: {weather.name}</div>
          <div>Temp: {weather.main && Math.round(weather.main.temp)}℉</div>
          <div>Conditions: {weather.weather && weather.weather[0].main}</div>
        </div>
      </div>
    </div>
  )
}
