
import React, {useState} from 'react'
import Axios  from 'axios';
import ExperienceView from './ExperienceView';
import Space from './images/space.jpg'

function ExperienceLikes({setListExperience, listExperience, picClicked ,setPickClicked, viewPost}) {
    let initLikes = new Array(listExperience.length).fill(0)
    const [likes, setLikes] = useState(initLikes)
    const [liked, setLiked] = useState(false)

    console.log(initLikes)

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

    const updateLike = (id, idx) => {
        let tempLikes = initLikes;
        Axios.put(`http://localhost:9001/${id}/likePost`)
            .then((response) => {
                    setListExperience((previous) => {
                        return previous.map((hmm) => {
                            return hmm.id === id ? id : hmm
                        })
                    })
                    setLiked(true)
                    tempLikes[idx] = response.data.likeCount
                    setLikes(tempLikes)
                    
                }
            )
    }


    const deletePost = (id) => {
        Axios.delete(`http://localhost:9001/${id}/delete`)
            .then(() => {
                setListExperience(listExperience.filter((idx) => {
                    return idx._id != id
                }))
            })
    }

    return(
        <>
        {listExperience.map((x, id) => 
                    <div key={x._id} className={`experience--card$`} style={cardStyles}>
                        <div onClick={() => {viewPost(x._id)}}>
                            <div className='locate'>
                                {x.location}
                            </div>
                            <div className={picClicked === true ?'image-hidden' : 'image'} style={ { display: "flex", justifyContent: "center"} } >
                                <img src={Space} alt='pic' style={ { maxWidth: "100%", maxHeight:"100%", overflow: "hidden", marginBottom: "20px"} } height={125} />
                            </div> 
                        </div>
                        <div className={picClicked === true ?'likeBtnContainer-hidden' : 'likeBtnContainer'}>
                            <button className='likeBtn' type='button' onClick={() => updateLike(x._id, id)}>Like {liked === false ? x.likeCount : likes[id]}</button>
                        </div>
                        <div className='deleteBtnContainer'>
                            <button className='deleteBtn' type='button' onClick={() => deletePost(x._id)}>Delete</button>
                        </div>
                    </div>
            )}
        </>
    )
}

export default ExperienceLikes