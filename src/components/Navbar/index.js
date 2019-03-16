import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import NavbarItem from '../NavbarItem';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            navbarIsOpen: false,
            buttonText: "start"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                navbarIsOpen: !prevState.navbarIsOpen,
            }
        })
    }
    
    render() {
        const showNavbarStyle = {
            display: "flex",
        }

        return(
            <nav>
                <div className="navbar">
                <Link to="/">
                    <h2 className="home-btn">{this.state.buttonText}</h2>
                </Link>
                    <i className="fas fa-bars" onClick={this.handleClick}></i>
                </div>
                <ul className="navbar-nav" style={this.state.navbarIsOpen ? showNavbarStyle : null}>
                    <Link onClick={this.handleClick} to="/musicvideos">
                        <NavbarItem navbarItemText="Music Videos"></NavbarItem>
                    </Link>
                    <Link onClick={this.handleClick} to="/cinematic">
                        <NavbarItem navbarItemText="Cinematic"></NavbarItem>
                    </Link>
                    <Link onClick={this.handleClick} to="/presentation">
                        <NavbarItem navbarItemText="Presentation"></NavbarItem>
                    </Link>
                    <Link onClick={this.handleClick} to="/pictures">
                        <NavbarItem navbarItemText="Pics"></NavbarItem>
                    </Link>
                    <Link onClick={this.handleClick} to="/about">
                        <NavbarItem navbarItemText="About Us"></NavbarItem>
                    </Link>
                    <Link onClick={this.handleClick} to="/contact">
                        <NavbarItem navbarItemText="Contact"></NavbarItem>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;