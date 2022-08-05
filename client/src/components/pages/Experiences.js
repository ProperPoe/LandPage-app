import React, { useState } from 'react';
import './Experiences.css'

function Experiences() {
    const [location, setLocation] = useState(['whoa', 'hey'])
    return (
        <>
        <div className='form--contain'>
            <div className='form--card'>
                <form>
                    <textarea type='text' />
                    <button>Submit</button>
                </form>
            </div>
            {location.map((x) => <div className='card'>{x}</div>)}
        </div>
        </>
    )
}

export default Experiences
