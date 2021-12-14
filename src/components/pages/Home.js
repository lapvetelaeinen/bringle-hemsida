import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import VideoPlayer from '../VideoPlayer';

function Home () {
    return(
        <>
        <HeroSection/>
        <VideoPlayer/>
        <Cards/>
        </>

    );
}

export default Home;