import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const { id } = useParams();
  useEffect(() => {
    axios.post("http://localhost:5000/user/searchUser", { id });
  }, []);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default UserProfile;
