import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'

export default function Contact() {
  /*const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://api.aviationstack.com/v1/flights?access_key=a37371ca07c73046835ddd370b07afbc')
      .then(resp => resp.json())
      .then(data => {
        setFlights(data.data)
      })
  }, [])

  console.log(flights)*/

  return (
    <div>
      {/*<input type='text' />
      <button>Search</button>
      {flights.map((x) => <div key={uuid()}>Arrivals: {String(x.arrival.airport).toUpperCase()} {x.arrival.estimated}</div>)}
  {flights.map((x) => <div key={uuid()}>Departures: {String(x.departure.airport).toUpperCase()} {x.departure.estimated}</div>)}*/}
    </div>
  )
}
