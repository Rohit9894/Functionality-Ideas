import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const baseStyle = {
    color: "black",
    textDecoration: "none"
  };

  const activeStyle = {
    color: "blue",
    textDecoration: "underline"
  };
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <NavLink  style={({isActive})=>(isActive?activeStyle:baseStyle)} to="/">Home</NavLink>
      <NavLink  style={({isActive})=>(isActive?activeStyle:baseStyle)} to="/about">About</NavLink>
      <NavLink  style={({isActive})=>(isActive?activeStyle:baseStyle)} to="/user">User</NavLink>
      <NavLink  style={({isActive})=>(isActive?activeStyle:baseStyle)} to="/auth">Login</NavLink>
    </div>
  ); 
};
export default Navbar;
