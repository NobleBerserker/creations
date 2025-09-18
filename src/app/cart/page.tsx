"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-20 font-bold">Your cart is empty 🛒</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={60} height={60} />
              <div>
                <p className="font-medium">{item.name}</p>
                <p>
                  ${item.price}
                </p>
                <div className="flex">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="pl-2 pr-2 cursor-pointer">
                    -
                  </button>
                  <p className="border pl-1 pr-1">{item.quantity}</p>
                  <button
                    onClick={() => addToCart(item)} 
                    className="pl-2 pr-2 cursor-pointer">
                    +
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCart}
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Clear Cart
      </button>
    </div>
  );
}