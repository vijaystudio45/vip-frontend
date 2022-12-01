import Admin_sidebar from "../Admin/Admin_sidebar";
import Admin_header from "../Admin/Admin_header";
import Admin_footer from "../Admin/Admin_footer";
import { Outlet } from "react-router-dom"

function Admin_layout() {
  return (
    <>
      <>
        <div className="admin_layout_after_loader">
          
            <div className=" sidebar DAMSidebar sidebarmenu2 headerTop">
              <Admin_header />
            </div>
          </div>
          <div className="Topdivallpage" id="Topdivallpage">
            <div className="rightsidevar">
              <Admin_sidebar />
            </div>
            <div className="Rightbar">
              <Outlet />
            </div>
          </div>
          <Admin_footer />
        
      </>
    </>
  );
}
export default Admin_layout;
