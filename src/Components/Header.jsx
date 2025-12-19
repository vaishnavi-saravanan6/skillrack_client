import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image.png";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import BasicMenu from "./BasicMenu/BasicMenu.jsx";
import * as jwt_decode from "jwt-decode"; // ✅ use * as

const Header = () => {
  const token = localStorage.getItem("token");
  let role = null;

  if (token) {
    try {
      const decoded = jwt_decode.default(token); // ✅ call default
      role = decoded.role;
    } catch (err) {
      console.error("Invalid token");
    }
  }

  return (
    <header className="font-mono flex justify-between items-center bg-violet-400 px-8 py-3">
      <img src={Logo} className="h-20 w-20 object-contain" alt="logo" />

      <ul className="flex items-center gap-6">
        <Link to="/">
          <FaHome size={30} className="text-white hover:scale-110" />
        </Link>

        {role === "user" && (
          <>
            <Link to="/user/dashboard">
              <span className="text-white font-semibold">Dashboard</span>
            </Link>
            <Link to="/courses">
              <IoBookSharp size={30} className="text-white" />
            </Link>
            <Link to="/todo">
              <LuListTodo size={30} className="text-white" />
            </Link>
            <BasicMenu />
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin/dashboard">
              <span className="text-white font-semibold">Admin Dashboard</span>
            </Link>
            <BasicMenu />
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
