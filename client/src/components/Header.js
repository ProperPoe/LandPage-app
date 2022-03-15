import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const[click, setClick] = useState(false)
  return (
    <div className='header'>
        <Link to="/" className="logo"><h1>My Page</h1></Link>
        <ul className='nav-text'>
            <Link to="/" className='home'><li>Home</li></Link>
            <li className='sign'>Sign Up</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
