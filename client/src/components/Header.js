import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { LoginBtn } from './LoginBtn' 
import { Button } from './Button'
import './Header.css';

export default function Header() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1018){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <nav className='header'>
        <div className='nav-container'>
            <Link to="/" className="logo" onClick={closeMobileMenu}><h1>My Page</h1></Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? 'nav-text active' : 'nav-text'}>
                <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                <li className='nav-item'><Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link></li>
                <li className='nav-item'><Link to="/experiences" className='nav-links' onClick={closeMobileMenu}>Experiences</Link></li>
                <li className='nav-item'><Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link></li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        
    </nav>
  )
}
