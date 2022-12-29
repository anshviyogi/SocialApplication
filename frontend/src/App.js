import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddPost from "./Components/User/AddPost";
import UserHeader from "./Components/User/UserHeader";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Header />
              <Register />
            </>
          }
        />

        <Route
          path="/user"
          element={
            <>
              <UserHeader />
            </>
          }
        />

        <Route
          path="/user/add"
          element={
            <>
              <AddPost />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
