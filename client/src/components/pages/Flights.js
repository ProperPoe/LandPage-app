import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'
import './Flights.css'

export default function Flights() {
  const [inputVal, setInputVal] = useState("")
  const [flights, setFlights] = useState([]);
  const [index, setIndex] = useState(null)
  const [departAirport, setDepartAirport] = useState("")
  const [departTime, setDepartTime] = useState("")
  const [arriveAirport, setArriveAirport] = useState("")
  const [arriveTime, setArriveTime] = useState("")

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_FLIGHT}`)
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

  return (
    <div className='flights'>
      <div className='flightCard-container'>
        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className='flight-info'>
          <div className='flight-listings'>
            <h2>Departing</h2>
            <div className='airport-container'>
              <div className='airport'>AIRPORT:</div>
              <div className='flight-city'>{departAirport ? departAirport : ""}</div>
            </div>
            <div className='time-container'>
              <div className='time'>TIME:</div>
              <div>{departTime ? departTime : ""}</div>
            </div>
          </div>
          <div className='flight-listings'>
            <h2>Arriving</h2>
            <div className='airport-container'>
              <div className='airport'>AIRPORT:</div>
              <div className='flight-city'>{arriveAirport ? arriveAirport : ""}</div>
            </div>
            <div className='time-container'>
              <div className='time'>TIME:</div>
              <div>{arriveTime ? arriveTime : ""}</div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
