import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative bg-linear-to-r from-yellow-400 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="mb-6 text-lg md:text-xl text-white/90">
            Explore new flavors, cooking tips, and meal inspiration for every
            occasion.
          </p>
          <Link
            href="/recipes"
            className="inline-block bg-white text-red-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Explore Recipes
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Delicious Food"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
