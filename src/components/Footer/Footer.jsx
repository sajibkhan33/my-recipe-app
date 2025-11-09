import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">MyRecipe</h2>
          <p className="text-gray-300">
            Discover delicious recipes, cooking tips, and meal inspiration for
            every occasion. Your go-to place for tasty meals and culinary
            creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-yellow-300 transition">
                Recipes
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyRecipe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
