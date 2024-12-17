import React, {useState,useEffect} from "react";
import { useCart } from "./CartContext";

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
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((item) => (
                    <li value={item.id}>
                        <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
                        <span>{item.title}</span>
                        <button onClick={()=>addToCart(item)}>Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;