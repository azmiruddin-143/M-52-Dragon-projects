import React from 'react';
import Header from './Header component/Header';
import LatestSlider from './Header component/LatestSlider';
import Navbar from './Navabar/Navbar';
import MainDesign from '../Main Design/MainDesign';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestSlider></LatestSlider>
            <Navbar></Navbar>
            <MainDesign></MainDesign>


        </div>
    );
};

export default Home;