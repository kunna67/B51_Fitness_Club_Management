import React from 'react';
import banner from '../../images/banner.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-conatainer'>
            <div className="banner-text">
                <h2>Welcome to
                     <span className='brand'>FITCLUB</span> 
                </h2>
                <p>Discover Your True Strength</p>
                <button className="book-class-button">Book a Class</button>
            </div>
                
            <img src = {banner} alt='Banner' className='banner-image'/>
        </div>
    );
};

export default Banner;