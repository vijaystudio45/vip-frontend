import React from "react";
import Header from "./Front_vip_homepage/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./loginpage/Register";
import Homecenterpage from "./Vip_Second_homepage/Homecenterpage";
import Contact_page from "./RouterComp/Contact_page";
import About_page from "./RouterComp/About_page";
import ChooseUs_page from "./RouterComp/ChooseUs_page";

import FaQpage from "./RouterComp/FaQpage";

import AppLayout from "./Vip_Second_homepage/AppLayout";

// Admin
import Admin_layout from "./Admin/Admin_layout";
import Admin_dasboard from "./Admin/Admin_dasboard";
import Login_admin from "./Admin/Login_admin";
import Admin_Seller from "./Admin/Admin_Seller";
import Admin_Add_seller from "./Admin/Admin_Add_seller";

import Admin_listNumber from "./Admin/Admin_listNumber";
import Admin_addNumber from "./Admin/Admin_addNumber";

//Admin
import Admin_Addcategory from "./Admin/Admin_Addcategory";
import Admin_categaryList from "./Admin/Admin_categaryList";
import Admin_add_subcategory from "./Admin/Admin_add_subcategory";

import Forgotpassword from "./Admin/Forgotpassword";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/admin-login" element={<Login_admin />} />
          <Route element={<Admin_layout />}>
            <Route exact path="/vip-admin" element={<Admin_dasboard />}></Route>
            <Route exact path="/vip-seller" element={<Admin_Seller />}></Route>
         

            <Route
              exact
              path="/seller/add"
              element={<Admin_Add_seller />}
            ></Route>
            {/* Add numbers */}
            <Route
              exact
              path="/number/list"
              element={<Admin_listNumber />}
            ></Route>
            <Route
              exact
              path="/number/add"
              element={<Admin_addNumber />}
            ></Route>
          
          

            <Route
              exact
              path="/admin-add-category"
              element={<Admin_Addcategory />}
            ></Route>
          
            <Route
              exact
              path="/admin-category-list"
              element={<Admin_categaryList />}
            ></Route>
        
            <Route
              exact
              path="/admin-add-subcategory"
              element={<Admin_add_subcategory />}
            ></Route>

            {/* Add numbers */}
          </Route>

          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route element={<AppLayout />}>
            <Route path="/contact" element={<Contact_page />} />
            <Route path="/about/" element={<About_page />} />
            <Route path="/why-choose-us" element={<ChooseUs_page />} />
            <Route path="/faq" element={<FaQpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Homecenterpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
