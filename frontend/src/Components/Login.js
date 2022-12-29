import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const data = { email, password };

    axios.post("http://localhost:8080/login", data).then((res) => {
      console.log(res);
      if (res.status === 203) {
        return toast.warn(res.data.message);
      }
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/user");
        return toast.success(res.data.message);
      }
    });
  }
  return (
    <form className="text-center" onSubmit={submitHandler}>
      <h1 className="text-4xl font-mono">Login</h1>
      <input
        className="border border-black m-4 w-1/2 p-1 outline-0 rounded-md"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <br /> */}
      <input
        className="border border-black w-1/2 p-1 outline-0 rounded-md"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button className="bg-neutral-400 w-1/2 rounded-md p-1 mt-3">
        LOGIN
      </button>

      <ToastContainer />
    </form>
  );
}

export default Login;
