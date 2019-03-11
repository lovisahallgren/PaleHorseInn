import React from 'react';
import PropTypes from 'prop-types';

import './ContactItem.css';

const ContactItem = (props) => {
    return (
        <div>
            <h1>{props.contactText}</h1>
            <h3>Phone: {props.phone}</h3>
            <h3>Email:
                <a href={`mailto:${props.email}`}> {props.email} </a>
            </h3>
        </div>
    )
}

ContactItem.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
}

export default ContactItem;