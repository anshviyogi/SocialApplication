import { Avatar, Tooltip } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="flex justify-between p-1 shadow-lg">
      {/* Header */}
      <Link to="/user">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
          className="w-24 pl-10"
        />
      </Link>

      <div className="mt-9 flex gap-10 md:mt-4 pr-10">
        <Link to="/profile">
          <Tooltip title="Your Profile">
            <Avatar
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              sx={{ width: 35, height: 35 }}
              className="cursor-pointer"
            />
          </Tooltip>
        </Link>

        <Link to="/user/search">
          <Tooltip title="Search">
            <div>
              <SearchIcon
                sx={{ width: 35, height: 35 }}
                className="cursor-pointer text-purple-800"
              />
            </div>
          </Tooltip>
        </Link>

        <Tooltip title="Logout?">
          <div onClick={logoutHandler}>
            <LoginIcon
              sx={{ width: 35, height: 35 }}
              className="cursor-pointer text-purple-800"
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;
