"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'




const ProductCarousel = () => {
  const products = [
    { name: "Web Development", image: "/images/Web.jpeg" },
    { name: "AI/ML Developement", image: "/images/Ai.jpeg" },
    { name: "Data Analytics", image: "/images/Data.jpeg" },
    { name: "Mobile App Development", image: "/images/Mobile.jpeg" },
    { name: "Cyber Security", image: "/images/Pl.jpeg" },
    { name: "Blockchain Development", image: "/images/Block.jpeg" }
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 3) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that effect runs once after initial render

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  return (
    <div className="max-w-screen-xl mx-auto mt-2 p-2 rounded-lg">
      <h1 className="text-4xl font-bold mt-8 mb-6 text-center">Our Services</h1>
      <div className="w-full overflow-hidden relative mt-5 rounded-lg shadow-lg">
        <div className="carousel-root p-8 rounded-lg shadow-lg flex space-x-16 justify-center items-center">
          {visibleProducts.map((product, index) => (
            <div key={index} className="text-center hover:scale-105">
              <Image
                alt={product.name}
                src={product.image}
                width={236}
                height={236}
                className="w-56 h-56 object-cover rounded-full mb-2"
              />
              <div className="mt-6">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
