import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Constants/api";

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
    <div>
      <h1 className="text-center font-normal text-4xl mt-5">
        Checkout all your uploaded images here
      </h1>

      {/* Images */}
      <div className="flex flex-col md:flex-row justify-center p-10 gap-4">
        {posts.map((data, index) => (
          <div key={index} className="shadow-lg">
            <img
              className="w-72 h-64 rounded-md"
              src={`${API}/file/image/${data.filename}`}
            />
            <p className="text-2xl text-gray-800">{data.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
