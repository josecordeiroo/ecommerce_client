import React from "react";
import { useState } from "react";

import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { mobile } from "../responsive";

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Camisetas</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option defaultValue>Cor</Option>
            <Option value="white">Branco</Option>
            <Option value="black">Preto</Option>
            <Option value="gray">Cinza</Option>
            <Option value="red">Vermelho</Option>
            <Option value="blue">Azul</Option>
            <Option value="yellow">Amarelo</Option>
            <Option value="green">Verde</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option defaultValue>Tamanho</Option>
            <Option>PP</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Classificar produtos:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" defaultValue>Lançamentos</Option>
            <Option value="asc">Preço (Maior)</Option>
            <Option value="desc">Preço (Menor)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
