import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos/:categoria" element={<ProductList />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
