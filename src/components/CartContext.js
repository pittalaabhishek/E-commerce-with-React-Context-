import React, {useContext, createContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (Item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === Item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                cartItem.id === Item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                );
            } else {
                return [...prevCart, { ...Item, quantity: 1 }];
            }
    })       
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) =>
          prevCart
            .map((cartItem) =>
              cartItem.id === itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
            .filter((cartItem) => cartItem.quantity > 0)
        );
      };

    const getTotalPrice = () => {
        return cart.reduce((Total, item) => Total+item.price*item.quantity, 0);
    }

    return (
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
}