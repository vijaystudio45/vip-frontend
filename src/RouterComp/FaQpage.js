import React from "react";
import { Link } from "react-router-dom";

function FaQpage() {
  return (
    <>
      <div className="faq_main_div">
        {/* <div className="image_faq">
          <img src="faq.jpeg" className="faq2_image_full" />
        </div> */}
        <div class="page-header page-header-bg">

        </div>

        <div className="container">
          <div class="back_contnet faqq_contnet d-flex">
            <Link className="home_icon" to="/home">
              {" "}
              <i class="fa fa-home"></i>
            </Link>

            <i class="fa fa-angle-right"></i>
            <span>FAQ</span>
          </div>
          <div className="faqq_contnet">
            <div className="Asked_questions">
              <h2 class="subtitle">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="solution_contnet">
                Here you can find solutions and answers to most of the questions
                that you have in your mind.
              </p>
            </div>
            <div className="search_faq_questions">
              <div className="input-group_faqq_contnet d-flex">
                <input
                  autocomplete="off"
                  type="search"
                  className="form-control_faq_input"
                  placeholder="Search FAQ"
                />{" "}
                <span class="input-group-btn">
                  <button
                    className="search_faq_btn"
                    type="button"
                    id="btnFaqSearch"
                  >
                    Search <span className="fa fa-search faqq"></span>{" "}
                  </button>
                </span>
              </div>
              <div className="faq_collap_dropdown">
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      Can I Pay The Amount Partly?
                    </a>
                  </p>
                  <div id="demo" className="collapse">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo1"
                    >
                      Can I Change My Ordered Number After Payment?
                    </a>
                  </p>
                  <div id="demo1" className="collapse">
                    Yes, - you can. We allow customers to cancel or change their
                    order for the VIP numbers ordered from our store, but only
                    in cases when UPC is not provided within the next 24 hours
                    from ordering time. Also, VNS has the right to cancel orders
                    anytime.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo2"
                    >
                      Can I Cancel My Ordered Number After Payment?
                    </a>
                  </p>
                  <div id="demo2" className="collapse">
                    Orders for the VIP numbers that are successfully placed and
                    paid can also be canceled. However, cancellation requests
                    for the order will only be accepted if UPC is not delivered
                    within 24 hours of ordering from our end. In other words, if
                    you will not receive the UPC within 24 hours of ordering,
                    you feel free to cancel your order for the VIP number from
                    our store.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo3"
                    >
                      What If I Don’t Get UPC Within 24 Working Hours?
                    </a>
                  </p>
                  <div id="demo3" className="collapse">
                    If due to any possible reasons ((a) UPC SMS delivery fails
                    (b) Email delivery in customers spam or junk (c) delay in
                    delivery from service provider), you don’t receive the UPC,
                    then you can request UPC again. The order will not be
                    canceled in any of the mentioned scenarios.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo4"
                    >
                      Is There Any Guarantee That I Will Get The Same Number
                      That I Paid For?
                    </a>
                  </p>
                  <div id="demo4" className="collapse">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo5"
                    >
                      Is There Any Guarantee That I Will Get The Same Number
                      That I Paid For?
                    </a>
                  </p>
                  <div id="demo5" className="collapse">
                    Yes- we assure you this. One of the best things about our
                    service is we provide buyers what they pay for. So, rest
                    assured that you will get the same number you are going to
                    pay for. However, unfortunately, if due to any reasons, we
                    fail to arrange precisely the same VIP phone number that you
                    order, you will get options to choose either a new VIP phone
                    number from our collection or get the full money refund.
                    <br />
                    <br />
                    Also, this happens only to a few customers, and most get
                    precisely the same number they select and order. Overall,
                    there’s nothing to worry about. Your money is safe, and we
                    do our best to ensure the best service and experience.
                  </div>
                </div>
                <div className="container-faq_collapsible">
                  <p className="colla_toggle">
                    {" "}
                    <a
                      href="#"
                      className="colla_toggle"
                      data-toggle="collapse"
                      data-target="#demo6"
                    >
                      What Happens Next To Buyer’s Online Payment If The Order
                      Gets Canceled From Seller End?
                    </a>
                  </p>
                  <div id="demo6" className="collapse">
                    As we have been saying from the top, your payment is 100%
                    safe and secured with VNS. Sometimes, the order gets
                    canceled and there are several reasons behind this from the
                    seller end. For instance; SIM gets lost, UPC code failure (
                    both in delivery and generation aspect), the number already
                    dead following TRAI norms (no calling or any activity for
                    last 60-90 days), the number already sold but its status not
                    updated on the website, and several others.
                    <br />
                    We deeply regret the inconvenience caused to our customers
                    due to these issues and also take action against the seller
                    behind those numbers. Whenever issues like these are
                    encountered, we put an impact on the rating of sellers and
                    if this same issue is repeated further, we even charge fine
                    to them.
                    <br />
                    However, that’s not a day to day story and happens rarely.
                    If you encounter the same, we offer the refund or allow the
                    customer to choose any other number. You can feel free to
                    reach out to the dedicated customer support member assigned
                    for your order.
                    <br />
                    No matter how and why, If you choose to get the refund and
                    your order is eligible for this, the money will be refunded
                    to your bank account within 48 Hours via the same medium you
                    chose to pay when placing the order.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaQpage;
