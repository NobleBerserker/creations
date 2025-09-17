"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";
import Link from "next/link";


export default function ProductCarousel({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="py-4"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Link 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            href={product.href}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={38}
              className="object-center"
              priority
            />
            <h3 className="text-center mt-2 mb-8 font-medium">{product.name}</h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}