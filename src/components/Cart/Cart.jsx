import React from "react";
import { ShoppingCart } from "lucide-react"; // npm i lucide-react
import { useSelector } from "react-redux";
import { Link } from "react-router";
const Cart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  //   console.log(selector);
  return (
    <Link to="cartList">
      <div>
        {/* Cart Icon */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
          </button>

          {/* Static Cart Count Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
