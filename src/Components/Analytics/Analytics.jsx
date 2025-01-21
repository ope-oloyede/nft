import React from 'react'
import './Analytics.css'
import image from '../Assets/built-in-left.png'

const Analytics = () => {
    return (
        <div className='built-in'>
            <div className='built-in-left'>
                <img src={image} alt=''/>
            </div>
            <div className='built-in-right'>
                <h4>ANALYTICS</h4>
                <h3>Built-In Analytics To <br/> Track Your Nfts</h3>
                <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Asapro portfolio over time.</p>
                <div className='built-in-btn'>
                        VIEW OUR PRICES
                </div>
            </div>
           
        </div>
    )
}

export default Analytics