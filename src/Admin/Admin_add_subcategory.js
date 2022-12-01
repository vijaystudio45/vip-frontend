import React from "react";
import { Link } from "react-router-dom";

import { MDBDataTable } from "mdbreact";


const Admin_add_subcategory = () => {

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      // {
      //   label: "Tags",
      //   field: "tags",
      //   sort: "asc",
      //   width: 500,
      // },
      // {
      //   label: "Created At",
      //   field: "created_at",
      //   sort: "asc",
      //   width: 500,
      // },
      // {
      //   label: "Description",
      //   field: "cat_description",
      //   sort: "asc",
      //   width: 500,
      // },
      // {
      //   label: "Status",
      //   field: "status",
      //   sort: "asc",
      //   width: 500,
      // },
      // {
      //   label: "Action",
      //   field: "action",
      //   sort: "asc",
      //   width: 100,
      // },
    ],
  };

  return (
    <>
      <div class="Category_p">
        <div class="CategorylistName">
          <h1>Add Sub Category</h1>
        </div>
      </div>
      <div class="Topallpage AllPageHight Custompage">
        <div class="ContentDiv Categoriesdiv1 draft">
          <div className="addSubCategoryDataListD">
            <div className="savebtnnew Categorybtn">
              <Link to="">
                <button className="addCategaoryButtonList">
                  {" "}
                  Add Sub Category
                </button>
              </Link>
            </div>
            <MDBDataTable
              style={{}}
              responsive
              striped
              bordered
              small
              data={data}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_add_subcategory;
