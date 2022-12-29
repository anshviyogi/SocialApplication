import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex justify-between p-5 shadow-2xl">
      {/* Left Part */}
      <div>
        <h1 className="font-semibold text-3xl">LOGO</h1>
      </div>

      {/* Middle section */}
      <div className="text-right">
        <h1 className="text-2xl">Welcome to the pic app</h1>
      </div>

      {/* Right section */}
      <div className="space-x-20">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Header;
