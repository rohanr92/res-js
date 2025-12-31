'use client';
import React from 'react';

const Form = ({ data }) => {
    const {name, price} = data;

    const handleUpdate = async (e) => {
        e.preventDefault();
        // const form = e.target;
        const name = e.target.name.value;
        const price = e.target.price.value;

        console.log(name, price);

        const updatedData = { name, price: Number(price) };

        const response = await fetch(`http://localhost:3000/api/food/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        const result = await response.json();
        console.log(result);
    
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-center mt-5">
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={data.name}
          className="border-2 ring-2"
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          required
          name="price"
          defaultValue={data.price}
          className="border-2 ring-2"
        />

        <button
          type="submit"
          className="btn bg-red-200 p-4 cursor-pointer"
        >
          Update
        </button>
      </form>
      </h1>
        </div>
    );
};

export default Form;