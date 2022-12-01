import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

function Admin_Add_seller() {
  return (
    <>
      <div className="Category_p">
        <div className="CategorylistName">
          <h2>Add Seller</h2>
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1 draft">
          <div className="main_div_seller">
            <div className="job_details_content">
              <h1 className="JobDetailsTitle">Seller Details</h1>
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Name</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="name"
                placeholder="Name"
                name="title"
              />
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Number</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="mobile-number"
                placeholder="Number"
                name="title"
              />
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Email</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="emial"
                placeholder="Email"
                name="title"
              />
            </div>
            <div className="styled-select Companyname Companyname_1">
              <h4 className="names_contnet">Ratings</h4>
              <Select className="selectinputcolor menuiteminputcolor">
                <MenuItem value={null}>Select Rating</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={1.5}>1.5</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={2.5}>2.5</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={3.5}>3.5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={4.5}>4.5</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </div>

            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Plus Margin</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="emial"
                placeholder="Plus Margin"
                name="title"
              />
            </div>
            <div className=" agencyjob_input1 ">
              <h4 className="names_contnet">Multiple Margin</h4>
              <input
                className="category_name validateInput bkC2 w-50  border-radius border-1"
                type="emial"
                placeholder="Multiple Margin"
                name="title"
              />
            </div>

            <div class="related-jobs-check-box">
              <div className="head_input_cehck">
                <input type="checkbox" name="Premium" />
                <label for="vehicle1">Premium</label>
              </div>
              <div className="head_input_cehck">
                <input type="checkbox" name="vehicle1" />
                <label for="vehicle1">Active</label>
              </div>
              <div className="head_input_cehck">
                <input type="checkbox" name="vehicle1" />
                <label for="vehicle1">Cash on Delivery</label>
              </div>
              <div className="head_input_cehck">
                <input type="checkbox" name="vehicle1" />
                <label for="vehicle1">Comming Soon</label>
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

export default Admin_Add_seller;
