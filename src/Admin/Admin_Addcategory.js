import React from "react";
import { Link } from "react-router-dom";


const Admin_Addcategory = () => {


  return (
    <>
      <div className="Category_p">
        <div className="CategorylistName">
        
          <h1>Add Category</h1>
        
      
        </div>
      </div>
      <div className="Topallpage AllPageHight Custompage">
        <div className="ContentDiv Categoriesdiv1 draft">
          <div className="AddCategoryMainDiv">
          
              <h4>Name</h4>
              <input
                className="AddCategoryInput"
                placeholder="Category Name"
                type="text"
              
              />
             
           
            <div className="topBottomMarginDes">
              <h4>Description</h4>
             
                <textarea
                  className="category_descripitonTextarea"
                  type="textarea"
                  placeholder="Category Description"
                  name="Category Description"
                
                ></textarea>
             
              
            </div>
     
        

            <div class="checkboxStatus">
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="status"
                  name="status"
                 
                />
                <label for="status" class="Status101">
                  {" "}
                  Active
                </label>
              </div>
            </div>
            <div className="saveAndCancelCategory">
              <div className="CancelCategoryDiv">
                <Link to="/admin-category-list">
                  <button className="CancelCategoryButton">Cancel</button>
                </Link>
              </div>
              <div className="SaveCategoryDiv">
                <button  className="SaveCategoryButton">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Addcategory;
