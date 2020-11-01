import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>TEST VIDEO</h1>
            <p>test masukin video</p>
            <div className='hero-btns'>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    BUTTON 1
                </Button>

                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    BUTTON 2<i className='fas fa-play-circle' />
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
