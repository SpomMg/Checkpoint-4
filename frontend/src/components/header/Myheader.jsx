/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";

function Myheader() {
  return (
    <div>
      <h1>On joue à quoi ?</h1>
      <div>
        <NavLink className="navlink-menu" to="/">
          Accueil
        </NavLink>
        <NavLink className="navlink-menu" to="/Creation">
          Creation
        </NavLink>
      </div>
    </div>
  );
}

export default Myheader;
