import React from "react";
import Home from "../Front_vip_homepage/Home"

function Header() {


  return (
    <>
      <div classNameName="navbar_header">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-light">
              <ul className="navbar-nav mr-auto navbar_content">
                <li className="nav-item">Login</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact us</li>
                <li className="nav-item">Why choose us</li>
                <li className="nav-item">FAQs</li>
              </ul>
            </div>
          </div>
          <div className="toggle_div">
          <nav className="navbar navbar-light ml-auto bg-grey toggler_tapp">
            <div className="toggle_btnn_contnet">
              <button
                className="navbar-toggler drop_down"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          </div>
        </div>
      </div>
      <div className="homee_page">
    <Home/>
        
      </div>

    </>
  );
}

export default Header;
