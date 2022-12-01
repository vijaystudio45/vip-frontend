import React from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";


const Admin_categaryList = () => {


  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },

      {
        label: "Description",
        field: "cat_description",
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
      <div className="Category_p">
        <div className="CategorylistName">
          <h1>Category List</h1>
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1 draft">
          <div className="savebtnnew Categorybtn">
            <Link to="/admin-add-category">
              <button className="addCategaoryButtonList">
                {" "}
            Add Category
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
    </>
  );
};

export default Admin_categaryList;
