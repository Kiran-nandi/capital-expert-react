import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import logo from './../assets/image/logo.png';
import icongoogle from './../assets/image/google.png';
import iconfb from './../assets/image/fb.png';
import icontwitter from './../assets/image/twitter.png';

import Home from './Home';
import About from './About';
import Userlist from './Userlist';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';



function Header() {
    return (
        <React.Fragment>
        <section class="section hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-md-10">
                        <div class="contus">
                            <h6 class="Contac">Contact Us: <span class="num">  +91 - 91360 12500 </span></h6>

                            <h6 class="email">E-Mail Us: <span class="id"> support1@arthmatics.com</span></h6>
                        </div>
                    </div>

                    <div class="col-sm-2 col-md-2">
                        <div class="circle ">
                            <a href="#">
                                <img alt="Share Problems for NRI" src={icongoogle} style={{width: 18 + 'px'}} />
                            </a> 
                            <a href="https://www.facebook.com/CapitalExperts.in"> 
                                <img alt="Share Problems for NRI" class="circle2" src={iconfb} /> 
                            </a> 
                            <a href="#"> 
                                <img alt="Share Problems for NRI" src={icontwitter}  style={{width: 18 + 'px'}} /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section1 hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <a href="index.html">
                            <img alt="Share Problems for NRI" class="logo" src={logo} /> 
                        </a>
                    </div>
                    <div class="col-md-9">
                        <ul class="nav navbar navbar1">
                            <li>
                                <a class="navbar1a active">
                                    <Link to="/">HOME </Link>
                                </a>
                            </li>
                            <li>
                                <a class="navbar1a"> 
                                    <Link to="/about">ABOUT US</Link>
                                </a>
                            </li>
                            <li>
                                <a class="navbar1a"> 
                                    <Link to="/services">SERVICES</Link>
                                </a>
                            </li>
                            <li>
                                <a class="navbar1a" >
                                    <Link to="/team">TEAM</Link>
                                </a>
                            </li>
                            <li>
                                <a class="navbar1a1">
                                    <Link to="/contact">CONTACT US</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
            <section class="navbarres visible-xs">
                <div class="container example2">
                    <nav class="navbar navbar-default">
                        <div class="container">
                            <div class="navbar-header"><button class="navbar-toggle collapsed" data-target="#navbar2" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span></button><a class="navbar-brand" href=""> <img class="logoxyz" src={logo} /> </a></div>

                                <div class="navbar-collapse collapse" id="navbar2">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">ABOUT US </Link></li>
                                        <li><Link to="/services">SERVICES</Link></li>
                                        <li><Link to="/team">TEAM</Link></li>
                                        <li><Link to="/contact">CONTACT US</Link></li>
                                    </ul>
                                </div>
                        </div>
                    </nav>
                </div>
            </section>
            { /* Route components are rendered if the path prop matches the current URL */}
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/services"><Services /></Route>
            <Route path="/team"><Team /></Route>
            <Route path="/contact"><Contact /></Route>
</React.Fragment>
    );
}

export default Header;