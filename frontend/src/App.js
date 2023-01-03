import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Testing from "./Components/Testing";
import AddPost from "./Components/User/AddPost";
import InsidePostPage from "./Components/User/InsidePostPage";
import UserHeader from "./Components/User/UserHeader";
import UserProfile from "./Components/User/UserProfile";

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
          path={"/login"}
          element={
            <>
              {/* <Header /> */}
              <Login />
            </>
          }
        />

        <Route
          path={"/register"}
          element={
            <>
              {/* <Header /> */}
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
              <UserHeader />
              <AddPost />
            </>
          }
        />

        <Route
          path="/user/profile"
          element={
            <>
              <UserHeader />
              <UserProfile />
            </>
          }
        />

        <Route
          path="/user/profile/:image"
          element={
            <>
              <UserHeader />
              <InsidePostPage />
            </>
          }
        />

        <Route
          path="/test"
          element={
            <>
              <Testing />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
