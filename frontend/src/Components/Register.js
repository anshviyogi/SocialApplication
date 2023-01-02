import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { API } from "../Constants/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

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
    <form className="text-center" onSubmit={submitHandler}>
      <h1 className="text-4xl font-mono m-5">Register</h1>
      <input
        className="border border-black w-1/2 p-1 outline-0 rounded-md"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border border-black m-4 w-1/2 p-1 outline-0 rounded-md"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border border-black w-1/2 p-1 outline-0 rounded-md"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button className="bg-neutral-400 w-1/2 rounded-md p-1 mt-3">
        Register
      </button>

      <ToastContainer />
    </form>
  );
}

export default Register;
