'use client';
import DataCard from '@/components/DataCard';
import React, { useEffect, useState } from 'react';





const Menu = () => {

    const [data, setData] = useState([]);
    console.log(data);
    

    useEffect(() => {
        fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`)
        .then(response => response.json())
        .then(data => setData(data.foods))
    }, []);
    return (
        <div className='grid grid-cols-12 mt-15 p-6 gap-5'>
            <div className='col-span-9 '>
 <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {data.map(item => ((<DataCard key={item.id} item={item}></DataCard>)))}
            </div>
            </div>

            <div className='col-span-3 p-6 border-2 rounded-2xl '>
                <h2 className='font-bold text-[30px]'>Add To Cart</h2>
            </div>
           
            
        </div>
    );
};

export default Menu;