import React, {useEffect} from 'react'

function ExperienceView({picClicked, setPickClicked, viewPost, id, viewLocation, viewImage}) {
    useEffect(() => {
        if(id){
            viewPost(id)
        }

    }, [id])

    return (
        <>
        <div className={picClicked === false ? 'view-hidden' : 'view'}>
            {viewLocation}
            <button onClick={() => setPickClicked(false)}>X</button>
            <div>
                <img src={viewImage} alt='pic' style={ { maxWidth: "100%", height: "100vh"} } />
            </div>
        </div>
        </>
    )
}

export default ExperienceView
