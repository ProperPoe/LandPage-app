import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const[click, setClick] = useState(false)
  return (
    <div className='header'>
        <Link to="/" className="logo"><h1>My Page</h1></Link>
        <FontAwesomeIcon icon={faBars} />
        <ul className='nav-text'>
            <Link to="/" className='home'><li>Home</li></Link>
            <li className='sign'>Sign Up</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
