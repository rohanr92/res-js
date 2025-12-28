import React from "react";
import Image from "next/image";
import Link from "next/link";

const DataCard = ({ item }) => {
  const { id, title, foodImg, price, category } = item;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={foodImg}
          alt={title}
          className="object-cover"
          fill
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-sm text-gray-500">{category}</span>

        <h3 className="text-lg font-semibold mt-1 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-green-600">
            ৳{price}
          </p>

          <div className="flex gap-2">
            {/* View Details */}
            <Link href={`/menu/${id}`}>
              <button className="px-3 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                View Details
              </button>
            </Link>

            {/* Add to Cart */}
            <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
