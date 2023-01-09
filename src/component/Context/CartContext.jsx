import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]); // inicia vacio un Array para el carrito

    //anadir item
    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } 

        else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    //remover item
    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id);
        setCart(products);
    }

    //carrito vacio
    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(x => x.id === id); //funcion "si el producto existe o no"
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }    



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;