import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../Constants/api";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function SearchPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  // Requesting API's to get users
  useEffect(() => {
    axios.get(`${API}/user/users`).then((data) => setUsers(data.data));

    axios
      .post(`${API}/user/single/user`, { id: localStorage.getItem("userId") })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  // Follow User
  function followHandler(id) {
    console.log(id);

    const filtered = user.following.filter((ids) => ids === id);
    if (filtered.length !== 0)
      return toast.warn("You already follow this user");

    const obj = {
      followUserId: id,
      id: localStorage.getItem("userId"),
    };

    axios.put(`${API}/user/follow`, obj);
  }

  if (users.length === 0) return <h1>Loading..</h1>;
  if (user.length === 0) return;

  console.log(users);

  return (
    <div className="md:p-5 p-3">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-500 p-2 rounded-lg text-lg outline-none w-full md:w-2/4"
      />

      <ul>
        {users.users.map((data, index) => (
          <li
            key={index}
            className="mt-3 w-full shadow shadow-slate-500 flex justify-between p-2 items-center rounded-lg md:w-1/4 md:m-5"
          >
            <Link to={`${data._id}`}>
              <div>
                <h1>{data.name}</h1>
                <p className="text-sm text-gray-500">{data.email}</p>
              </div>
            </Link>

            <div>
              <button
                className="bg-blue-500 text-white rounded-md p-1"
                onClick={() => followHandler(data._id)}
              >
                Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default SearchPage;
