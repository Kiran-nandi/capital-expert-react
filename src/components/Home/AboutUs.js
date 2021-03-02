import Whoarewe from './../../assets/image/Who-are-we.png';
import Howwedo2 from './../../assets/image/How-we-do-2.png';
import back from './../../assets/image/back.png';

function AboutUs() {
    return (
        <section class="section3 ">
            <div class="container">
                <div class="row">
                    <div class="aboutus">
                        <h1 class="about">ABOUT <span class="us"> US </span></h1>

                        <hr />
                    </div>
                    <div>
                        <center>
                            <h2 class="who"><span>Who We Are </span><span class="what"> What We Do </span> <span class="how"> How We Do It </span></h2>
                        </center>
                    </div>

                <div class="carousel slide" data-ride="carousel" id="myCarousel1">
                <center>
                <ol class="carousel-indicators carousel-indicator top-ali">
                    <li class="active" data-slide-to="0" data-target="#myCarousel1"></li>
                    <li class="indi" data-slide-to="1" data-target="#myCarousel1"></li>
                    <li data-slide-to="2" data-target="#myCarousel1"></li>
                </ol>

                <div class="line"></div>
                </center>
               

                <div class="innercarousel">
                <div class="carousel-inner" role="listbox">
                <div class="item active">
                <div class="row">
                <div class="col-sm-4 col-md-4">
                <div class="back"><img alt="Retrieve Lost Shares" class="backi" src={Whoarewe} /></div>
                </div>

                <div class="homeback">
                <div class="col-sm-8 col-md-8">
                <h4 class="sea"></h4>

                <p>Capital Experts comprises of a team of associates who prioritise the safety and security of your capital. In a country like India where we have recently gone through policy changes, there is always a need for a transparent and systematic operator to ensure that you are never left without what is due to you. We have services that ensure that capital due to you either as an inheritance or in any other way is never blocked or stuck due to a system complication.</p>

                <p>A highly qualified, dedicated and committed team of Experts bring to the table a diverse and meaningful network consisting of Chartered Accountants, Lawyers, Engineers and CXOs to bring solutions to your seemingly improbable if not impossible money related issues. With their skills and experiences also come extensive knowledge pools and hands on abilities in and across the financial and business sectors. This rich variety of talent and skill enables us to customize and prioritize teams that are ideally suited to resolve your issues successfully.</p>
                </div>
                </div>
                </div>
                </div>

                <div class="item " id="seccar">
                <div class="row">
                <div class="col-sm-4 col-md-4">
                <div class="back"><img alt="Lost Shares Consultants India" class="backi" src={Howwedo2} /></div>
                </div>

                <div class="homeback">
                <div class="col-sm-8 col-md-8">
                <h4 class="sea"></h4>

                <p>Our motive at Capital Experts is simple and single minded in the complex yet often convoluted world of finance. We do everything in our power under the letter of the law to ensure that your hard-earned money or rightful inheritance comes back to you.</p>

                <p>Our team of experts are adept in harnessing unclaimed shares and dividends, physical share conversion, ancestral shares and any other issues that you may be facing related to shares being securely and rightfully being transferred onto your name.</p>
                </div>
                </div>
                </div>
                </div>

                <div class="item">
                <div class="row">
                <div class="col-sm-4 col-md-4">
                <div class="back"><img alt="Lost Shares Consultants India" class="backi" src={back} /></div>
                </div>

                <div class="homeback">
                <div class="col-sm-8 col-md-8">
                <h4 class="sea"></h4>

                <p>We strive to deliver the unclaimed wealth of an investor in the share market through the years of expertise, savvy know how and goodwill of dedicated members of our team.</p>

                <p>However, one of our key differentiators from others rendering similar services is that we see each case as a human story rather than a transaction. Abiding by the principal of no two individuals being alike, we have come to realise that no two cases can also be similar.</p>

                <p>So very early in our journey we took a conscious decision to abandon the cookie cutter approach and instead of notching clients into templates and cases we began to forge relationships. We designed our service bouquet to develop solutions for individuals rather than the task. We are very serious when we say that we hate to see money that should be rightfully yours be left behind which is why the Experts at Capital Experts talk, cajole and fight for every penny that should be rightfully yours and don&rsquo;t stop doing so until your investment is securely in your name.</p>
                </div>
                </div>
                </div>
                </div>
                <a class="left carousel-control" data-slide="prev" href="#myCarousel1"><span class="sr-only">Previous</span> </a> <a class="right carousel-control" data-slide="next" href="#myCarousel1"> <span class="sr-only">Next</span> </a></div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default AboutUs;