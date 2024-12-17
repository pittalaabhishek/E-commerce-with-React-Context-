import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
    const {cart, removeFromCart, getTotalPrice} = useCart();

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (<p>Your Cart is Empty!!</p>) :
                (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                            <span>{item.name} - ${item.price} x {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>                            
                            </li>
                        ))}
                    </ul>
                )
            }
            <h3>Total: {getTotalPrice().toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
        