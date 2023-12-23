import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons library

const Navbar = () => {
  return (
    <div className="flex justify-end items-center bg-zinc-900 p-4 text-white">
      <a
        href="https://github.com/HarshitVashisht11"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <span>Please 🌟 on </span>
        <FaGithub />
      </a>
    </div>
  );
};

export default Navbar;
