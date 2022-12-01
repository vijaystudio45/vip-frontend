import React from "react";
import { Link } from "react-router-dom";

function Admin_sidebar() {
  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-1">
              <a
                href="#"
                className="list-group-item list-group-item-action admin_side"
                aria-current="true"
              >
                <img className="home_icons" src="/img/homeicon.png" />
                <span>Super Admin</span>
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action admin_side"
              >
                <img className="home_icons" src="/img/Homeicon (1).png" />

                <span>Manage Numbers new</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action admin_side"
              >
                <img className="home_icons" src="/img/Projects.png" />

                <span>Manage Numbers</span>
              </a>
              <Link
                to="/number/list"
                className="list-group-item list-group-item-action admin_side"
              >
                <img className="home_icons" src="/img/Earnings_old.png" />

                <span>Add Numbers</span>
              </Link>
              <a
                href="#"
                className="list-group-item list-group-item-action admin_side"
              >
                <img className="home_icons" src="/img/Earnings_old.png" />

                <span>Numbers Bulk Action</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action admin_side"
              >
                <img className="home_icons" src="/img/Analytics.png" />

                <span>Margin Recalculate</span>
              </a>
              <div className="update_numm d-flex">
                <a
                  href="#"
                  className="list-group-item list-group-item-action admin_side updatee"
                >
                  <img className="home_icons" src="/img/Transactions.png" />

                  <span className="update_numebr">Update Numbers by Group</span>
                </a>
              </div>
              <Link
                to="/vip-seller"
                className="list-group-item list-group-item-action admin_side updatee"
              >
                <img className="home_icons" src="/img/Transactions.png" />

                <span className="update_numebr">Seller</span>
              </Link>
              <Link
                to="/admin-category-list"
                className="list-group-item list-group-item-action admin_side updatee"
              >
                <img className="home_icons" src="img/Transactions.png" />

                <span className="update_numebr">Category</span>
              </Link>
           
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Admin_sidebar;
