import React from "react";
import { Link } from "react-router-dom";
import Testimonials_aboutpage from "./Testimonials_aboutpage";

function About_page() {
  return (
    <>
      <div className="main_about_page">
        <div className="about_image page-header page-header-bg">
          {/* <img className='about_logo-img' src='/img/aboutus.png'/> */}
        </div>
        <div className="container">
          <div class="back_contnet  d-flex">
            <Link className="home_icon" to="/home">
              <i class="fa fa-home"></i>
            </Link>
            <i class="fa fa-angle-right"></i>
            <span>Contact Us</span>
          </div>
          <div className="about_us_contnet">
            <h2 class="subtitle">About US And Our Values</h2>
            <p className="about-section">
              Are you looking for the best VIP phone numbers or VIP fancy
              numbers in India or its states? You have arrived here on the right
              webpage. That's where the VIP Number Shop comes into the picture
              with top-notch and best-in-market services with the very
              competitive and affordable price tag. <br />
              <br />
              VIP Number Shop (VNS) is the nation’s leading #1 VIP and fancy
              number provider since 2007 with over 70k+ happy customers. We feel
              proud to say that our VIP and fancy numbers attract thousands of
              eyes in the market, bring conversions, and boost engagement.{" "}
              <br />
              <br />
              <b>We Have 13 Years Of In-Depth Experience And Proven Track Record Of
              Providing The Best VIP Number Services</b>
              <br />
              <br />
              Over the last 13 years, we have been offering unmatched,
              top-notch, and satisfactory VIP phone number services to our
              clients and customers. We are creating a new milestone every day
              in our business niche by offering what our customers look for and
              giving the best value and beyond expectation VIP phone number
              services to them at a very competitive price. <br />
              Be it business or individual, we are helping everyone from all
              over India. With our easy to remember and eye-catching VIP
              numbers, our customers are able to take the response rate,
              marketing effectiveness, and advertisement approaches to the next
              level. <br />
              <br />
              Till date, we haven’t disappointed any of our customers in any
              aspect and served more than 70k+ VIP and fancy numbers to our
              happy customers. Our reviews and our customer’s success rate speak
              the same.
              <br />
              <br />
              <b>
                They Deliver Numbers... We Deliver Numbers With Real Value And
                Experience
              </b>
              <br />
              <br />
              Whether you talk about online or offline, it’s flooded with
              thousands of such companies offering VIP number services. But, we
              are unique and different from those traditional VIP number
              providers. With us and our services, you rest assured that you
              will get top-notch VIP number services, payment safety, support,
              and peace of mind. <br />
              <br />
              Being a reputed VIP and Fancy phone number provider in India, we
              promise you the best-in-market experience every time you choose
              us. No hidden games, no hidden terms, you get what you pay for.
              Customer satisfaction is one of our top tier priorities, and we
              never compromise on it. <br />
              <br />
              <b>
                Whenever It Comes To VIP Phone Phone Numbers, VIP Number Shop
                Should Be On Top Of Your List
              </b>
              <br />
              <br />
              <b>Our Values</b>
              <br />
              At VIP Number Shop (VNS), we work with values. It's our values
              that further helps us in providing our customers 100%
              satisfaction. Thanks to this, they are trusting and choosing us
              again and again from the last 13 years.
              <br />
              <br />
              <span className="respect_check_contnet">
                <i class="fa fa-check"></i> We Respect You And Your Time
              </span>
              <br />
              At VNS, we respect our customers and their time. Instead of doing
              a lot of jargon, we keep everything simple yet easy to understand.
              <br />
              <br />
              <span className="respect_check_contnet">
                <i class="fa fa-check"></i> We Prefer Transparency And Honesty
              </span>
              <br />
              Whether you talk about pricing or our services, we prefer to
              remain transparent and honest in every aspect. As we said earlier,
              you get what you pay for. There are no hidden games and charges at
              all. <br />
              <br />
              <span className="respect_check_contnet">
                <i class="fa fa-check"></i>100% Satisfaction Guarantee
              </span>
              <br />
              What matters the most to us is the customer’s satisfaction.
              Customer satisfaction is what we have been working for the last 13
              years. The reputation and popularity we have today in the market
              is thanks to our “100% Customer Satisfaction Or Money Back”
              policy. When you choose us and use our services, rest assured that
              you are going to get the top-notch and best-in-market VIP phone
              number services at a very competitive and affordable price.
            </p>
          </div>
        </div>
        <div className="testimonials-section" >
  <div className="container">
    <div className="row">
      <div className="col-6 col-md-3 count-container">
        <div className="count-wrapper">
          <span>2007</span>
        </div>
        <h4 className="count-title">SINCE 2007</h4>
      </div>

      <div className="col-6 col-md-3 count-container">
        <div className="count-wrapper"><span>100000</span><span className="plus_sign">+</span></div>
        <h4 className="count-title">CUSTOMERS SERVED</h4>
      </div>

      <div className="col-6 col-md-3 count-container">
        <div className="count-wrapper"><span>150</span><span>+</span></div>
        <h4 className="count-title">VENDORS</h4>
      </div>

      <div className="col-6 col-md-3 count-container">
        <div className="count-wrapper"><span>24</span><span>x7</span></div>
        <h4 className="count-title">SUPPORT AVAILABLE</h4>
      </div>
    </div>
  </div>
  <Testimonials_aboutpage/>
</div>
      </div>
    </>
  );
}

export default About_page;
