"use client"
import { useParams } from "next/navigation";
import products from "../../../data/products.json";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = products.find(p => p.href.includes(slug));
  const { addToCart } = useCart();

  if (!product) 
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="font-bold border border-gray-400 p-6 text-xl rounded bg-gray-100">
        Product not found
      </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center w-full font-sans min-h-screen p-0 mt-24">

      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={38}
          className="object-contain"
        />
      </div>

      {/* Content on the right */}
      <div className="flex flex-col justify-center ml-10">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.category}</p>
        <p>{product.price}€</p>
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}