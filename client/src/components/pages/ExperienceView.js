import React, {useEffect} from 'react'

function ExperienceView({picClicked, setPickClicked, viewPost, id, viewLocation}) {
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
        </div>
        </>
    )
}

export default ExperienceView
