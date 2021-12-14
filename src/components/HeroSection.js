import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Ha stenkoll på dina kärror</h1>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Se video <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection
