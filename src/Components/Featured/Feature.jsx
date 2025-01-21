import React from 'react'
import './Feature.css'
import logo_1 from '../Assets/tech-crunch.png'
import logo_2 from '../Assets/fast-company.png'
import logo_3 from '../Assets/mf-logo.png'
import logo_4 from '../Assets/forbes-logo.png'

const Feature = () => {
    return (
        <div className='feature-header'>
            <p>FEATURED ON</p>
            <div className='feature'>
            </div>
            <div className='feature-logo'>
                <div className='feature-logo-1'>
                    <img src={logo_1} alt=''/>
                </div>
                <div className='feature-logo-2'>
                    <img src={logo_2} alt=''/>
                </div>
                <div className='feature-logo-3'>
                    <img src={logo_3} alt=''/>
                </div>
                <div className='feature-logo-4'>
                    <img src={logo_4} alt=''/>
                </div>
            </div>
            
                
               
                
            
        </div>
        
    )
}

export default Feature