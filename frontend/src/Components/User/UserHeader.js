import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="flex justify-between p-5 shadow-2xl">
      {/* Logo */}
      <div className="text-2xl">
        <h1>LOGO</h1>
      </div>

      <div className="space-x-10 text-2xl">
        <Link to="/user/add">Add</Link>
        <a onClick={logoutHandler} style={{ cursor: "pointer" }}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default UserHeader;
