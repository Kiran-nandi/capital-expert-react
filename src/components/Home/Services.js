import React from 'react';

import { Link, Route, Switch } from "react-router-dom";

function Services() {
    return (
        <React.Fragment>
            <section class="section4 hidden-xs">
<div class="container">
<div class="row">
<h4 class="serv">SERVICES</h4>

<p class="para">We are at your service. Shares in physical form may require our services in more than one form.<br />
We are talking about share certificates printed in the previous millennium</p>

<div class="tagline">
<ul class="ulTag">
	<li><Link class="tag" to="/services">IEPF Claims</Link></li>
	<li><Link class="tag1 " to="/services">Share Dematerialisation</Link></li>
	<li><Link class="tag2" to="/services">Loss of Shares</Link></li>
	<li><Link class="tagnri" to="/services">NRI Shares Business</Link></li>
</ul>
</div>

<div class="tagline">
<ul class="ulTag">
	<li class="active"><a class="tag3" href="service.html">Name deletion</a></li>
	<li><Link class="tag4 " to="/services#serv4">Change of Name</Link></li>
	<li><Link class="tag5" to="/services#serv7">Change of Address</Link></li>
	<li><Link class="tag6" to="/services#serv2">Transmission of Shares</Link></li>
</ul>
</div>

<div class="read">
<h5 class="tag10"><Link class="readMore" to="/services">Read More </Link></h5>
</div>
</div>
</div>
</section>

<section class="section4 visible-xs">
<div class="container">
<div class="row">
<h4 class="serv">SERVICES</h4>

<p class="para">We are at your service. Shares in physical form may require our services in more than one form.<br />
We are talking about share certificates printed in the previous millennium</p>

<div class="tagline">
<ul class="ulTag">
	<li><Link class="tag" to="/services">IEPF Claims</Link></li>
	<li><Link class="tag1 " to="/services#serv1">Share Dematerialisation</Link></li>
</ul>
</div>

<div class="tagline">
<ul class="ulTag">
	<li><Link class="tag2" to="/services#serv5">Loss of Shares</Link></li>
	<li><Link class="tag3" to="/services#serv3">Name Deletion</Link></li>
</ul>
</div>

<div class="tagline">
<ul class="ulTag">
	<li><Link class="tag4 " to="/services#serv4">Change of Name</Link></li>
	<li><Link class="tag5" to="/services#serv4">Change of Address</Link></li>
</ul>
</div>

<div class="tagline">
<ul class="ulTag">
	<li><Link class="tag6" to="/services#serv2">Transmission of Shares</Link></li>
	<li><Link class="tagnri" to="/services">NRI Shares Business</Link></li>
</ul>
</div>

<div class="read">
<h5 class="tag10"><Link class="readMore" to="/services">Read More </Link></h5>
</div>
</div>
</div>
</section>
        </React.Fragment>
    );
}

export default Services;