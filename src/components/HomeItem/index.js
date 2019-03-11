import React from 'react';
import PropTypes from 'prop-types';

import './HomeItem.css';

const HomeItem = (props) => {
    return (
        <div className={props.id}>
            <h3>{props.homeTitle}</h3>
        </div>
    )
}

HomeItem.propTypes = {
    id: PropTypes.string,
    homeTitle: PropTypes.string,
}

export default HomeItem;