import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Footertestmonials from "./Footertestmonials";
import VipfriendZone from "./VipfriendZone";
import TrustSection from "./TrustSection";
import Testmonials from "./Testmonials";


function Homecenterpage() {
  const slideImages = [
    {
      url: "1-min.png",
      caption: "1",
    },
    {
      url: "10-min.png",
      caption: "2",
    },
    {
      url: "5-min.png",
      caption: "3",
    },
    {
      url: "6-min.png",
      caption: "1",
    },
    {
      url: "9-min.png",
      caption: "2",
    },
    {
      url: "Green_Food_Order_We_Are_Accepting_Cash_On_Delivery_Instagram_Post.jpg",
      caption: "2",
    },
  ];

  const secondslideImages = [
    {
      url: "999_wvRrEg6.png",
      caption: "1",
    },
    {
      url: "0_to_2500_fgeqGWp.png",
      caption: "2",
    },
    {
      url: "999_wvRrEg6.png",
      caption: "3",
    },
    {
      url: "o_to_1350.png",
      caption: "1",
    },
    {
      url: "0_to_2500_fgeqGWp.png",
      caption: "2",
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
  };



  return (
    <>
      <div id="small_slider" className="main_slider_home">
        <div className="vip__new-hero">
          <Link href="#">
            <img
              src="hero.jpeg"
              className="img-responsive d-none d-sm-block"
              loading="lazy"
              alt="hero"
              
            />
            <img
              src=""
              className="img-responsive d-flex d-sm-none"
              loading="lazy"
              alt="blank"
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="info-boxes-section">
          <div className="row align-items-center">
            <div className="col-md-4 ">
              <div className="inner-info-box">
                <img src="Certified.png" loading="lazy" alt="certified" />
                <div className="info-box-content">
                  <h4>100% Satisfaction</h4>
                  <p className="mb-0">Money-Back Guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-info-box center">
                <img src="satisfaction.png" loading="lazy" alt="saticfaction"/>
                <div className="info-box-content">
                  <h4>India’s Only Oldest Trusted Website</h4>
                  <p className="mb-0">
                    <small>
                      India’s #1 Oldest, Trusted And Certified VIP Number Store{" "}
                      <b>(Since 2007)</b>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-info-box last-child">
                <img src="mobilePayment.png" loading="lazy" alt="mobile"/>
                <div className="info-box-content ">
                  <h4>Multiple Payment Options</h4>
                  <p className="mb-0">Online Banking, UPI, Wallet, COD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="vi-p_numerslist">
          <div className="firstnumer_lists">
            <div className="img_comp_folder">
              <img className="img_comp_folder_pic" src="100_genuine.jpeg" alt="comp_folder" />
            </div>
            <div className="badge_warning">
              99.9% Lowest Price
              <span className="badge badge-warning">Challenge</span>
            </div>

            <div className="categories_main_div">
              <div className="cagtegories_contnet">
                <h4 className="catego_linee">CATEGORIES</h4>
              </div>
              <div className="number_lists">
                <ul class="list-style-type">
                  <li className="list">
                    786
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Zeros
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Tetra
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Penta
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Numbers with 13 Special
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  
                  <li className="list">
                    Symmentry Numbers
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Xyxy Repeating
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    Couple - Double Tripple
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>
                  <li className="list">
                    ABCD - ABCD Numbers
                    <span className="aeroo_contnet">
                      <i class="fa fa-caret-down"></i>
                    </span>
                  </li>

                  <li className="list">
                  XYZ XYZ
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                  <li className="list">
                   Mirror
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                  <li className="list">
                   semi Mirror
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                  <li className="list">
                  Special Charactors/Digits
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                  <li className="list">
                  Asending Desending
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                  <li className="list">
                  Normal Fancy Numbers
                    <span className="aeroo_contnet">
                    
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="newas_main_div">
              <div className="newsletter_contnet">
                <h4 className="news_text">NEWSLETTER</h4>
                <p className="pera_newsletter">
                  Get all the latest information on Sales and Offers. Sign up
                  for newsletter today.
                </p>

                <div className="input-btn_groups">
                  <input
                    className="email_contnet"
                    type="email "
                    placeholder="Email address"
                  />
                  <input
                    className="subscribe_con"
                    type="email"
                    value="SUBSCRIBE NOW"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="second_numberlist">
            <div className="vip_images_grenun">
              <img className="vip_images_grenun-pic" src="02_slide.jpeg" alt="premium" />
            </div>
            <div className="slide-container_imgeras">
              <Slide {...settings}>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide_vip_numbers" key={index}>
                    <div>
                      <img src={slideImage.url} className="slidess_imgess" alt="slideshow"/>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>

            <div className="slide-container_imgeras logo_contnet">
              <Slide {...settings}>
                {secondslideImages.map((slideImage, index) => (
                  <div className="each-slide_vip_numbers" key={index}>
                    <div>
                      <img src={slideImage.url} className="slidess_imgess" alt="slider"/>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </div>
        <div className="numbers_cards">
          <h2 class="heading-lable-gredient">True VIP Numbers</h2>
          <div className="row show-homepage-no-truevip filter-data-output">
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
             
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
            >
              <div className="box-part text-center home-pg-number-col">
                <div className="table-resposnive">
                  <table className="table">
                    <tbody>
                      <tr className="number-card-price-row">
                        <td>
                          <div
                            className="taj"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Premium"
                          >
                            <div className="premium">
                              <i class="fas fa-crown"></i>
                            </div>
                            <span className="fetNumberCard jsNumberCard rating_197884">
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                              <i
                                className="fa fa-star"
                                aria-hidden="true"
                                title="Seller Rating - 5 Stars"
                              ></i>
                              &nbsp;
                            </span>
                            <strike>4,588</strike>
                            <small className="number-price">₹ 3,990/-</small>
                          </div>
                        </td>
                      </tr>
                      <tr
                        className="number-casrd-row-no number-quick-view"
                        data-id="197884"
                        data-className="fetclassName"
                      >
                        <td>
                          <h3 className="number-display-cell noselect">
                            94931-95000
                          </h3>
                          <a
                            href="/filter-by-tags/?tags=undefined&amp;rtp=false"
                            className="card-detail-link"
                          >
                            Similar Numbers
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="number-card-sum-row">
                          Total - <b>40</b> | Sum - <b>4</b>
                        </td>
                      </tr>
                      <tr className="numbers-card-actions-tr">
                        <td className="numbers-card-actions-td">
                          <span
                            className="number-card-views"
                            id="numbercard_197884"
                          >
                            <i className="fa fa-eye"></i> 110
                          </span>
                          <span
                            className="number-card-btn-actions number-card-add-wishlist"
                            id="numbercardheart_197884"
                            data-status="1"
                          >
                            <i className="fa fa-heart"></i> 0
                          </span>
                          <a
                            id="directpay_197884"
                            href="/cart/"
                            className="number-card-btn-actions directBuy directBuyNumber nonloggeduser"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <center>
          <a href="/vip-numbers/?rtp=false">
            <span className="btn btn-warning">View More TRUE VIP Numbers</span>
          </a>
        </center>
        <VipfriendZone />
        <TrustSection />
        <Testmonials />
        <Footertestmonials />
      </div>
    </>
  );
}

export default Homecenterpage;
