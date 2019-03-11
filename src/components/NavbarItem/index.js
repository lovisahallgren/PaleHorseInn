import React from 'react';
import PropTypes from 'prop-types';
import './NavbarItem.css';

const NavbarItem = (props) => {
    return (
        <li className="navbarItem">
            {props.navbarItemText}
        </li>
    )
}

NavbarItem.propTypes = {
    navbarItemText: PropTypes.string,
}

export default NavbarItem;