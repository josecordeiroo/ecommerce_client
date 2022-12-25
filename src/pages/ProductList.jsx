import React from "react";

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
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Camisetas</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos:</FilterText>
          <Select>
            <Option disabled selected>
              Cor
            </Option>
            <Option>Branco</Option>
            <Option>Preto</Option>
            <Option>Vermelho</Option>
            <Option>Azul</Option>
            <Option>Amarelo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanho
            </Option>
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
          <Select>
            <Option selected>Mais relevantes</Option>
            <Option>Lançamentos</Option>
            <Option>Preço (Maior)</Option>
            <Option>Preço (Menor)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
