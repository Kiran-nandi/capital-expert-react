import logo from './../logo.svg';
import './../App.css';
import React from "react";

import Slider from './Home/Slider';
import AboutUs from './Home/AboutUs';
import Services from './Home/Services';
import OurTeam from './Home/OurTeam';
import Footer from './Footer';


function Home() {
    return (
        <React.Fragment>
            <Slider />
            <AboutUs />
            <Services />
            <OurTeam />
            <Footer />
        </React.Fragment>
    );
}

export default Home;