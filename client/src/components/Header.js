import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button'
import './Header.css';

export default function Header() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

  return (
    <nav className='header'>
        <div className='nav-container'>
            <Link to="/" className="logo"><h1>My Page</h1></Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? 'nav-text active' : 'nav-text'}>
                <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                <li className='nav-item'><Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link></li>
                <li className='nav-item'><Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link></li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        
    </nav>
  )
}