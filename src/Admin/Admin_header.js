import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";




function Admin_header() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


 
  return (
    <>
      <header>
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white "
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" href="#">
              <img
                className="profilee_imgaee"
                src="/logo.png"
                height="25"
                alt=""
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown">
                <i class="far fa-building"></i>
              </li>
              <li className="nav-item dropdown">
                <i class="fas fa-envelope mail_box"></i>
              </li>
              <li className="nav-item dropdown">
                <i class="far fa-bell"></i>
              </li>

              <li>
                <div>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <li className="nav-item dropdown">
                      <i class='fas fa-user-edit'></i>

                        <span className="profile_span_contnet">profile</span>

                      </li>
                    </Typography>
                  </Popover>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />

                  <a className="admin_profile" href="#">
                    Admin User
                  </a>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                ></ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Admin_header;
