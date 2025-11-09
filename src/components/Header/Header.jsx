import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold italic cursor-pointer tracking-wide">
          <span className="text-pink-500">My</span>
          <span className="ml-1 bg-clip-text text-transparent bg-linear-to-r from-yellow-400 to-red-500">
            Recipe
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/recipes" className="hover:text-blue-500 transition">
            Recipes
          </Link>
        </nav>

        {/* Right side: Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Cart />

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-200 text-center py-3 space-y-2">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Recipes
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
