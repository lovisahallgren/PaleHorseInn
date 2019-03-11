import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Title from '../Title';
import HomeItem from '../HomeItem';

const Home = () => {
    return(
        <div className="home-page">
            <Title firstWord="pale" secondWord="horse" thirdWord="inn"/>
            <Link to="/musicvideos">
                <HomeItem id="homeItem1" homeTitle="music videos"/>
            </Link>
            <Link to="/presentation">
                <HomeItem id="homeItem2" homeTitle="presentation"/>
            </Link>
            <Link to="/cinematic">
                <HomeItem id="homeItem3" homeTitle="cinematic"/>
            </Link>
        </div>
    )
}

export default Home;