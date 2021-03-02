import addsymbol from './../assets/image/addsymbol.png';
import call from './../assets/image/call.png';
import emailbox from './../assets/image/emailbox.png';
import buttmlogo from './../assets/image/buttmlogo.png';

import { Link, Route, Switch } from "react-router-dom";

function Footer() {
    return (
        <section class="section6">
<div class="container">
<div class="row">
<div class="col-sm-4 col-md-4"><img alt="Claiming Shares From IEPF" class="buttmlogo" src={buttmlogo} />
<p class="buttmpara">Capital Experts comprises of a team of associates who prioritise the safety and security of your capital. We have services that ensure that capital due to you either as an inheritance or in any other way is never blocked or stuck due to a system complication.We strive to deliver the unclaimed wealth of an investor in the share market through the years of expertise, savvy know how and goodwill of dedicated members of our team.</p>
</div>

<div class="col-sm-5 col-md-4">
<h2 class="cont_1"><span class="cont_2">CONTACT </span><span class="us_1"> US </span></h2>

<h5 class="arthmatics">ARTHMATICS FINANCIAL SERVICES<br />
PVT. LTD.</h5>
<img alt="IEPF Share claim Consultants" class="addsymbol" src={addsymbol} />
<p class="First">
    1254, Block C-2, Palam Vihar,<br />
    Gurgaon, Haryana, India, 122017
    </p>
<img alt="IEPF Share claim Consultants" class="addsymbol12" src={addsymbol} />
<p class="First">702, Augustus, Raheja Acropolis II,<br />
Deonar Pada Road, Deonar,<br />
Mumbai, Maharashtra, India, 400088</p>
<img alt="Consultants for shares inheritance" class="call" src={call} />
 <p class="callno">
+91 - 91360 12500.</p>
<img alt="Consultants for shares inheritance" class="emailbox" src={emailbox} />
<p class="akshayjn_1">support1@arthmatics.com</p>
</div>

<div class="col-sm-3 col-md-4">
<h2 class="cont_1"><span class="cont_2">QUICK </span> <span class="us_1">LINKS</span></h2>

<ul class="qlink">
	<li>
        <Link to="/about" class="qui-a">About US</Link>
    </li>
	<li class="servi">
        <Link class="qui-a" to="/services">Services</Link>
    </li>
	<li><Link class="qui-a" to="/team">Team</Link></li>
</ul>
</div>

<hr class="hrs" />
<div class="copyrgt mobhide"><span class="cpyrgt">Copyright &copy; CAPITAL EXPERTS. All rights reserved. </span> <span class="credit1">Created by: Beak Media </span></div>

<div class="copyrgt deskhide"><span class="cpyrgt">Copyright &copy; CAPITAL EXPERTS. All rights reserved. </span><br />
<span class="creditm">Created by: Beak Media </span></div>
</div>
</div>
</section>    
    );
}

export default Footer;