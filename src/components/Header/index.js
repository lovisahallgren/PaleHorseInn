import React from 'react';
import './Header.css';
import Navbar from '../Navbar';
// import Title from '../Title';


const Header = () => {
    return (
        <header>
            <Navbar text="start"/>
            {/* <Title firstWord="pale" secondWord="horse" thirdWord="inn"/> */}
        </header>
    )
}

export default Header;