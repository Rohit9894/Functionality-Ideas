import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import SingleUser from "./SingleUser";
import User from "./User";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route path="/auth" element={<Login />} />
      <Route
        path="/user/:id"
        element={
          <PrivateRoute>
            <SingleUser />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
export default AllRoutes;
