import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = (props) => {
    return (
        <div className="title">
            <h1 className="titleWord">{props.firstWord}</h1>
            <h1 className="titleWord">{props.secondWord}</h1>
            <h1 className="titleWord">{props.thirdWord}</h1>
        </div>
    )
}

Title.propTypes = {
    firstWord: PropTypes.string,
    secondWord: PropTypes.string,
    thirdWord: PropTypes.string,
}

export default Title;