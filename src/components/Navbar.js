// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="fixed w-full bg-primary z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            Anthony Mazzola
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="about" smooth={true} duration={500} className="hover:text-secondary cursor-pointer">
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-secondary cursor-pointer">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-secondary cursor-pointer">
            Projects
          </Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-secondary cursor-pointer">
            Experience
          </Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-secondary cursor-pointer">
            Education
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/anthony-p-mazzola" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-secondary" />
          </a>
          <a href="https://github.com/anthonymazzola" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-secondary" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;