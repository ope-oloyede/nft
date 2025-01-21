import React from 'react'
import './Hero.css'
import image from '../Assets/hero-right.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h1>Discover<br/> And Collect <br/> Rare NFTs</h1>
                <div>
                    <p>
                        The most secure marketplace for buying and selling unique crypto assets. 
                    </p>
                </div>
                <div className="hero-btn">
                    <div className='btn-left'>BUY NFTS</div>
                    <div className='btn-right'>SELL NFT</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={image} alt=''/>
            </div>
        </div>
    )
}

export default Hero