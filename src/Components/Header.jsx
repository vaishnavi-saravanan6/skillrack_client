import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image.png';
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import BasicMenu from "./BasicMenu/BasicMenu.jsx"; 

const Header = () => {
  return (
    <header className="font-mono flex justify-between items-center bg-violet-400 px-8 py-3">
      
      {/* Logo */}
      <div>
        <img 
          src={Logo} 
          className="h-20 w-20 object-contain" 
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <ul className="flex items-center gap-6">
        <Link to='/'>
          <li className="text-lg text-white transition duration-300 hover:scale-110 cursor-pointer">
            <FaHome size={30}/>
          </li>
        </Link>

        <Link to='/courses'>
          <li className="text-lg text-white transition duration-300 hover:scale-110 cursor-pointer">
            <IoBookSharp size={30}/>
          </li>
        </Link>

        <Link to='/todo'>
          <li className="text-lg text-white transition duration-300 hover:scale-110 cursor-pointer">
            <LuListTodo size={30}/>
          </li>
        </Link>

        {/* Profile Dropdown */}
        <li className="text-lg text-white">
          <BasicMenu />
        </li>
      </ul>

    </header>
  );
};

export default Header;
