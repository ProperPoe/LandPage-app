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

const page = Math.floor(Math.random() * 20) + 1


export default function Home() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Denver");
  const [bg, setBg] = useState("");
  //const [backState, setBackState] = useState("");
  const [search, setSearch] = useState("");
  const [photo, setPhoto] = useState("Denver")

  console.log(page)
 

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER}`)
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
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${photo}&client_id=${process.env.REACT_APP_BG}`)
      .then(res => res.json())
      .then(pics => {
        if(photo === "Denver"){
          setBg(pics.results[Math.floor(Math.random() * 9) + 1].urls.raw)
        }else if(photo == search){
          setBg(pics.results[Math.floor(Math.random() * 9) + 1].urls.raw) 
        }
        //setBackState(pics)
        console.log(pics)
      })
  }, [photo])

  return (
    <div className='weather' style={ { backgroundImage: `url('${bg}')`, height: '100vh', backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} >
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
