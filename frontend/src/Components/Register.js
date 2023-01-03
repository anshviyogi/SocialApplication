import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../Constants/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      return toast.warn("Password and confirm password should be same");
    }

    axios.post(`${API}/register`, data).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
      if (res.status === 203) {
        return toast.warn(res.data.message);
      }
    });
  }
  return (
    <div className="flex h-screen">
      {/* Left Bar */}
      <div className="hidden items-center justify-center w-[70%] md:flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
          className="w-96"
        />
      </div>

      {/* Right bar */}

      <form
        className=" bg-red-400 items-center justify-center flex flex-col w-[100%] md:w-[30%]"
        onSubmit={submitHandler}
      >
        <h1 className="mb-10 -tracking-tighter text-4xl font-semibold">
          Register
        </h1>

        <input
          type="text"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="John Kyle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="john.kype@yahoo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="mb-5 w-10/12 p-2 rounded-md outline-none"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="bg-gray-800 w-10/12 p-2 text-white rounded-md text-xl outline-none">
          Register
        </button>

        <Link to="/login" className="text-start align-top">
          Login
        </Link>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Register;
