import React from "react";
import { NavLink } from "react-router-dom";
import "./Myheader.css";

function Myheader() {
  return (
    <div className="main-header">
      <h1 className="title">On joue à quoi ?</h1>
      <div className="buttons">
        <NavLink className="navlink-menu" to="/">
          Accueil
        </NavLink>
        <NavLink className="navlink-menu-creation" to="/Creation">
          Creation
        </NavLink>
        <NavLink className="navlink-menu-creation" to="/Register">
          Register
        </NavLink>
        <NavLink className="navlink-menu-creation" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Myheader;
