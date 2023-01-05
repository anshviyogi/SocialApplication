import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../Constants/api";
import UserProfile from "../User/UserProfile";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const data = {
    id: localStorage.getItem("userId"),
  };

  useEffect(() => {
    axios
      .post(`${API}/user/posts`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));

    axios.post(`${API}/user/single/user`, data).then((res) => {
      setUser(res.data);
    });
  }, []);

  if (user.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      <div className="p-5 md:p-20 flex flex-col justify-between md:flex-row md:items-center">
        {/* Name and Profile */}
        <div className="flex">
          <Avatar
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            sx={{ width: 100, height: 100 }}
            className="cursor-pointer"
          />
          <div>
            <h1 className="text-2xl pl-5">{user.name}</h1>
            <h3 className="ml-5 text-gray-500">{user.email}</h3>
          </div>
        </div>

        {/* Followers and following */}
        <div className="flex gap-32 justify-center mt-5">
          <Link to="/user/profile" className="text-center">
            <h3 className="text-2xl">{posts.length}</h3>
            <h1>Posts</h1>
          </Link>

          <div className="text-center">
            <h3 className="text-2xl">0</h3>
            <h1>Followers</h1>
          </div>

          <div className="text-center">
            <h3 className="text-2xl">{user.following.length}</h3>
            <h1>Following</h1>
          </div>
        </div>
      </div>

      <UserProfile />
    </>
  );
}

export default Profile;
