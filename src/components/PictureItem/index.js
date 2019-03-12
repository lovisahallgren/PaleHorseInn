import React from 'react';
import './PictureItem.css';

const PictureItem = (props) => {
    return(
        <div>
            <img className="pic-grid" src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default PictureItem;