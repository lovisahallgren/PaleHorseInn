import React from 'react';
import './Picture.css';
import pictures from './pictures.js';
import PictureItem from '../PictureItem';

const Picture = () => {
    return(
        <div className="picture-page">
            <div className="picture-container">
                {
                    pictures.map((picture, index) => (
                    <PictureItem key={index} image={picture.image} name={picture.name} />
                ))}
            </div>
        </div>
    )
}

export default Picture;