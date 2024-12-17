import React from "react";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";


function App() {
  return (
    <CartProvider>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Router>
  </CartProvider>
  );
}

export default App;
