import React, {useState, useEffect} from 'react'
import Axios  from 'axios';
import ExperienceView from './ExperienceView';
import Space from './images/space.jpg'
import * as api from '../../api/index.js'

function ExperienceLikes({setListExperience, listExperience, picClicked ,setPickClicked, viewPost, image, isUser, setEdit, setEditID}) {
    const cardStyles = {
        background: "black",
        boxShadow: "0px 10px 30px",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-around",
        width: "300px",
        height: "300px",
        marginLeft: "30px",
        marginTop: "20px",
        marginRight: "30px",
        //padding: "1rem",
        position: "relative",
    }

    const updateLike = (id) => {
      setEdit(true);
      setEditID(id)
            
    }


    const deletePost = (id) => {
        Axios.delete(`http://localhost:9001/${id}/delete`)
            .then(() => {
                setListExperience(listExperience.filter((idx) => {
                    return idx._id !== id
                }))
            })
    }

    return(
        <>
        {listExperience.map((post, id) => 
                    <div key={post._id} className={`experience--card$`} style={cardStyles}>
                        <div className='card-container' onClick={() => {viewPost(post._id)}}>
                            <div className='locate'>
                                {post.location}
                            </div>
                            <div className={picClicked === true ?'image-hidden' : 'image'} style={ { display: "flex", justifyContent: "center"} } >
                                <span className='name'>{post.user.name}</span>
                                <img src={post.image} alt='pic' style={ { width: "100%", height: "242px", maxHeight:"100%", overFlow: "hidden", marginBottom: "20px"} } height={125} />
                            </div> 
                        </div>
                        <div className='what'>
                            {isUser === post.user._id || !post.user._id ? 
                            <div className={picClicked === true ? 'likeBtnContainer-hidden' : 'likeBtnContainer'}>
                                <button key={id} className='likeBtn' type='button' onClick={() => updateLike(post._id)}>Edit</button>
                            </div>
                            :
                            <div className={picClicked === true ? 'likeBtnContainer-hidden' : 'likeBtnContainer'}>
                                <button key={id} className='likeBtn-hidden' type='button'></button>
                            </div>
                            }
                            
                                <div className={!post.user._id || isUser === post.user._id ? 'deleteBtnContainer' : 'deleteHidden'}>
                                    <button className='deleteBtn' type='button' onClick={() => deletePost(post._id)}>Delete</button>
                                </div>
                            
                        </div>
                        
                    </div>
            )}
        </>
    )
}

export default ExperienceLikes