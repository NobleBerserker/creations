"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import ShoppingCart from "@/components/layout/ShoppingCart";

export default function CartModal() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="relative">
          <ShoppingCart size={28} className="text-charcoal-600 hover:text-charcoal-700" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 " />
        <Dialog.Content className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 flex flex-col mt-[80px]">
          <Dialog.Title className="text-xl font-bold mb-4">Your Cart</Dialog.Title>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="flex-1 overflow-y-auto space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={item.image} alt={item.name} width={50} height={50} />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price}
                      </p>
                      <div className="flex">
		                  <button 
		                    onClick={() => removeFromCart(item.id)}
		                    className="px-2 cursor-pointer">
		                    -
		                  </button>
		                  <p className="border pl-1 pr-1">{item.quantity}</p>
		                  <button
		                    onClick={() => addToCart(item)} 
		                    className="px-2 cursor-pointer">
		                    +
		                  </button>
		                </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div className="mt-4">
              <button
                onClick={clearCart}
                className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          )}

          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
