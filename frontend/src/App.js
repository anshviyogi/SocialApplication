import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Testing from "./Components/Testing";
import AddPost from "./Components/User/AddPost";
import InsidePostPage from "./Components/User/InsidePostPage";
import UserProfile from "./Components/New Design Components/UserProfile";
import Header from "./Components/New Design Components/Header";
import Sidebar from "./Components/New Design Components/Sidebar";
import DashboardHome from "./Components/New Design Components/DashboardHome";
import Home from "./Components/New Design Components/Home";
import Profile from "./Components/New Design Components/Profile";
import SearchPage from "./Components/New Design Components/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route
          path={"/login"}
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path={"/register"}
          element={
            <>
              <Register />
            </>
          }
        />

        <Route
          path="/user"
          element={
            <>
              <Header />
              <div className="flex">
                <Sidebar />
                <DashboardHome />
              </div>
            </>
          }
        />

        <Route
          path="/user/add"
          element={
            <>
              <Header />
              <div className="flex">
                <Sidebar />
                <AddPost />
              </div>
            </>
          }
        />

        <Route
          path="/user/profile"
          element={
            <>
              <Header />
              <div className="flex w-[80%]">
                <Sidebar />
                <UserProfile />
              </div>
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />

        <Route
          path="/user/profile/:image"
          element={
            <>
              <Header />
              <InsidePostPage />
            </>
          }
        />

        <Route
          path="/user/search"
          element={
            <>
              <Header />
              <SearchPage />
            </>
          }
        />

        <Route
          path="/user/search/:id"
          element={
            <>
              <Header />
              <UserProfile />
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
