import React, {useEffect} from 'react'
import './ExperienceView.css'

function ExperienceView({picClicked, setPickClicked, viewPost, id, viewLocation, viewImage}) {
    useEffect(() => {
        if(id){
            viewPost(id)
        }

    }, [id])

    return (
        <>
        <div className={picClicked === true ? 'view' : picClicked === false ? 'view-hidden' : 'view-hidden'}>
            <div className='view-header'>
                <h2>{viewLocation}</h2>
                <button onClick={() => setPickClicked(false)}>X</button>
            </div>
            
            <div className='view-image'>
                <img src={viewImage} alt='pic' style={ { maxWidth: "100%", height: "100vh"} } />
            </div>
        </div>
        </>
    )
}

export default ExperienceView
