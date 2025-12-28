'use client';

import React, { createContext, useState } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const cartData = {
        cart,
        setCart,
    }
    return <CartContext.Provider value={cartData}>
        {children}
    </CartContext.Provider>;
};

export default CartProvider;