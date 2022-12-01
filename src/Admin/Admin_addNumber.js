import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function Admin_addNumber() {
  return (
    <>
      <div className="Category_p">
        <div className="CategorylistName">
          <h2>Add Numbers</h2>
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1 draft">
          <div className="main_div_seller">
            <div className="job_details_content">
              <h1 className="JobDetailsTitle">Add Numbers</h1>
            </div>

            <div className="styled-select Companyname Companyname_1">
              <h4 className="names_contnet">Select Seller Name</h4>

              <Select className="selectinputcolor menuiteminputcolor">
                <MenuItem value={null}>Choose Seller</MenuItem>
                <MenuItem>user1</MenuItem>
                <MenuItem>user2</MenuItem>
                <MenuItem>user3</MenuItem>
                <MenuItem>user4</MenuItem>
                <MenuItem>user5</MenuItem>
              </Select>
            </div>
            <div className="styled-select Companyname Companyname_1">
              <h4 className="names_contnet">Select Category</h4>
              <Select className="selectinputcolor menuiteminputcolor">
                <MenuItem value={null}>Select Category</MenuItem>

                <MenuItem>user1</MenuItem>
                <MenuItem>user2</MenuItem>
                <MenuItem>user3</MenuItem>
                <MenuItem>user4</MenuItem>
                <MenuItem>user5</MenuItem>
              </Select>
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Display number</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="name"
                placeholder="Add display number"
                name="title"
              />
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Price</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="number"
                placeholder="Add purchase price"
                name="Price"
              />
            </div>
            <div className="date-picker">
              <h4 className="names_contnet">Rtp date</h4>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label=""
                  minDate={new Date()}
                  disablePast
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

            <div class="related-jobs-check-box">
              <div className="head_input_cehck">
                <input type="checkbox" name="Premium" />
                <label for="vehicle1">Rtp</label>
              </div>
            </div>
            <div class="SubmitCancelBTN">
              <div class="Job-Bott-Btn-Cancel Job-Bott-Btn-Cancel-A">
                <Link
                  to="/vip-seller"
                  class="create-account-btn border-radius"
                  href=""
                >
                  Cancel
                </Link>
              </div>
              <div class="buttomjobbtn">
                <button type="button" class="primary Small border-radius">
                  Submit
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_addNumber;
