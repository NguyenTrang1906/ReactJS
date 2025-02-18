import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemIndex) => {
        setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
    };

    const [priceList, setPriceList] = useState([]);

    const addPrice = (price) => {
        setPriceList((prevPrice) => [...prevPrice, price]);
    };

    const removePrice = (index) => {
        const newPriceList = [...priceList];
        newPriceList.splice(index, 1);
        setPriceList(newPriceList);
    };

    const hanleChanged = (price, index) => {
        const newPriceList = [...priceList];
        newPriceList[index] = price;
        setPriceList(newPriceList);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, priceList, addPrice, removePrice, hanleChanged }}
        >
            {children}
        </CartContext.Provider>
    );
};
