import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearAllItem, removeItem } from "../../redux/slice";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(cartSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItem());
    alert("✅ Order Placed Successfully!");
    navigate("/");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.userId * (item.quantity || 1),
    0
  );
  //   const total = cartItems.reduce(
  //     (sum, item) => sum + item.price * (item.quantity || 1),
  //     0
  //   ); amar ei json price nai dekhe user id number ta price hisebe consider korechi

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Your Cart Items</h2>
      <span className="text-gray-600 mb-4 block">
        ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
      </span>

      {cartSelector.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white shadow rounded-lg p-4"
            >
              {/* Product Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">{item.cuisine}</p>
                </div>
              </div>

              {/* Quantity & Price */}
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <label className="font-medium">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                    className="w-16 text-center border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <span className="font-semibold text-lg">
                  ${(item.userId * (item.quantity || 1)).toFixed(2)}
                  {/* ${(item.price * (item.quantity || 1)).toFixed(2)} */}
                </span>
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center text-xl font-bold p-4 bg-gray-100 rounded">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Place Order Button */}
          <div className="text-right">
            <button
              onClick={handlePlaceOrder}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartList;
