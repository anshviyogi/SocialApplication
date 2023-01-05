import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Constants/api";
import { Link } from "react-router-dom";

function UserProfile() {
  const [posts, setPosts] = useState([]);

  const data = {
    id: localStorage.getItem("userId"),
  };

  useEffect(() => {
    axios
      .post(`${API}/user/posts`, data)
      .then((res) => {
        console.log("Res >>>", res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (posts.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="bg-slate-500 w-[100%]">
      <h1 className="text-center font-normal text-4xl mt-5">
        Checkout all your uploaded images here
      </h1>

      {/* Images */}
      <div className="flex flex-wrap flex-col md:flex-row md:text-center justify-center p-10 gap-4">
        {posts.map((data, index) => (
          <Link
            htmlFor="my-modal"
            to={`/user/profile/${data.imageId}`}
            key={index}
            className="shadow-lg p-2"
          >
            <img
              className="md:w-96 md:h-64 rounded-md w-[100%] h-2/6"
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
