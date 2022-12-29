import React, { useState } from "react";

function AddPost() {
  const [pic, setPic] = useState("");
  console.log(pic);

  return (
    <div>
      <h1 className="text-center text-4xl p-5 font-medium">Add Your Posts</h1>

      {/* Forms */}
      <form className="container flex flex-col justify-center">
        <input
          type="file"
          className="mb-5"
          onChange={(e) => console.log(e.target.value)}
        />

        <label>Caption</label>
        <input
          type="text"
          placeholder="What a beautiful weather is it"
          className="w-full p-1 border border-gray-500 rounded-md"
        />

        <button className="bg-red-400 text-white rounded-md p-2 mt-5">
          POST
        </button>
      </form>
    </div>
  );
}

export default AddPost;
