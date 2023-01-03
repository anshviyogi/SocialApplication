import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../Constants/api";

function InsidePostPage() {
  const [posts, setPosts] = useState([]);
  const { image } = useParams();

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
        const filteredPost = res.data.filter((data) => data.imageId === image);
        setPosts(filteredPost);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteHandler(e) {
    console.log(e);
  }

  if (posts.length === 0) return;

  return (
    <div className="p-4 flex flex-col gap-14 md:flex-row md:p-14">
      {/* Image */}
      <div>
        <img
          className="w-[100%] rounded-lg"
          src={`${API}/file/image/${posts[0].filename}`}
        />
      </div>

      {/* Description and stuff */}
      <div>
        <h1 className="text-3xl uppercase">{posts[0].caption}</h1>
        <h1 className="text-1xl mt-2">Likes: {posts[0].likes.length}</h1>

        <p className="font text-gray-700">Uploaded At: {posts[0].date}</p>
        <button
          className="mt-14 bg-red-400 text-white p-2 rounded-md hover:bg-red-800"
          onClick={() => deleteHandler(posts[0]._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default InsidePostPage;
