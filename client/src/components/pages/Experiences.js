import React, { useState, useEffect} from 'react';
import './Experiences.css'
import Axios from 'axios';
import ExperienceLikes from './ExperienceLikes';
import ExperienceView from './ExperienceView';
import FileBase64 from 'react-file-base64';

function Experiences() {
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const [picClicked, setPickClicked] = useState(false)
    const [viewId, setViewId] = useState(null)
    const [viewLocation, setViewLocation] = useState("")
    const [viewImage, setViewImage] = useState("")

    const createExperience = async (e) => {
        e.preventDefault();

        await Axios.post('http://localhost:9001/', {location, image, user: localStorage.getItem("userID")})
            .then((response) => {
                setListExperience([...listExperience,{_id: response.data.newEx._id, location, image, likeCount: response.data.newEx.likeCount, user: response.data.newEx.user}]);
                console.log(response)
            }).catch((err) => console.log(err))  
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
                setViewImage(response.data.image)
            }
            )
    }

return (
    <>
    <div className={picClicked === true ? 'form-contain-hidden' : 'form--contain'}>
        <div className='form--card'>
            <form onSubmit={createExperience}>
                <textarea type='text' placeholder='Enter a location...' onChange={(event) => {setLocation(event.target.value)}} />
                <FileBase64 multiple={false} onDone={({base64}) => setImage(base64)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>    
    <div className={picClicked === false ? 'experience--container' : 'experience-contain-hidden'}>
        <ExperienceLikes setListExperience={setListExperience} picClicked={picClicked} setPickClicked={setPickClicked} listExperience={listExperience} viewPost={viewPost} image={image} isUser={localStorage.getItem("userID")} />
    </div>
    <ExperienceView picClicked={picClicked} setPickClicked={setPickClicked} viewPost={viewPost} id={viewId} viewLocation={viewLocation} viewImage={viewImage} />
    </>
)
}

export default Experiences
