import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slice";

const Recipe = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, image, tags, rating, reviewCount, cuisine } = item;
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.find((cartItem) => cartItem.id === id);

  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Recipe Image */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-3xl"
        />
        <div className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-sm font-semibold shadow-md">
          {cuisine}
        </div>
      </div>

      {/* Recipe Details */}
      <div className="p-5 flex flex-col grow">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-300">
          {name}
        </h2>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-500 font-semibold mr-2">
            ⭐ {rating}
          </span>
          <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-gray-800 px-3 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {isInCart ? (
            <button
              onClick={() => dispatch(removeItem(item))}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md transition transform hover:scale-105"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => dispatch(addItem(item))}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md transition transform hover:scale-105"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
