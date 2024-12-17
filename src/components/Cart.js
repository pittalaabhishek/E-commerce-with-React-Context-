import React from "react";
import { useCart } from "./CartContext";
import '../App.css';

const Cart = () => {
    const {cart, removeFromCart, getTotalPrice} = useCart();

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (<p className="empty-cart">Your Cart is Empty!!</p>) :
                (
                    <ul className="cart-list">
                        {cart.map(item => (
                            <li  className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                            <span className="cart-total">{item.name} - ${item.price} x {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>                            
                            </li>
                        ))}
                    </ul>
                )
            }
            <h3 className="cart-total">Total: {getTotalPrice().toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
        