import React from "react";


import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";


function Admin_listNumber() {
 
  const data = {
    columns: [
      {
        label: "Display Number ",
        field: "display_number",
        sort: "asc",
        width: 500,
      },
      {
        label: "Selling Price",
        field: "selling_price",
        sort: "asc",
        width: 500,
      },
 
      {
        label: "RTP",
        field: "rtp",
        sort: "asc",
        width: 500,
      },
     
  
    
      {
        label: "Status",
        field: "status",
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
          <h2>Numbers List</h2>
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1">
          <div className="Status"></div>
          <div className="savebtnnew Categorybtn">
            <Link
              className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
              to={"/number/add"}
            >
              {" "}
              Add Number
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

export default Admin_listNumber;
