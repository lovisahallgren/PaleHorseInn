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
                navbarIsOpen: !prevState.navbarIsOpen
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
                <ul style={this.state.navbarIsOpen ? showNavbarStyle : null}>
                    <Link to="/contact"><NavbarItem navbarItemText="Contact"></NavbarItem></Link>
                    <Link to="/pictures"><NavbarItem navbarItemText="Pics"></NavbarItem></Link>
                    <Link to="/about"><NavbarItem navbarItemText="About Us"></NavbarItem></Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;