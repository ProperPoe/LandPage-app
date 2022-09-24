import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { NoteBtn } from './NoteBtn' 
import { Button } from './Button'
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
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
            <Link to="/" className="logo" onClick={closeMobileMenu}><h1>Travel Prep</h1></Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
            </div>
            <ul className={click ? 'nav-text active' : 'nav-text'}>
                <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Weather</Link></li>
                <li className='nav-item'><Link to="/flights" className='nav-links' onClick={closeMobileMenu}>Flights</Link></li>
                <li className='nav-item'><Link to="/experiences" className='nav-links' onClick={closeMobileMenu}>Experiences</Link></li>
                <li className='nav-item'><Link to="/login" className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link></li>
            </ul>
            {button && !isLoggedIn && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
            {button && isLoggedIn && <button onClick={() => dispatch(authActions.logout())}>Logout</button> /*<NoteBtn buttonStyle='btn--outline' onClick={() => dispatch(authActions.logout())*/ }
        </div>
        
    </nav>
  )
}
