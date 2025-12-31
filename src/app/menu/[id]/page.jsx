'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductDetailsCard from '@/components/ProductDetailsCard';






const MenuDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
      .then(res => res.json())
      .then(data => {setItem(data.details)

        if (data.details) {
          document.title = `${data.details.title} | MS Restaurants`;
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!item) return <p>Item not found.</p>;

  return <ProductDetailsCard item={item} />;
};

export default MenuDetails;
