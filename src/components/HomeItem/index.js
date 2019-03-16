import React from 'react';
import PropTypes from 'prop-types';

import './HomeItem.css';

const HomeItem = (props) => {
    return (
        <div className="main-content">
            <div className="bg"></div>
            <div className={props.id}>
                <h3 className="homeTitle">{props.homeTitle}</h3>
            </div>
        </div>
    )
}

HomeItem.propTypes = {
    id: PropTypes.string,
    homeTitle: PropTypes.string,
}

export default HomeItem;