import slider1 from './../../assets/image/share-certificate-1.jpg';
import slider2 from './../../assets/image/Inheriting-shares-2.jpg';

import { Link, Route, Switch } from "react-router-dom";

function Slider() {
    return (
        <section class="section2">
        <div class="container-fluid">
        <div class="carousel slide" data-ride="carousel" id="myCarousel">
        <ol class="carousel-indicators bannerCar">
            <li class="active" data-slide-to="0" data-target="#myCarousel"></li>
            <li data-slide-to="1" data-target="#myCarousel"></li>
        </ol>
        
        
        <div class="carousel-inner">
        <div class="item active"><Link to="/services#serv1"><img alt="Los Angeles" src={slider1} style={{width: 100 + '%'}} /></Link></div>
        
        <div class="item"><Link to="/services#serv2"><img alt="Chicago" src={slider2} style={{width: 100 + '%'}} /></Link></div>
        </div>
        <a class="left carousel-control" data-slide="prev" href="#myCarousel"><span class="sr-only">Previous</span> </a> <a class="right carousel-control" data-slide="next" href="#myCarousel"> <span class="sr-only">Next</span> </a></div>
        </div>
        </section>
    );
}

export default Slider;