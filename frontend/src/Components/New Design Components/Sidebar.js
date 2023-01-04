import React from "react";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-[20%] shadow-2xl">
      {/* Sidebar */}

      <Link to="/user/home">
        <Tooltip title="All Posts" placement="right">
          <div className="shadow-lg mt-2 p-3 text-2xl rounded-md cursor-pointer border border-l-8 hover:border-l-purple-800">
            {/* <AddIcon className="text-2xl border border-purple-500 rounded-xl text-purple-800" /> */}
            <h1 className="text-center hidden md:block">Home</h1>
          </div>
        </Tooltip>
      </Link>

      <Link to="/user/add">
        <Tooltip title="Add Posts" placement="right">
          <div className="shadow-lg mt-2 p-3 text-2xl rounded-md cursor-pointer border border-l-8 hover:border-l-purple-800">
            {/* <AddIcon className="text-2xl border border-purple-500 rounded-xl text-purple-800" /> */}
            <h1 className="text-center hidden md:block">Add Posts</h1>
          </div>
        </Tooltip>
      </Link>

      <Link to="/user/profile">
        <Tooltip title="All Posts" placement="right">
          <div className="shadow-lg mt-2 p-3 text-2xl rounded-md cursor-pointer border border-l-8 hover:border-l-purple-800">
            {/* <AddIcon className="text-2xl border border-purple-500 rounded-xl text-purple-800" /> */}
            <h1 className="text-center hidden md:block">All Posts</h1>
          </div>
        </Tooltip>
      </Link>
    </div>
  );
}

export default Sidebar;
