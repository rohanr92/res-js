'use client'
import React from 'react';


const Post = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;

        const data = { name, price: Number(price) };

        const response = await fetch('http://localhost:3000/api/food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);

        if(result.message == 'Food added'){
            alert('Food added successfully');
            form.reset();
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-1/3 mx-auto mt-10'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className='border-2 ring-2' />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" required name="price" className='border-2 ring-2' />

                <button type="submit" className='btn bg-red-200 p-4 cursor-pointer'>Submit</button>
            </form>
            
        </div>
    );
};

export default Post;