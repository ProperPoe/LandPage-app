import React, { useState, useEffect } from 'react';
import './Experiences.css'
import Axios from 'axios';
import {v4 as uuid} from "uuid";

function Experiences() {
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    
    useEffect(() => {
        Axios.get('http://localhost:9001/getExperiences')
            .then((response) => {setListExperience(response.data)})
    }, []);

    const createExperience = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:9001/createExperience', {location,})
            .then((response) => {setListExperience([...listExperience,{location}])})
    }

    return (
        <>
        <div className='form--contain'>
            <div className='form--card'>
                <form onSubmit={createExperience}>
                    <textarea type='text' onChange={(event) => {setLocation(event.target.value)}} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='experience--container'>
                {listExperience.map((x) => <div key={uuid()} className='experience--card'>{x.location}</div>)}
            </div>
        </div>
        </>
    )
}

export default Experiences
