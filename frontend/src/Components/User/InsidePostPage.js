import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../Constants/api";
import swal from "sweetalert";

function InsidePostPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { image } = useParams();

  const data = {
    token: localStorage.getItem("token"),
  };

  // Fetching data
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

  // Delete Posts
  function deleteHandler(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5000/user/posts/delete/${id}`);

        return swal("Post Deleted Successfully", {
          icon: "success",
        }).then(() => {
          navigate("/user/profile");
        });
      }
    });
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
