import React from "react";


import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";


function Admin_Seller() {

  const data = {
    columns: [
      {
        label: "Title",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Status",
        field: "is_active",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
 
  };



  return (
    <>
      {" "}
      <div className="Category_p">
        <div className="CategorylistName">
          <h2>Seller's List</h2>
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1">
          <div className="Status"></div>
          <div className="savebtnnew Categorybtn">
            <Link
              className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
              to={"/seller/add"}
            >
              {" "}
              Add seller
            </Link>
          </div>
          <MDBDataTable
            data={data}
            style={{}}
            responsive
            striped
            bordered
            small
          />
        </div>
      </div>
    </>
  );
}

export default Admin_Seller;
