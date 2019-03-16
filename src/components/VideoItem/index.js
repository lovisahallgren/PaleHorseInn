import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {
    return(
        <div>
            <img className="video-grid" src={props.image} alt="" />
            {/* <p>{props.name}</p> */}
            {/* <p>{props.description}</p> */}
        </div>
    )
}

export default VideoItem;