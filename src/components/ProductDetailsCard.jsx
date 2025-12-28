import React from "react";
import Image from "next/image";
import Button from "./button/Button";

const ProductDetailsCard = ({ item }) => {
  const { title, foodImg, category, price } = item;

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <div className="relative w-full h-80 sm:h-96 md:h-[28rem]">
        <Image
          src={foodImg}
          alt={title}
          className="object-cover"
          fill
        />
        <span className="absolute top-4 left-4 bg-yellow-400 text-white font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-600 mb-6">
          Delicious {category.toLowerCase()} dish made with fresh ingredients. Perfect for a healthy meal or cozy dinner.
        </p>

        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <span className="text-3xl font-extrabold text-green-600">
            ৳{price}
          </span>

          <div className="flex gap-4">
            <Button>Add To Cart</Button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl shadow-md hover:bg-blue-50 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
