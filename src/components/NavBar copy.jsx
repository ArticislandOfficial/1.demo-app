import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          About Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Contact Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Help Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Blog Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ucamper/35/jesus"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Ucamper Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alumnos"
          className={({ isActive }) => (isActive ? "activo" : undefined)}
        >
          Alumnos Page
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
