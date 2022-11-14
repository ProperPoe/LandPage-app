import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'
import './Flights.css'

const page = Math.floor(Math.random() * 20) + 1

export default function Flights() {
  const [inputVal, setInputVal] = useState("")
  const [flights, setFlights] = useState([]);
  const [index, setIndex] = useState(null)
  const [departAirport, setDepartAirport] = useState("")
  const [departTime, setDepartTime] = useState("")
  const [arriveAirport, setArriveAirport] = useState("")
  const [arriveTime, setArriveTime] = useState("")
  const [bg, setBg] = useState("")
  const [photo, setPhoto] = useState("Airport")

  const bgStyle = {
    backgroundImage: `url(${bg})`,
    height: '100vh', 
    backgroundPosition: "center center", 
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_FLIGHT}`, {referrerPolicy: "unsafe-url"})
      .then(resp => resp.json())
      .then(data => {
        setFlights(data.data)  
      })
  }, [])

  console.log(flights)

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    flights.forEach((flight, index) => {
      if(flight.flight.number === inputVal){
        setDepartAirport(flights[index].departure.airport)
        setDepartTime(flights[index].departure.estimated)
        setArriveAirport(flights[index].arrival.airport)
        setArriveTime(flights[index].arrival.estimated)
      }
    })
  }

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${photo}&client_id=${process.env.REACT_APP_BG}`)
      .then(res => res.json())
      .then(data => {
        
        //setBackState(pics)
        setBg(data.results[Math.floor(Math.random() * 9) + 1].urls.raw)
      })
  }, [photo])


  return (
    <div className='flights' style={bgStyle}>
      <div className='flightCard-container'>
        <div className='flight-input'>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' />
            <button className='btn-flight' type='submit'>Search</button>
          </form>
        </div>
        <div className='flight-info'>
          <div className='flight-listings-departing'>
            <h2>Departing</h2>
            <div className='airport-container-depart'>
              <div className='airport'>AIRPORT:</div>
              <div className='flight-city'>{departAirport ? departAirport : ""}</div>
            </div>
            <div className='time-container'>
              <div className='time'>TIME:</div>
              <div>{departTime ? departTime : ""}</div>
            </div>
          </div>
          <div className='flight-listings-arriving'>
            <h2>Arriving</h2>
            <div className='airport-container-arrive'>
              <div className='airport'>AIRPORT:</div>
              <div className='flight-city'>{arriveAirport ? arriveAirport : ""}</div>
            </div>
            <div className='time-container'>
              <div className='time'>TIME:</div>
              <div>{arriveTime ? arriveTime : ""}</div>
            </div>
          </div>
          <div className='flight-status'>
            <h3>Status: </h3>
          </div>  
        </div>
      </div>
    </div>
  )
}
