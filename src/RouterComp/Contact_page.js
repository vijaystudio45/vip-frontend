import React from "react";
import { Link } from "react-router-dom";

function Contact_page() {
  return (
    <>
      <div className="main_contact_page">
        <div className="container">
          <div class="back_contnet  d-flex">
            <Link className="home_icon" to="/home">
              {" "}
              <i class="fa fa-home"></i>
            </Link>

            <i class="fa fa-angle-right"></i>
            <span>Contact Us</span>
          </div>
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
          >
            <iframe
              className="map_image"
              src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
            ></iframe>
          </div>
          <div className="common_contact_div d-flex">
            <div className="first_input_conatct">
              <div className="contact_div">
                <h4 className="write_an">
                  Write<span className="span_contactus">Us</span>
                </h4>
                <div className="create_inputss_contact">
                  <form id="contactus">
                    <div className="form-group contact_Page">
                      <label for="contactName">Name</label>
                      <input
                        type="text"
                        className="form-control contact_Page"
                        name="contactName"
                        required=""
                        aria-required="true"
                        aria-invalid="false"
                      />
                    </div>

                    <div className="form-group contact_Page">
                      <label for="contactEmail">Email</label>
                      <input
                        type="email"
                        className="form-control contact_Page"
                        name="contactEmail"
                        required=""
                        aria-required="true"
                        aria-invalid="true"
                      />
                    </div>

                    <div className="form-group">
                      <label for="contactPNo">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control contact_Page"
                        name="contactPNo"
                      />
                    </div>

                    <div className="form-group contact_Page">
                      <label for="contactMessage">What’s on your mind?</label>
                      <textarea
                        className="form-control textarea_contact_Page"
                        name="contactMessage"
                        required=""
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="form-footer_submit_contnet">
                      <button type="submit" className="mobile_input">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="second_input_conatct">
              <div className="contact_deatils">
                <h4 className="write_an">
                  Contact<span className="span_contactus">Details</span>
                </h4>
                <div className="icon_contnet d-flex ">
                  <div className="icon_contact_location">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="pera_contactus">
                    <p className="vip_number_conactus">
                      VIP NUMBER SHOP &amp; 99AID Communication <br />
                      SCO. No. 62, Shivalik Enclave <br />
                      Opp. Geeta Mandir, Nr. Post Office <br />
                      Garha Road, Urban Estate 1 <br />
                      Jalandhar 144022
                    </p>
                  </div>
                </div>

                <div className="icon_contnet d-flex">
                  <div className="icon_contact_location">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div className="pera_contactus">
                    <p className="vip_number_conactus">+91-70091-70092</p>
                  </div>
                </div>
                <div className="icon_contnet d-flex mt-3">
                  <div className="icon_contact_location">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div className="pera_contactus">
                    <p className="vip_number_conactus">
                      info@vipnumbershop.com
                    </p>
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

export default Contact_page;
