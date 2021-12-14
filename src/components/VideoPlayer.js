import React from 'react'
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

function VideoPlayer() {
    return (
        <div className='video-container'>
            <ReactPlayer url="https://www.youtube.com/watch?v=_IxDTFBFfZ0"/>
        </div>
    )
}

export default VideoPlayer
