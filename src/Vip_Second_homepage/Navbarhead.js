import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Navbarhead() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <>
      <div className="navbar-header">
        <div className="main_div_contnet">
          <nav className="navbar navbar-expand-lg navbar_top_Contnet">
            <div className="container">
              <div className="home_bar_contnet">
                <Link to="/home" className="navbar-brand home_contnet" href="#">
                  Home
                </Link>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbarToggler10"
                aria-controls="myNavbarToggler10"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="myNavbarToggler10">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item double_likns">
                    <Link
                      className="nav-link link_achorr"
                     to="#"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      LOG IN
                    </Link>
                    <Link
                      to="/register"
                      className="nav-link link_achorr rediter_contnet"
                      href="#"
                    >
                      REGITSER
                    </Link>
                  </li>
                  <li className="nav-item linee-contnet"></li>
                  <li className="nav-item">
                    <Link className="nav-link link_achorr" href="#">
                      <i className="fab fa-whatsapp"></i>
                      <span onClick={handleClickOpen1}>CALL US</span>
                    </Link>
                  </li>

                  <li className="nav-item linee-contnet"></li>
                </ul>
                <ul className="navbar-nav sm-icons mr-0">
                  <li className="nav-item">
                    <Link className="nav-link link_achorr" href="#">
                      <i className="fa fa-heart"></i>
                    </Link>
                  </li>
                  <li className="nav-item linee-contnet"></li>

                  <li className="nav-item">
                    <Link
                      to="//www.facebook.com/vipnumbershop"
                      className="nav-link link_achorr"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="//www.instagram.com/vip_number_shop_7009170092/"
                      className="nav-link link_achorr"
                      href="#"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="//twitter.com/vipnumbersshop"
                      className="nav-link link_achorr"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="//www.youtube.com/channel/UCSpG3ZF4j93nw5LmGIbbM4Q"
                      className="nav-link link_achorr"
                      href="#"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="//play.google.com/store/apps/details?id=com.wVipnumbershop.five921843"
                      className="nav-link link_achorr"
                      href="#"
                    >
                      <i className="fab fa-google-play"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="main-whatsapp_contnet">
                <Dialog
                  open={open1}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose1}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>
                    {" "}
                    <div className="whatsapp_header">
                      <button
                        onClick={handleClose1}
                        type="button"
                        className="close close_mark whatapp_xmark"
                      >
                        <span aria-hidden="true" className="close_mark">
                          &times;
                        </span>
                      </button>
                    </div>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <div className="container">
                        <div className="main_user_whatsapp_contnet">
                          <div className="whatsapp_invite">
                            <div className="whatsapp_contnet">
                              <div className="profile_image_contnet d-flex">
                                <img
                                  className="profile_image"
                                  src="profile.png" alt="profile" 
                                />
                                <i class="fa fa-circle"></i>
                              </div>
                              <div className="whatsapp_contnet11">
                                <h6 className="whatsappuser_name">
                                  Miss Pooja
                                </h6>
                                <p className="userPhone_number">90265-90266</p>
                              </div>
                            </div>
                            <div className="second_call_whatsapp">
                              <div className="icon_phone">
                                <i class="fa fa-phone"></i>
                                <i className="fab fa-whatsapp user_invite"></i>
                              </div>
                            </div>
                          </div>
                          <div className="whatsapp_invite">
                            <div className="whatsapp_contnet">
                              <div className="profile_image_contnet d-flex">
                                <img
                                  className="profile_image"
                                  src="profile.png" alt=""
                                />
                                <i class="fa fa-circle"></i>
                              </div>
                              <div className="whatsapp_contnet11">
                                <h6 className="whatsappuser_name">
                                  Miss Pooja
                                </h6>
                                <p className="userPhone_number">90265-90266</p>
                              </div>
                            </div>
                            <div className="second_call_whatsapp">
                              <div className="icon_phone">
                                <i class="fa fa-phone"></i>
                                <i className="fab fa-whatsapp user_invite"></i>
                              </div>
                            </div>
                          </div>
                          <div className="whatsapp_invite">
                            <div className="whatsapp_contnet">
                              <div className="profile_image_contnet d-flex">
                                <img
                                  className="profile_image"
                                  src="profile.png" alt=""
                                />
                                <i class="fa fa-circle"></i>
                              </div>
                              <div className="whatsapp_contnet11">
                                <h6 className="whatsappuser_name">
                                  Miss Pooja
                                </h6>
                                <p className="userPhone_number">90265-90266</p>
                              </div>
                            </div>
                            <div className="second_call_whatsapp">
                              <div className="icon_phone">
                                <i class="fa fa-phone"></i>
                                <i className="fab fa-whatsapp user_invite"></i>
                              </div>
                            </div>
                          </div>
                          <div className="whatsapp_invite">
                            <div className="whatsapp_contnet">
                              <div className="profile_image_contnet d-flex">
                                <img
                                  className="profile_image"
                                  src="botlaugh.png" alt=""
                                />
                                <i class="fa fa-circle"></i>
                              </div>
                              <div className="whatsapp_contnet11">
                                <h6 className="whatsappuser_name">
                                  Miss Pooja
                                </h6>
                                <p className="userPhone_number">90265-90266</p>
                              </div>
                            </div>
                            <div className="second_call_whatsapp">
                              <div className="icon_phone">
                                <i className="fab fa-whatsapp user_invite logo_whats"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions></DialogActions>
                </Dialog>
              </div>
              <div className="main_modal_contnet">
                <div
                  className="modal fade contnettt-start"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog advancee-btnn" role="document">
                    <div className="modal-content">
                      <div className="modal-header modal_top_contnet">
                        <div
                          className="nav nav-tabs h"
                          id="nav-tab"
                          role="tablist"
                        >
                          <div className="inputt_buttom_groups">
                            <h6 className="log_contnet_regi">LOGIN</h6>
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
                      <div className="modal_border-div">
                        <div className="modal-body">
                          <div className="container">
                            <FormControl fullWidth>
                              <Select>
                                <MenuItem>Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem>Thirty</MenuItem>
                              </Select>
                              <input
                                className="mobileee_number"
                                type="mobilenumber"
                                placeholder="Enter Mobile number"
                              />
                            </FormControl>
                            <div className="mobile_no"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="main_second_div">
              <div className="logo_vip_desiign">
                <div className=" vip_logo_image">
                  <Link to="/home">
                    <img className="vip_main_logo_png" src="logo.png" alt="" />
                  </Link>
                </div>

                <div className=" vip_logo_image2">
                  <div className="input-group  buttons-content">
                    <input
                      type="text"
                      placeholder="Search for VIP Numbers"
                      className="form-control vip_numberss_inpubox"
                      required=""
                    />
                    <div className="input-group-append d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="heading_advanced">
                    <h4 onClick={handleClickOpen} className="heading_advance11">
                      Advance Search
                    </h4>
                  </div>
                  <div>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle>
                        {" "}
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
                              <Link className="nav-item nav-link exact_palce">
                                Exact Placement Search{" "}
                              </Link>
                              <span className="coming_soon_contnet">
                                Coming Soon
                              </span>
                            </div>

                            <div className="family_pack_content">
                              <Link className="nav-item nav-link family_contnet">
                                Family Pack
                              </Link>
                              <span className="comping_soon_contnet">
                                Coming Soon
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={handleClose}
                            type="button"
                            className="close close_mark"
                          >
                            <span aria-hidden="true" className="close_mark">
                              &times;
                            </span>
                          </button>
                        </div>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
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
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions></DialogActions>
                    </Dialog>
                  </div>
                </div>
                <div className="vip_logo_image3"></div>
                <div className="vip_logo_image4">
                  <button
                    onClick={handleClickOpen1}
                    type="button"
                    className="callus_contnet"
                    aria-labelledby="contactModalLabel"
                  >
                    CALL US NOW
                  </button>

                  <div className="line-extraa"></div>
                  <div className="dropdown cart-dropdown">
                    <div className="icon_count_contnet">
                      <i className="fas fa-shopping-bag"></i>
                      <span className="cart-count">0</span>
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_navbar d-none d-lg-block">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link">
                        Home <span className="sr-only"></span>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Categories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link" href="">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/why-choose-us" className="nav-link">
                        Why Choose Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/faq" className="nav-link">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="second_componet"></div>
    </>
  );
}

export default Navbarhead;
