import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [category]);

  let filteredProducts = products;
  if (category) {
    filteredProducts = products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      )
    );
  }

  if (sort === "newest") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.createdAt - b.createdAt);
  } else if (sort === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
