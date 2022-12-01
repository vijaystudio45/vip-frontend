import React from "react";
import { Link } from "react-router-dom";


function Login_admin() {

  return (
    <>
      <div className="admin_login">
        <div className="asmin_login_main">
          <section className="vh-100 ">
            <div className="container  ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card">
                    <div className="card-body ">
                      <div className="main_card-body">
                        <div className="img_login">
                          <img className="logoo_loginprogile" src="logo.png" />
                        </div>
                        <h2 className="fw-bold mb-2">
                          Welcome <br />
                          Vipnumber Shop
                        </h2>
                        <p className="login_about_contnet">
                          Log into your account by entering your username, email
                          and password.
                        </p>
                        <form  id="adminlogin">
                          
                            <div className="form-outline form-white">
                              <label className="form-label" for="typeEmailX">
                                Username or Email
                              </label>
                              <input
                               
                                type="phone"
                                id="typemobileX"
                                className="form-control form-control-lg"
                              />
                           
                            </div>
                       
                         
                            <div className="form-outline form-white mb-4">
                              <label className="form-label" for="typePasswordX">
                                Password
                              </label>
                              <input
                              
                                type="password"
                                id="typePasswordX"
                                className="form-control form-control-lg"
                              />
                            
                            </div>
                      
                          <button
                            className="btn btn-outline-light btn-lg px-5"
                            type="submit"
                          >
                            Log In
                          </button>
                        </form>

                        <p className="small forgot_password_divv">
                          <Link
                            to="/forgot-password"
                            className="forgottt"
                            href="#!"
                          >
                            Forgot password?
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login_admin;
