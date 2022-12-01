import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


function VipfriendZone() {
  const slideImages = [
    {
      url: "white.png",
      caption: "1",
    },
    {
      url: "Sticker_Happy_Birthday_13.png",
      caption: "2",
    },
    {
      url: "Pale_Pink_Blue_Printed_Round_Sticker_Happy_Birthday_4.png",
      caption: "3",
    },
    {
      url: "black.png",
      caption: "1",
    },
    {
      url: "bgg.png",
      caption: "2",
    },
    {
      url: "green.png",
      caption: "2",
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 100,
  };
  return (
    <>
      <div className="vip_main_div_contnet">
        <div className="cards_contnet">
          <div className="slide-container_imgeras">
            <Slide {...settings}>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide_vip_numbers" key={index}>
                  <div>
                    <img src={slideImage.url} className="slidess_imgess" />
                  </div>
                </div>
              ))}
            </Slide>
          </div>

          <div class="vip__friendly-section">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h4>VIP FRIEND ZONE</h4>
                  <p>Apke swaal, Hamare jwaab</p>
                  <img src="dots.png" width="30px" loading="lazy" />
                  <div class="vip__friendly-items">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="vip__item-question">
                          <h5>Will it be in Prepaid or postpaid?</h5>
                          <p>
                            <span className="tickk">✓&nbsp;</span>&nbsp;
                            <span>
                              <strong className="Portable_number">
                                Our any number is Portable (can be activated) to
                                any state, any operator, and any nature
                                (Prepaid/Postpaid) as customer{" "}
                                <span className="choice_contnet">choice.</span>
                              </strong>
                            </span>
                            <br />
                            <span className="tickk">✓&nbsp;</span>
                            <span>
                              <strong className="hindi_contnet">
                                हमारा कोई भी नंबर, किसी भी राज्य, किसी भी कम्पनी
                                में प्रीपेड या पोस्टपेड, जैसे भी कस्टमर चाहे
                                पोर्ट / चालू किया जा सकता है।
                              </strong>
                              &nbsp;
                              <br />
                              <div className="ned_compo">
                                <span className="need_component_cont">
                                  For more details check the Videos:
                                </span>
                              </div>
                              <br />
                              <a href="">हिंदी में वीडियो</a>
                              <a href="">Video in English</a>
                            </span>
                          </p>
                        </div>
                      </div>
                      <img
                        src="images/dots.svg"
                        class="img-responsive d-flex d-sm-none"
                      />
                      <div class="col-12 col-md-6">
                        <div class="vip__item-question">
                          <h5>How the Number will be delivered?</h5>
                          <h5>
                            <strong className="delivery">
                              Delivery Process:
                            </strong>
                            <br />
                            <span className="tic_markk">✓&nbsp;</span>

                            <span className="nedd_component44">
                              You'll receive the UPC after the order will be
                              placed.
                            </span>
                          </h5>
                          <h5>
                            <span className="tic_markk">✓&nbsp;</span>

                            <span className="nedd_component44">
                              Thereafter, You just need to visit any of your
                              nearest Sim retailer shops.
                            </span>
                            <br />
                            <span className="tic_markk">✓&nbsp;</span>

                            <span className="nedd_component44">
                              Start the MNP process to activate your VIP Number.
                            </span>
                          </h5>
                          <span className="nedd_component4">
                            Delivery process with a Video:
                          </span>
                          <br />
                          <a href="">हिंदी में वीडियो&nbsp;</a>{" "}
                          <a href="">Video In English</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="click_btn">
                    <a href="" class="btn btn-default">
                      More Questions? Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="repeat_cards_comp">
            <h2 class="heading-lable-gredient1">Featured Numbers</h2>
          </div>

          <div className="numbers_cards">
              <div className="row show-homepage-no-truevip filter-data-output">
                <div
                  className="col-lg-3 col-md-4 col-sm-4 col-xs-12"
                  id="number-card-wishlist_${obj.numberid}"
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
                                <small className="number-price">
                                  ₹ 3,990/-
                                </small>
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_267182">
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
                                <strike>34,695</strike>
                                <small className="number-price">
                                  ₹ 30,170/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="267182"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                70470-70270
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
                              Total - <b>34</b> | Sum - <b>7</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_267182"
                              >
                                <i className="fa fa-eye"></i> 61
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_267182"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 0
                              </span>
                              <a
                                id="directpay_267182"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_201191">
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
                                <small className="number-price">
                                  ₹ 3,990/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="201191"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                73300-71122
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
                              Total - <b>26</b> | Sum - <b>8</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_201191"
                              >
                                <i className="fa fa-eye"></i> 42
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_201191"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 0
                              </span>
                              <a
                                id="directpay_201191"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_291179">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                    title="Seller Rating - 4 Stars"
                                  ></i>
                                  &nbsp;
                                </span>
                                <strike>1,37,330</strike>
                                <small className="number-price">
                                  ₹ 1,19,418/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="291179"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                9888-333-666
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
                              Total - <b>60</b> | Sum - <b>6</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_291179"
                              >
                                <i className="fa fa-eye"></i> 128
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_291179"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 3
                              </span>
                              <a
                                id="directpay_291179"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_185835">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4.5 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4.5 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4.5 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 4.5 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                    title="Seller Rating - 4.5 Stars"
                                  ></i>
                                  &nbsp;
                                </span>
                                <strike>10,060</strike>
                                <small className="number-price">
                                  ₹ 8,748/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="185835"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                9920226622
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
                                id="numbercard_185835"
                              >
                                <i className="fa fa-eye"></i> 73
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_185835"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 2
                              </span>
                              <a
                                id="directpay_185835"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_233429">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 3 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 3 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                    title="Seller Rating - 3 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                    title="Seller Rating - 3 Stars"
                                  ></i>
                                  &nbsp;
                                  <i
                                    className="fa fa-star-o"
                                    aria-hidden="true"
                                    title="Seller Rating - 3 Stars"
                                  ></i>
                                  &nbsp;
                                </span>
                                <strike>16,905</strike>
                                <small className="number-price">
                                  ₹ 14,700/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="233429"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                9636346363
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
                              Total - <b>49</b> | Sum - <b>4</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_233429"
                              >
                                <i className="fa fa-eye"></i> 46
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_233429"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 2
                              </span>
                              <a
                                id="directpay_233429"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_193806">
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
                                <strike>10,062</strike>
                                <small className="number-price">
                                  ₹ 8,750/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="193806"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                8989214786
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
                              Total - <b>62</b> | Sum - <b>8</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_193806"
                              >
                                <i className="fa fa-eye"></i> 92
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_193806"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 1
                              </span>
                              <a
                                id="directpay_193806"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_267971">
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
                                <strike>10,744</strike>
                                <small className="number-price">
                                  ₹ 9,343/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="267971"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                958-958-2121
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
                              Total - <b>50</b> | Sum - <b>5</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_267971"
                              >
                                <i className="fa fa-eye"></i> 70
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_267971"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 4
                              </span>
                              <a
                                id="directpay_267971"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_199841">
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
                                <strike>7,325</strike>
                                <small className="number-price">
                                  ₹ 6,370/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="199841"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                86086-68168
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
                              Total - <b>57</b> | Sum - <b>3</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_199841"
                              >
                                <i className="fa fa-eye"></i> 44
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_199841"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 0
                              </span>
                              <a
                                id="directpay_199841"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_200758">
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
                                <strike>3,220</strike>
                                <small className="number-price">
                                  ₹ 2,800/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="200758"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                96979-99097
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
                              Total - <b>74</b> | Sum - <b>2</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_200758"
                              >
                                <i className="fa fa-eye"></i> 71
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_200758"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 1
                              </span>
                              <a
                                id="directpay_200758"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_198853">
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
                                <strike>7,325</strike>
                                <small className="number-price">
                                  ₹ 6,370/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="198853"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                7500055151
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
                              Total - <b>29</b> | Sum - <b>2</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_198853"
                              >
                                <i className="fa fa-eye"></i> 68
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_198853"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 6
                              </span>
                              <a
                                id="directpay_198853"
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
                  id="number-card-wishlist_${obj.numberid}"
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
                                <span className="fetNumberCard jsNumberCard rating_219467">
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
                                <strike>1,648</strike>
                                <small className="number-price">
                                  ₹ 1,07,520/-
                                </small>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="number-casrd-row-no number-quick-view"
                            data-id="219467"
                            data-className="fetclassName"
                          >
                            <td>
                              <h3 className="number-display-cell noselect">
                                98887-88887
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
                              Total - <b>79</b> | Sum - <b>7</b>
                            </td>
                          </tr>
                          <tr className="numbers-card-actions-tr">
                            <td className="numbers-card-actions-td">
                              <span
                                className="number-card-views"
                                id="numbercard_219467"
                              >
                                <i className="fa fa-eye"></i> 115
                              </span>
                              <span
                                className="number-card-btn-actions number-card-add-wishlist"
                                id="numbercardheart_219467"
                                data-status="1"
                              >
                                <i className="fa fa-heart"></i> 0
                              </span>
                              <a
                                id="directpay_219467"
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
                <span className="btn btn-warning">
                View All Featured Numbers
                </span>
              </a>
            </center>
        </div>
      </div>
    </>
  );
}

export default VipfriendZone;
