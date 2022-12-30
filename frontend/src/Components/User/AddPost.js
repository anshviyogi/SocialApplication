import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState({ preview: "", data: "" });

  let formData = new FormData();
  formData.append("file", image.data);

  // On submit
  function submitHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // Handling the video file
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
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
    </div>
  );
}

export default AddPost;
