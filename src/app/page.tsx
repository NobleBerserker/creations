import Image from "next/image";
import Link from "next/link";
import ProductCarousel from '@/components/UI/ProductCarousel';
import products from "../data/products.json";

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const carouselItems = shuffleArray(products).slice(0,10);
const featuredItems = products.filter(p => p.featured);
const featured = shuffleArray(featuredItems).slice(0, 4);

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
          {featured.map(product => (
          <Link
            key={product.id}
            href={product.href}
            className="border bg-[#e1d9cc] px-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150} // adjust to make image look good
              className="object-contain"
            />
            <p className="text-center mt-2 font-medium">{product.name}</p>
          </Link>
        ))}
      </div>
      <h2 className="flex justify-center text-2xl font-bold mt-10">Browse our Store</h2>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-5xl">
          <ProductCarousel products={carouselItems}/>
        </div>
      </div>
    </div>
  );
}
