import Link from 'next/link';
import React from 'react';

const postShow = async () => {

    const response = await fetch('http://localhost:3000/api/food');
    const data = await response.json();

    return data.foods;
}

const PostView = async () => {

    const data = await postShow();

    console.log(data);
    


    return (
        <div>
            <div className='flex  p-5 gap-5'>
            {data.map(item => (
                <div key={item.id} className='border-[1px] border-gray-400 p-5'>
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <Link   href={`/update/${item.id}`} type="button" className='bg-yellow-500 p-2 rounded' >update</Link>
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default PostView;