import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/header-logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
            <div className='navbar'>
                <div className="nav-logo">
                   <img src={logo} alt=''/>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 7h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 12h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    )}
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Buy Nfts</li>
                </ul>
            </div>
        
    )
}

export default Navbar 