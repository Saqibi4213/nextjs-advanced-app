'use client';

import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-extrabold font-serif text-yellow-400 transition-transform transform hover:scale-110 hover:text-yellow-500 animate-glow">
            JAWAHER
          </h1>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden block text-white focus:outline-none transition duration-300 hover:text-yellow-500"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 items-center mt-4 md:mt-0 w-full md:w-auto transition-all duration-500 ease-in-out`}
        >
          <li>
            <a
              href="/"
              className="text-lg hover:text-yellow-500 transition duration-300 transform hover:scale-110 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg hover:text-yellow-500 transition duration-300 transform hover:scale-110 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-lg hover:text-yellow-500 transition duration-300 transform hover:scale-110 ease-in-out"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/users"
              className="text-lg hover:text-yellow-500 transition duration-300 transform hover:scale-110 ease-in-out"
            >
              Users
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
