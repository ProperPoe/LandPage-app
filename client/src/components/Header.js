import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <Link to="/" className="logo"><h1>My Page</h1></Link>
        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        
        <ul className='nav-text'>
            <Link to="/" className='home'><li>Home</li></Link>
            <li className='sign'>Sign Up</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
