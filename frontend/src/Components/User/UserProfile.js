import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Constants/api";
import { Link } from "react-router-dom";

function UserProfile() {
  const [posts, setPosts] = useState([]);

  const data = {
    token: localStorage.getItem("token"),
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
  }, []);

  if (posts.length === 0) return <h1>Loading...</h1>;

  console.log(posts);

  return (
    <div className="bg-slate-500">
      <h1 className="text-center font-normal text-4xl mt-5">
        Checkout all your uploaded images here
      </h1>

      {/* Images */}
      <div className="flex flex-wrap flex-col md:flex-row md:text-center justify-center p-10 gap-4">
        {posts.map((data, index) => (
          <Link
            htmlFor="my-modal"
            to={`${data.imageId}`}
            key={index}
            className="shadow-lg p-2"
          >
            <img
              className="w-72 h-64 rounded-md"
              src={`${API}/file/image/${data.filename}`}
            />
            <p className="text-2xl text-gray-800">{data.caption}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
