import React from "react";
import { Link } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Avatar, Tooltip } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function Testing() {
  return (
    <>
      <div className="flex justify-between p-1 shadow-lg">
        <div>
          <img
            src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png"
            className="w-44"
          />
        </div>

        <div className="mt-9 flex md:mt-8 gap-7">
          <Tooltip title="Your Profile">
            <Avatar sx={{ width: 35, height: 35 }} className="cursor-pointer" />
          </Tooltip>

          <Tooltip title="Logout?">
            <LoginIcon
              sx={{ width: 35, height: 35 }}
              className="cursor-pointer"
            />
          </Tooltip>
        </div>
      </div>

      <div className="h-screen w-[20%] shadow-2xl hidden md:block">
        <div>
          <Tooltip title="Add Posts" placement="right">
            <h1 className="shadow-lg mt-2 p-3 text-2xl text-center rounded-md cursor-pointer">
              Add Posts
            </h1>
          </Tooltip>

          <Tooltip title="All Posts" placement="right">
            <h1 className="shadow-lg mt-2 p-3 text-2xl text-center rounded-md cursor-pointer">
              All Posts
            </h1>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default Testing;
