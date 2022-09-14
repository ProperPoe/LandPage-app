import React, { useState, useEffect} from 'react';
import './Experiences.css'
import Axios from 'axios';
import Space from './images/space.jpg'

function Experiences() {
    const [listExperience, setListExperience] = useState([]);
    const [location, setLocation] = useState("")
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)
    const [picClicked, setPickClicked] = useState(false)
    const [viewLocation, setViewLocation] = ("")

    const createExperience = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:9001/', {location})
            .then((response) => {
                setListExperience([...listExperience,{_id: response.data._id, location, likeCount: response.data.likeCount}]);
            })  
    }    
    let initLikes = new Array(listExperience.length).fill(0)
    console.log(initLikes)
 
    const updateLike = (id, x) => {
        let tempLikes = initLikes.slice();
        console.log(tempLikes[x])
        console.log(x)
        Axios.put(`http://localhost:9001/${id}/likePost`)
            .then((response) => {
                    setListExperience((previous) => {
                        return previous.map((hmm) => {
                            return hmm.id === id ? id : hmm
                        })
                    })
                    setLiked(true)
                    /*let tempLikes = initLikes;*/
                    tempLikes[x] = tempLikes[x] + response.data.likeCount
                    setLikes(tempLikes)
                    
                }
            )
    }

    useEffect(() => {
        Axios.get('http://localhost:9001/')
            .then((response) => {
                setListExperience(response.data)
            })
    }, []);


    const deletePost = (id) => {
        Axios.delete(`http://localhost:9001/${id}/delete`)
            .then(() => {
                setListExperience(listExperience.filter((idx) => {
                    return idx._id != id
                }))
            })
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

return (
    <>
    <div className='form--contain'>
        <div className='form--card'>
            <form onSubmit={createExperience}>
                <textarea type='text' onChange={(event) => {setLocation(event.target.value)}} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>    
        <div className='experience--container'>
            {listExperience.map((x, id) => 
                    <div key={x._id} className={`experience--card$`} style={cardStyles}>
                        <div className='locate'>
                            {x.location}
                        </div>
                        <div className='image' style={ { display: "flex", justifyContent: "center"} } >
                                <img src={Space} alt='pic' style={ { maxWidth: "100%", maxHeight:"100%", overflow: "hidden", marginBottom: "20px"} } height={125} />
                        </div> 
                        
                        <div className={picClicked === true ?'likeBtnContainer-hidden' : 'likeBtnContainer'}>
                            <button className='likeBtn' type='button' onClick={() => updateLike(x._id, id)}>Like {liked === true ? likes[id] : x.likeCount}</button>
                        </div>
                        <div className='deleteBtnContainer'>
                            <button className='deleteBtn' type='button' onClick={() => deletePost(x._id)}>Delete</button>
                        </div>
                    </div>
            )}
        </div>
    </>
)
}

export default Experiences
