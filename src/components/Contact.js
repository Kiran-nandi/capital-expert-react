import React from 'react';
import Footer from './Footer';

function Contact() {
    return (
        <React.Fragment>
        <section class="contectform">
<header class="ccheader">
<h2 class="cont_12"><span class="cont_02">CONTACT </span><span class="us_12"> US </span></h2>

<hr /></header>

<div class="wrapper">
<form action="mail.php" class="ccform" method="post">
<div class="ccfield-prepend"><input class="ccformfield" name="name" placeholder="Full Name" required="" type="text" /></div>

<div class="ccfield-prepend"><input class="ccformfield" name="emailid" placeholder="Email" required="" type="text" /></div>

<div class="ccfield-prepend"><input class="ccformfield" name="phone" placeholder="Phone" type="text" /></div>

<div class="ccfield-prepend"><input class="ccformfield" name="sub" placeholder="Subject" required="" type="text" /></div>

<div class="ccfield-prepend"><textarea class="ccformfield1 " name="comments" placeholder="Message" required="" rows="8"></textarea></div>

<div class="ccfield-prepend"><input class="ccbtn" name="submit" type="submit" value="Submit" /></div>
</form>
</div>
</section>
<Footer />
</React.Fragment>
    );
}

export default Contact;