import React from 'react';
import '../App.css';
import Button from './Button';
import './SecondaryHero.css';

function SecondaryHero(props) {
    return (
        <div className="secondary-hero-container">
            <h1>{props.title}</h1>
        </div>
    )
}

export default SecondaryHero
