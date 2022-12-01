import React from "react";
import { Link } from "react-router-dom";


function Login_admin() {


  return (
    <>
      <div className="forgoy_passsword_div">
        <div className="admin_login">
          <div className="asmin_login_main">
            <section className="vh-100 ">
              <div className="container  ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card forgot-password">
                      <div className="card-body ">
                        <div className="main_card-body">
                          <div className="img_login">
                            <img
                              className="logoo_loginprogile"
                              src="logo.png"
                            />
                          </div>
                          <form  id="forgotpassword">
                            <div className="form-outline form-white mb-4">
                              <label className="form-label" for="typeEmailX">
                                Email
                              </label>
                              <input
                             

                                type="email"
                                id="typemobileX"
                                className="form-control form-control-lg"
                              />
                            </div>
                            <button
                              className="btn btn-outline-light btn-lg px-5"
                              type="submit"
                            >
                              Send
                            </button>
                            <Link to="/admin-login">
                              <button
                                className="btn btn-outline-light btn-lg px-5 cancel_btnn"
                                type="submit"
                              >
                                Cancel
                              </button>
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_admin;
