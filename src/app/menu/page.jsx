'use client';
import DataCard from '@/components/DataCard';
import DataCardSkeleton from '@/components/DataCardSkeleton';
import { CartContext } from '@/provider/CartProvider';
import React, { useContext, useEffect, useState } from 'react';

const Menu = () => {
  const { cart } = useContext(CartContext);
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Initial fetch
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random', {
        cache: 'force-cache',
      });
      const result = await res.json();
      setOriginalData(result.foods);
      setData(result.foods);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Handle search submit
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setData(originalData);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${searchTerm}`,
        { cache: 'no-store' }
      );
      const result = await res.json();
      setData(result.foods?.length ? result.foods : []);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Restore original data immediately when input is empty
    if (value.trim() === '') {
      setData(originalData);
    }
  };

  return (
    <div className="grid grid-cols-12 mt-15 p-6 gap-5">
      <div className="col-span-9">
        <div className="my-5">
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="submit"
              value="Search"
              className="px-8 py-3 bg-blue-600 cursor-pointer text-white font-bold rounded-lg"
            />
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? [...Array(12)].map((_, i) => <DataCardSkeleton key={i} />)
            : data.map((item) => <DataCard key={item.id} item={item} />)}
        </div>
      </div>

      <div className="col-span-3 p-6 border-2 rounded-2xl">
        <h2 className="font-bold text-[30px]">Cart</h2>
        <p className="mt-2 text-lg">
          Total Items: <span className="font-bold">{cart.length}</span>
        </p>

        <div className="mt-4 space-y-3">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{item.title}</span>
              <span>৳{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
