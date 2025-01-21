import React from "react";
import './Download.css'
import image from '../Assets/group-2-right.png'

const Download = () => {
    return (
        <div className="download">
            <div className="download-left">
                <h4>GET 0UR APP</h4>
                <h3>Browse Nfts From Your <br/> Smartphone</h3>
                <p>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</p>
                <div className='download-btn'>
                    DOWNLOAD ON IOS
                </div>
            </div>
            <div className="download-right">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Download