import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../loginpage/Login";

function Register() {
  const [myVar, setMyVar] = useState("register_btnn");

  return (
    <>
      <div className="container">
        <div className="common_div d-flex">
          <div className="login_div">
            <div class="back_contnet  d-flex">
              <Link className="home_icon" to="/home">
                {" "}
                <i class="fa fa-home"></i>
              </Link>

              <i class="fa fa-angle-right"></i>
              <span>Login</span>
            </div>

            <div className="via_login">
              <h4 className="log_contnet">LOGIN</h4>
              <div className="login_button d-flex">
                <h4>Login Via</h4>
                <button
                  onClick={() => {
                    setMyVar("register_btnn");
                  }}
                  className={
                    myVar === "register_btnn"
                      ? "all_jobs_poject_buttonnewdiv active1"
                      : "all_jobs_poject_buttonnewdiv"
                  }
                >
                  OTP
                </button>
                <button
                  onClick={() => {
                    setMyVar("loginn_btnn");
                  }}
                  className={
                    myVar ==="loginn_btnn"
                      ? "all_jobs_poject_buttonnewdiv active1"
                      : "all_jobs_poject_buttonnewdiv"
                  }
                >
                  PASSWORD
                </button>
              </div>

              {myVar === "register_btnn" ? (
                <>
                  <div className="only_login">
                    <div className="input_phonenum">
                      <input
                        className="number_inoputt"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </>
              ) : myVar === "loginn_btnn" ? (
                <>
                  <Login />
                </>
              ) : null}
            </div>
          </div>
          <div className="Register_div">
            <h4 className="create_an">CREATE AN ACCOUNT</h4>
            <div className="create_inputss">
              <form id="userRegister">
                <div className="name_input">
                  <input
                    type="full name"
                    className="full-name_input"
                    placeholder="Full Name"
                    name="f_Username"
                    id="full name"
                  />
                </div>

                <div className="email_input22">
                  <input
                    type="email"
                    className="full-name_input"
                    placeholder="Email"
                    id="email"
                  />
                </div>

                <div className="mobilel_input22">
                  <input
                    type="mobile no"
                    className="full-name_input"
                    placeholder="Mobile No."
                    id="monbile number"
                  />
                </div>

                <div className="passworc1_input22">
                  <input
                    type="password"
                    className="full-name_input"
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <div className="cpassword_input22">
                  <input
                    type="password"
                    className="full-name_input"
                    placeholder="Confirm Password"
                    id="password"
                  />
                </div>

                <div className="register_input33">
                  <button
                    type="submit"
                    value="create account"
                    className="mobile_input"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
