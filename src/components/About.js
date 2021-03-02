import logo from './../logo.svg';
import './../App.css';
import React from 'react';

import Footer from './Footer';
import AboutUs from './Home/AboutUs';

function About() {
    return (
        <React.Fragment>
            <AboutUs />
            <Footer />
        </React.Fragment>
    );
}

export default About;