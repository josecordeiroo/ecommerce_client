import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";

const App = () => {
  const user = false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmado" element={<Success /> } />
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produtos/:categoria" element={<ProductList />} />
          <Route path="/produto/:id" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route
            path="/entrar"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/cadastrar"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
