import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-section-1'>
                <div className='section-1'>
                    <p>ASAPRO</p>
                </div>
                <div className='section-2'>
                    <h4>Kypto</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Buy NFTs</p>
                    <p>Sell NFTs</p>
                </div>
            </div>
            <div className='footer-section-2'>
                <div className='section-3'>
                    <h4>Market</h4>
                    <p>Browse NFTs</p>
                    <p>Buy NFTs</p>
                    <p>Sell NFTs</p>
                </div>
                <div className='contact'>
                    <h4>Contact</h4>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className='newsletter'>
                <h2>join our newsletter</h2>
                <div>
                    <input placeholder='Email Address'/>
                    <button type="submit">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Footer 