import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div data-theme="autumn">
      <BrowserRouter>
      <ToastContainer theme='light'/>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/search" element=<Home /> />
          <Route path="/product/:id" element=<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/> />
          <Route path="/cart" element=<Cart cartItems={cartItems} setCartItems={setCartItems}/> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
