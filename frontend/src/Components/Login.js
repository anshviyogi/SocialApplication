import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../Constants/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const data = { email, password };

    axios.post(`${API}/login`, data).then((res) => {
      console.log(res);
      if (res.status === 203) {
        return toast.warn(res.data.message);
      }
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        navigate("/user");
        return toast.success(res.data.message);
      }
    });
  }
  return (
    <div className="flex h-screen">
      <div className="hidden items-center justify-center w-[70%] md:flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
          className="w-96"
        />
      </div>

      <form
        className=" bg-red-400 items-center justify-center flex flex-col w-[100%] md:w-[30%]"
        onSubmit={submitHandler}
      >
        <h1 className="mb-10 -tracking-tighter text-4xl font-semibold">
          Login
        </h1>
        <input
          type="text"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="john@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-gray-800 w-10/12 p-2 text-white rounded-md text-xl outline-none">
          Login
        </button>

        <Link to="/register" className="outline-none">
          Register
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
