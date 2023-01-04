import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png"
        className="w-[50%]"
      />

      <div className="flex items-center gap-5">
        <h1 className="text-6xl text-slate-800 font-mono">Let's get started</h1>
        <Link
          to="/login"
          className="border border-purple-500 p-2 rounded-md hover:bg-purple-700 hover:text-white"
        >
          <KeyboardArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

export default Home;
