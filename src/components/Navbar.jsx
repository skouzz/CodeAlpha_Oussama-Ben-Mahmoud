import React from 'react';
import logo from "../assets/skouzz2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 relative">
      <a href="/">
        <img src={logo} alt="logo" style={{ width: '120px', height: 'auto' }} />
      </a>
      <div className='absolute right-0 flex items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/oussamabenmahmoud/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/skouzz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/SkOouZz_" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/oussama.ben.mahmoud/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};
