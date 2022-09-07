import React, { useState, useEffect, useRef } from 'react';
import './Experiences.css'
import Axios from 'axios';
import {v4 as uuid} from "uuid";
import Space from './images/space.jpg'

function Experiences() {
    const [currentId, setCurrentId] = useState(null)
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [likeCount, setLikeCount] = useState(0)
    const [click, setClick] = useState(false)

    const likes = useRef();
    
    useEffect(() => {
        Axios.get('http://localhost:9001/getExperiences')
            .then((response) => {setListExperience(response.data)})
    }, []);

    const createExperience = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:9001/createExperience', {location,})
            .then((response) => {setListExperience([...listExperience,{location}])})
    }        

    const updateLike = (e) => {
        console.log(likes.current)
        console.log(e.currentTarget.id)
        if(e.currentTarget.id){
            if(click === false){
                setLikeCount(likeCount + 1)
                setClick(true)
            }else if(click === true){
                setLikeCount(likeCount - 1)
                setClick(false)
            }
        }
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
                {listExperience.map((x, id) => 
                    <div key={id} className='experience--card' ref={likes}>
                        <div className='locate'>
                            {x.location}
                        </div>
                        <div className='image' style={ { display: "flex", justifyContent: "center"} }  >
                            <img src={Space} alt='space' style={ { maxWidth: "100%", maxHeight:"100%", overflow: "hidden", marginBottom: "20px"} } height={125} />
                        </div>
                        <div className='likeBtnContainer'>
                            <button className='likeBtn' type='button' id={id} onClick={updateLike}>Like</button>
                            <div className='count'>{likeCount}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Experiences
