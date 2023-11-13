import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLogo from "../medias/Logo/NavLogo.png";
import "../index.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Inter font-[1000] text-xl py-5 text-white mx-auto my-auto bg-[#043263] xl:flex xl:justify-between uppercase border-b-2 border-[#02bbbd]">
      <div className="flex items-center xl:ml-20">
        <img className="px-5 w-max h-24" src={NavLogo} alt="Logo" />
        <div className="xl:hidden ml-auto px-5">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleMenu}
            className="cursor-pointer text-2xl"
          />
        </div>
        <div className={`xl:flex ${isMenuOpen ? "" : "hidden"}`}>
          <Link className="px-5 group ml-5 relative" to="/">
            Home
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
          <Link className="px-5 group ml-5 relative" to="/tourpage">
            Tour
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
          <Link className="px-5 group ml-5 relative" to="#">
            Municipal
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
          <Link className="px-5 group ml-5 relative" to="#">
            History
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
        </div>
      </div>
      <div className="flex mr-20 items-center">
        <div className={`xl:flex ${isMenuOpen ? "" : "hidden"}`}>
          <Link className="px-5 group mr-5 relative" to='/about'>
            About
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
          <Link className="px-5 group mr-5 relative" to="/contactus">
            Contact Us
            <span className="absolute -bottom-5 left-0 right-0 h-1 bg-[#02bbbd] transform duration-300 scale-x-0 origin-left transition-transform ease-in-out group-hover:scale-x-100 mx-auto"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
