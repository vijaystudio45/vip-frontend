import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

function Home() {
  const slideImages = [
    {
      url: "1.jpeg",
      caption: "1",
    },
    {
      url: "2.jpeg",
      caption: "2",
    },
    {
      url: "3.jpeg",
      caption: "3",
    },
    {
      url: "1.jpeg",
      caption: "1",
    },
    {
      url: "2.jpeg",
      caption: "2",
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
  };

  return (
    <>
      <div className="main_section">
        <div className="backgorund_img">
          <div className="container">
            <div>
              <div className="blue_line_back_img111">
                <img className="blue_line_back_img" src="title__bgumeshh.png" />
                <span className="main_contnet-section">
                  Inadia's biggest Trusted online Platform form VIP Moblie
                  Numbers.
                </span>
              </div>
              <div className="logoo_content_2">
                <img className="mx-auto vip__main-logo" src="logo.png" />
              </div>

              <div className="vip__search-section text-center">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h2>Search your Favourite VIP Digits Here.</h2>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Enter Digits..."
                          className="form-control vip_numberss"
                          required=""
                        />
                        <div className="input-group-append d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          href="#"
                          className="vip__blue-text "
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Advance Search
                        </a>
                      </div>

                      <div
                        className="modal fade contnettt-start"
                        id="exampleModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog advancee-btnn"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header modal_top_contnet">
                              <div
                                className="nav nav-tabs h"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div className="inputt_buttom_groups">
                                  <button
                                    className="search-box-btn"
                                    id="nav-search-tab"
                                    data-toggle="tab"
                                    href="#nav-search"
                                    role="tab"
                                    aria-controls="nav-search"
                                    aria-selected="true"
                                  >
                                    Search
                                  </button>
                                </div>
                                <div className="inputt_buttom_groups">
                                  <a
                                    className="nav-item nav-link"
                                    id="nav-advancesearch-tab"
                                    data-toggle="tab"
                                    href="#nav-advancesearch"
                                    role="tab"
                                    aria-controls="nav-advancesearch"
                                    aria-selected="false"
                                  >
                                    Advance Search
                                  </a>
                                </div>

                                <div className="together_contnet">
                                  <a className="nav-item nav-link exact_palce">
                                    Exact Placement Search{" "}
                                  </a>
                                  <span className="coming_soon_contnet">
                                    Coming Soon
                                  </span>
                                </div>

                                <div className="family_pack_content">
                                  <a className="nav-item nav-link family_contnet">
                                    Family Pack
                                  </a>
                                  <span className="comping_soon_contnet">
                                    Coming Soon
                                  </span>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="close close_mark"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true" className="close_mark">
                                  &times;
                                </span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="container">
                                <form>
                                  <div className="mb-3 grop_input_icon">
                                    <h6 className="form-label Search-Contt">
                                      Simple Search
                                    </h6>
                                    <input
                                      type="search"
                                      placeholder="Enter Number"
                                      className="form-control search_input_box"
                                      id="exampleInputSearch"
                                    />
                                  </div>
                                  <div className="mb-2 form-check">
                                    <input
                                      type="radio"
                                      className="form-check-input1 mr-1"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      className="form-check-label1 mr-1"
                                      htmlFor="exampleCheck1"
                                    >
                                      Start With
                                    </label>
                                    <input
                                      type="radio"
                                      className="form-check-input2 mr-1"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      className="form-check-label2 mr-1"
                                      htmlFor="exampleCheck1"
                                    >
                                      AnyWhere
                                    </label>
                                    <input
                                      type="radio"
                                      className="form-check-input3 mr-1"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      className="form-check-label3 mr-1"
                                      htmlFor="exampleCheck1"
                                    >
                                      End With
                                    </label>
                                  </div>
                                  <div className="btn-uubmitt">
                                    <button
                                      type="submit"
                                      className="search-btnn-sss"
                                    >
                                      search
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visit_store_section">

                <Link  className="vip__btn-blue mb-5" to="/home">Visit Store</Link>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="vip__slider slider position-relative slick-initialized slick-slider"></div>
                  </div>
                </div>
              </div>

              <div className="slide-container">
                <Slide {...settings}>
                  {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                      <div>
                        <img src={slideImage.url} className="w-100" />
                      </div>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
