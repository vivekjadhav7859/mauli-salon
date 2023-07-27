import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context/auth";

const AdminMenu = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <>
      <div className="text-center">
        <div className="list-group mt-2 mb-2">
          <h4 className="fw-bold">Admin Panel</h4>
          <NavLink
            style={{background:"lavender",marginTop:"15px",border:"2px solid black",color:"magenta",borderRadius:"20px"}}
            to="/dashboard/admin"
            className="list-group-item list-group-item-action"
          >
            Dashboard
          </NavLink>
          <NavLink
            style={{background:"lavender",marginTop:"15px",border:"2px solid black",color:"magenta",borderRadius:"20px"}}
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            style={{background:"lavender",marginTop:"15px",border:"2px solid black",color:"magenta",borderRadius:"20px"}}
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Products
          </NavLink>
          <NavLink
            style={{background:"lavender",marginTop:"15px",border:"2px solid black",color:"magenta",borderRadius:"20px"}}
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            All Products
          </NavLink>
        </div>
        <div className="d-flex justify-content-center">
            <NavLink
              style={{background:"red",marginTop:"15px",border:"2px solid black",
              color:"white",borderRadius:"10px",width:"100px",marginBottom:"15px"}}
              onClick={handleLogout}
              to="/login"
              className="list-group-item list-group-item-action"
            >
              Log Out
            </NavLink>
          </div>
      </div>
    </>
  );
};

export default AdminMenu;
