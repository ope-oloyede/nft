import React from 'react'
import './Testimony.css'
import image_1 from '../Assets/first-woman.png'
import image_2 from '../Assets/first-man.png'
import image_3 from '../Assets/second-woman.png'

const Testimony = () => {
    return (
        <div className='testimony'>
            <div className='testimony-top'>
                <p>TESTIMONALS</p>
                <h3>Read What Other <br/> Have To Say</h3>
            </div>
            <div className='testimony-bottom'>
                <div className='testimony-1'>
                    <img src={image_1} alt=''/>
                    <h3>OLIVIA COLE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className='testimony-2'>
                    <img src={image_2} alt=''/>
                    <h3>EVAN WHITE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className='testimony-3'>
                    <img src={image_3} alt=''/>
                    <h3>JESSICA PAGE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
            </div>
        </div>
    )
}

export default Testimony