import React, { useState, useEffect} from 'react';
import './Experiences.css'
import Axios from 'axios';
import ExperienceLikes from './ExperienceLikes';
import ExperienceView from './ExperienceView';

function Experiences() {
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [picClicked, setPickClicked] = useState(false)
    const [viewId, setViewId] = useState(null)
    const [viewLocation, setViewLocation] = useState("")

    const createExperience = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:9001/', {location})
            .then((response) => {
                setListExperience([...listExperience,{_id: response.data._id, location, likeCount: response.data.likeCount}]);
            })  
    }    

    useEffect(() => {
        Axios.get('http://localhost:9001/')
            .then((response) => {
                setListExperience(response.data)
            })
    }, []);

    const viewPost = async (id) => {
        setPickClicked(true)
        setViewId(id)
        await Axios.get(`http://localhost:9001/${id}/getPost`)
            .then((response) => {
                setViewLocation(response.data.location)
            }
            )
    }

return (
    <>
    <div className={picClicked === true ? 'form-contain-hidden' : 'form--contain'}>
        <div className='form--card'>
            <form onSubmit={createExperience}>
                <textarea type='text' onChange={(event) => {setLocation(event.target.value)}} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>    
    <div className={picClicked === true ? 'experience-contain-hidden' : 'experience--container'}>
        <ExperienceLikes setListExperience={setListExperience} picClicked={picClicked} setPickClicked={setPickClicked} listExperience={listExperience} viewPost={viewPost} />
    </div>
    <ExperienceView picClicked={picClicked} setPickClicked={setPickClicked} viewPost={viewPost} id={viewId} viewLocation={viewLocation}/>
    </>
)
}

export default Experiences
