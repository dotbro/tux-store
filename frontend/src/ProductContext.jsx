import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(280);
    function Increase() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setPrice(280 * newQuantity);
    }

    function Decrease() {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setPrice(280 * newQuantity);
        }
    }
    function handleChange(e) {

        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        setPrice(280 * newQuantity);

    }

    return (
        <ProductContext.Provider value={{ quantity, setQuantity, price, setPrice }}>
            {children}
        </ProductContext.Provider>
    );
};
