import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'
import './Contact.css'

export default function Contact() {
  const [flights, setFlights] = useState([]);
  const [departAirport, setDepartAirport] = useState("")
  const [departTime, setDepartTime] = useState("")
  const [arriveAirport, setArriveAirport] = useState("")
  const [arriveTime, setArriveTime] = useState("")

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_FLIGHT}`)
      .then(resp => resp.json())
      .then(data => {
        /*setDepartAirport(data.data[0].departure.airport)
        setDepartTime(data.data[0].departure.estimated)
        setArriveAirport(data.data[0].arrival.airport)
        setArriveTime(data.data[0].arrival.estimated)*/
      })
  }, [])

  return (
    <div className='flights'>
      <div className='flightCard-container'>
        <div>
          <input type='text' />
          <button>Search</button>
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
        {/*{flights.map((x) => <div key={uuid()}>Arrivals: {String(x.arrival.airport).toUpperCase()} {x.arrival.estimated}</div>)}
        {flights.map((x) => <div key={uuid()}>Departures: {String(x.departure.airport).toUpperCase()} {x.departure.estimated}</div>)}*/}
      </div>
    </div>
  )
}
