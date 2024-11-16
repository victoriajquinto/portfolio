"use client";

import { useState } from 'react';
import Image from 'next/image'
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"


const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full fixed left-0 top-0 z-20">
      <div className="flex justify-between bg-gray-300/30 h-20 items-center px-8">
        <Image src={logo} alt="Logo" className="h-16 w-16" />
        <button onClick={toggleMenu} className="focus:outline-none">
          <Image src={menu} alt="Menu" className="h-16 w-16" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 right-0 bg-brown text-white p-4 flex flex-col space-y-4 text-center rounded-tl-md rounded-bl-md fade-menu">
          <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a>
          <a href="#work" className="hover:text-gray-400" onClick={toggleMenu}>Work</a>
          <a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a>
          <a href="./resume.pdf" download="Victoria_Quinto_Resume.pdf"
          className="hover:text-gray-400" 
          onClick={toggleMenu}>Resume</a>
        </div>
      )}
    </div>
  )
}

export default TopNav