import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=> props.type === "filled" && "none"};
  background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
  color: ${props=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Seu carrinho</Title>
        <Top>
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          <TopTexts>
            <TopText>Seu carrinho (2)</TopText>
            <TopText>Lista de desejos</TopText>
          </TopTexts>
          <TopButton type="filled">FINALIZAR COMPRA</TopButton>
        </Top>
        <Bottom>
            <Info>Informações</Info>
            <summary>Resumo do pedido</summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
