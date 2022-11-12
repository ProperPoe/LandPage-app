import React, { useState, useEffect} from 'react';
import './Experiences.css'
import Axios from 'axios';
import ExperienceLikes from './ExperienceLikes';
import ExperienceView from './ExperienceView';
import FileBase64 from 'react-file-base64';
import * as api from "../../api/index.js"

function Experiences() {
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [editLocation, setEditLocation] = useState("")
    const [image, setImage] = useState("")
    const [picClicked, setPickClicked] = useState(false)
    const [viewId, setViewId] = useState(null)
    const [viewLocation, setViewLocation] = useState("")
    const [viewImage, setViewImage] = useState("")
    const [edit, setEdit] = useState(false);
    const [editID, setEditID] = useState(null);

    let edID = editID;
    

    const createExperience = async (e) => {
        e.preventDefault();

        await Axios.post('http://localhost:9001/', {location, image, user: localStorage.getItem("userID")})
            .then((response) => {
                setListExperience([{_id: response.data.newEx._id, location, image, likeCount: response.data.newEx.likeCount, user: response.data.newEx.user}, ...listExperience]);
                console.log(response)
            }).catch((err) => console.log(err))  
    }    

    const editExperience = (e) => {
        e.preventDefault();
        const newLocation = editLocation;

        Axios.put(`http://localhost:9001/${editID}/updatePost`, {newLocation, editID})
            .then((response) => {
                setListExperience((previous) => {
                    return previous.map((prev) => {
                        return prev._id === editID ? {...prev, location: newLocation} : prev
                    })
                })     
        })
        e.target.reset();
        setEdit(false)
    }

    useEffect(() => {
        Axios.get('http://localhost:9001/')
            .then((response) => {
                setListExperience(response.data.reverse())
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
        {!edit ? 
        <div className='form--card'>
            <form onSubmit={createExperience}>
                <textarea type='text' placeholder='Enter a location...' onChange={(event) => {setLocation(event.target.value)}} />
                <FileBase64 multiple={false} onDone={({base64}) => setImage(base64)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
        :
        <div className='edit--card'>
            <form onSubmit={editExperience}>
                <textarea type='text' placeholder='Enter a location...' onChange={(event) => {setEditLocation(event.target.value)}} />
                <button type='submit'>Edit</button>
            </form>
        </div>}
    </div>    
    <div className={picClicked === false ? 'experience--container' : 'experience-contain-hidden'}>
        <ExperienceLikes setListExperience={setListExperience} picClicked={picClicked} setPickClicked={setPickClicked} listExperience={listExperience} viewPost={viewPost} image={image} isUser={localStorage.getItem("userID")} setEdit={setEdit} setEditID={setEditID} />
    </div>
    <ExperienceView picClicked={picClicked} setPickClicked={setPickClicked} viewPost={viewPost} id={viewId} viewLocation={viewLocation} viewImage={viewImage} />
    </>
)
}

export default Experiences
