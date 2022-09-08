import React, { useState, useEffect, useRef } from 'react';
import './Experiences.css'
import Axios from 'axios';
import {v4 as uuid} from "uuid";
import Space from './images/space.jpg'

function Experiences() {
    const [currentId, setCurrentId] = useState(0)
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [likeCount, setLikeCount] = useState(0)
    const [click, setClick] = useState(false)
    const [picClicked, setPicClicked] = useState(false)
    const [index, setIndex] = useState(0)

    const likes = useRef(null);
    
    useEffect(() => {
        Axios.get('http://localhost:9001/getExperiences')
            .then((response) => {setListExperience(response.data)})
    }, []);

    const createExperience = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:9001/createExperience', {location,})
            .then((response) => {setListExperience([...listExperience,{location}])})
    }        

    const handleClick = () => {
        setIndex(index + 1)
    }

    const updateLike = (e) => {
        console.log(currentId)
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

    const cardStyles = {
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "161px",
        height: "180px",
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "20px",
        position: "relative",
    }

    console.log(listExperience.length)
    console.log(index)

    return (
        <>
        <div className='form--contain'>
            <div className='form--card'>
                <form onSubmit={createExperience}>
                    <textarea type='text' onChange={(event) => {setLocation(event.target.value)}} />
                    <button type='submit' onClick={handleClick}>Submit</button>
                </form>
            </div>
            <div className='experience--container'>
                {listExperience.map((x, id) => 
                    <div key={id}>
                        {picClicked === false ?
                        <div key={id} className={`experience--card${id}`} style={cardStyles}>
                            <div className="condRender" onClick={() => setPicClicked(true)}>
                                <div className='locate'>
                                    {x.location}
                                </div>
                                <div className='image' style={ { display: "flex", justifyContent: "center"} }  >
                                    <img src={Space} alt='space' style={ { maxWidth: "100%", maxHeight:"100%", overflow: "hidden", marginBottom: "20px"} } height={125} />
                                </div> 
                            </div> 
                            
                            <div className={picClicked === true ?'likeBtnContainer-hidden' : 'likeBtnContainer'}>
                                <button className='likeBtn' label={`curse${id}`} type='button' id={id} ref={likes} onClick={updateLike}>Like</button>
                                <div className='count'>{likeCount}</div>
                            </div>
                        </div>
                        : <img src={Space} alt='space' height={200} width={200} onClick={() => setPicClicked(false)}/> }
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Experiences
