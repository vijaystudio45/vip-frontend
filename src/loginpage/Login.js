import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Register() {
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <>
      <div className="via_login">
        <form id="userLogin">
          <div className="onlu_register">
            <div className="register_input">
              <input
                type="mobilenumber"
                className="mobile_input"
                placeholder="Mobile Number"
              />
            </div>

            <div className="register_input22">
              <input
                type="password"
                className="password_input"
                placeholder="Password"
              />
            </div>

            <div className="register_input33 d-flex">
              <button type="submit" className="mobile_input">
                LOGIN
              </button>
              <span onClick={handleClickOpen1} className="forgot_password">
                Forgot your password?
              </span>
            </div>
          </div>
        </form>

        <div className="main-forgoy_paswordd">
          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              {" "}
              <div className="whatsapp_header_contents d-flex">
                <div className="forgetpsw_contnet">
                  <h4 className="for_password_heading">Forgot Password</h4>
                </div>
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
                  <form id="forgotpassword">
                    <div className="heading_forot_password12">
                      <p className="valid_email">
                        Please enter your valid email address
                      </p>
                    </div>
                    <div className="register_input22">
                      <input
                        type="emial"
                        className="email_const_input_contnet"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="submit_btn1">
                      <button type="submit1" className="submit_forgot_password">
                        submit
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
    </>
  );
}

export default Register;
