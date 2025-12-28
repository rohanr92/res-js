'use client';
import DataCard from '@/components/DataCard';
import DataCardSkeleton from '@/components/DataCardSkeleton';
import React, { useEffect, useState } from 'react';





const Menu = () => {

    const [data, setData] = useState([]);
    console.log(data);
    const [loading, setLoading] = useState(true);
    
useEffect(() => {
   fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`, {
    cache: "force-cache"
   })
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
        setData(data.foods);
        setLoading(false);
      }, 2000);
    });
}, []);

{loading
  ? [...Array(12)].map((_, i) => <DataCardSkeleton key={i} />)
  : data.map(item => <DataCard key={item.id} item={item} />)
}
    return (
        <div className='grid grid-cols-12 mt-15 p-6 gap-5'>
            <div className='col-span-9 '>
 <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
               {loading
            ? [...Array(12)].map((_, i) => (
                <DataCardSkeleton key={i} />
              ))
            : data.map(item => (
                <DataCard key={item.id} item={item} />
              ))}
            </div>
            </div>

            <div className='col-span-3 p-6 border-2 rounded-2xl'>
                <h2 className='font-bold text-[30px]'>Add To Cart</h2>
            </div>
           
            
        </div>
    );
};

export default Menu;