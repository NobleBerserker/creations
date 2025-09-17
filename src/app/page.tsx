import Image from "next/image";
import Link from "next/link";
import ProductCarousel from '@/components/UI/ProductCarousel';

const products = [
  { id: 1, name: "First Item", image: "/products/Fall-Collection-2025.png", href: "/shop/first-item" },
  { id: 2, name: "Second Item", image: "/products/Fall-Collection-2025.png", href: "/shop/second-item" },
  { id: 3, name: "Third Item", image: "/products/Fall-Collection-2025.png", href: "/shop/third-item" },
  { id: 4, name: "Fourth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/fourth-item" },
  { id: 5, name: "Fifth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/fifth-item" },
  { id: 6, name: "Sixth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/sixth-item" },
  { id: 7, name: "Seventh Item", image: "/products/Fall-Collection-2025.png", href: "/shop/seventh-item" },
  { id: 8, name: "Eighth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/eighth-item" },
  { id: 9, name: "Ninth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/ninth-item" },
  { id: 10, name: "Tenth Item", image: "/products/Fall-Collection-2025.png", href: "/shop/tenth-item" },
];


export default function Home() {
  return (
    <div className="w-full font-sans min-h-screen p-0 mt-20">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 p-10 bg-[#e1d9cc]">
        <Image
          src="/products/Fall-Collection-2025.png"
          alt="Fall Collection 2025"
          width={270}
          height={38}
          priority
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            FALL COLLECTION 2025
          </h1>
          <Link
            href="/shop"
            className="p-3 px-6 bg-black text-white rounded cursor-pointer hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <h2 className="flex justify-center text-2xl font-bold mt-10">Featured Items</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-16 p10 mt-10">
          <Link
            href="/shop/first-item"
            className="border bg-[#e1d9cc] pl-4 pr-4"
          >
            <Image
              src="/products/Fall-Collection-2025.png"
              alt="First Item"
              width={150}
              height={38}
            />
          </Link>
        <Link
          href="/shop/second-item"
          className="border bg-[#e1d9cc] pl-4 pr-4"
        >
          <Image
            src="/products/Fall-Collection-2025.png"
            alt="Second Item"
            width={150}
            height={38}
          />
        </Link>
        <Link
          href="/shop/third-item"
          className="border bg-[#e1d9cc] pl-4 pr-4"
        >
          <Image
            src="/products/Fall-Collection-2025.png"
            alt="Third Item"
            width={150}
            height={38}
          />
        </Link>
        <Link
          href="/shop/fourth-item"
          className="border bg-[#e1d9cc] pl-4 pr-4"
        >
          <Image
            src="/products/Fall-Collection-2025.png"
            alt="Fourth Item"
            width={150}
            height={38}
          />
        </Link>
      </div>
      <h2 className="flex justify-center text-2xl font-bold mt-10">Browse our Store</h2>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-5xl">
          <ProductCarousel products={products}/>
        </div>
      </div>
    </div>
  );
}
