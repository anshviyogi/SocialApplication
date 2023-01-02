import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../Constants/api";

function AddPost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState({});

  const payloadObj = {
    file: image?.data,
    caption: caption,
    token: localStorage.getItem("token"),
  };

  console.log(payloadObj);

  // On submit
  function submitHandler(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/file/upload", payloadObj, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // Handling the video file
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
    console.log(img);
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl">Form Data</h1>
      <form onSubmit={submitHandler} className="shadow-xl p-10 rounded-md">
        {/* Video Input */}
        <label className="text-lg">Choose your image</label>
        <input
          type="file"
          name="file"
          className="w-full"
          onChange={handleFileChange}
        />

        <label className="text-lg mt-5">Caption</label>
        <input
          type="text"
          className="w-full border border-gray-500 outline-none rounded-md p-1"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <button className="bg-blue-600 w-full rounded-lg text-white mt-3 p-1">
          POST
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddPost;
