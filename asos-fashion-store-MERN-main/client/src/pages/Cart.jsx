import React, { useState } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([])
    
    
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 8.00; // 8.00 is the delivery fee
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">My Bag</h1>
      <div className="grid grid-cols-2 gap-5">
        {/* Cart items */}
        <div className="bg-white shadow rounded p-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg"
              />
              <div className="ml-4">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-600">
                  Price: £{item.price.toFixed(2)}
                </p>
                <div className="flex items-center">
                  <span className="mr-2">Quantity:</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center"
                  />
                  {item.inStock ? (
                    <span className="ml-2 text-green-500">In Stock</span>
                  ) : (
                    <span className="ml-2 text-red-500">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Checkout details */}
        <div className="bg-white shadow rounded p-5">
          <h2 className="text-lg font-bold mb-5">Checkout</h2>
          <div className="mb-4">
            <p className="font-bold">Subtotal:</p>
            <p>£{calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Delivery:</p>
            <p>£8.00</p>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="mb-4">
            <p className="font-bold text-lg">Total:</p>
            <p className="text-lg font-bold">£{calculateTotal().toFixed(2)}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;