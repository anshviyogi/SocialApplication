import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants/api";
import { Avatar } from "@mui/material";

function SearchedProfile() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .post(`${API}/user/single/user`, { id: id })
      .then((res) => setData(res.data));
  }, []);

  if (data.followers === undefined) return;

  return (
    <div className="p-5 md:p-20 flex flex-col justify-between md:flex-row md:items-center">
      {/* Name and Profile */}
      <div className="flex">
        <Avatar
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          sx={{ width: 100, height: 100 }}
          className="cursor-pointer"
        />
        <div>
          <h1 className="text-2xl pl-5">{data.name}</h1>
          <h3 className="ml-5 text-gray-500">{data.email}</h3>
        </div>
      </div>

      {/* Followers and following */}
      <div className="flex gap-32 justify-center mt-5">
        <Link to="/user/profile" className="text-center">
          <h3 className="text-2xl">0</h3>
          <h1>Posts</h1>
        </Link>

        <div className="text-center">
          <h3 className="text-2xl">{data.followers.length}</h3>
          <h1>Followers</h1>
        </div>

        <div className="text-center">
          <h3 className="text-2xl">{data.following.length}</h3>
          <h1>Following</h1>
        </div>
      </div>
    </div>
  );
}

export default SearchedProfile;
