import React from 'react';
import videos from './videos.js';
import VideoItem from '../VideoItem';
import './Musicvideo.css';

const Musicvideos = () => {
    return(
        <div className="musicvideos-page">
            <div className="musicvideos-container">
                {
                    videos.map((video, index) => (
                    <VideoItem key={index} image={video.image} name={video.name} description={video.description}/>
                ))}
            </div>
        </div>
    )
}

export default Musicvideos;