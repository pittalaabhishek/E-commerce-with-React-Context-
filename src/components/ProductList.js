import React, {useState,useEffect} from "react";
import { useCart } from "./CartContext";
import '../App.css';

// const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//   ];



const ProductList = () => {
    const {addToCart} = useCart();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
             setProducts(prevItems => [...prevItems, ...data]);
          })
          .catch((error) => {
            setError(error.message);
          })
      }, []);
      if (error) return <div>Error: {error}</div>;

    return (
        <div className="product-container">
            <h1>Products</h1>
            <ul>
                {products.map((item) => (
                    <li value={item.id}>
                        <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                        <span className="cart-item-name">{item.title}</span>
                        <span className="cart-item-price">${item.price}</span>
                        <button className="add-button" onClick={()=>addToCart(item)}>Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;