import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div``;

const ProductList = () => {
  return <Container>
    <Announcement/>
    <NavBar/>
    <Title>Testando</Title>
    <FilterContainer>
        <Filter>
            Filtro 1
        </Filter>
        <Filter>
            Filtro 2
        </Filter>
    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
  </Container>;
};

export default ProductList;
