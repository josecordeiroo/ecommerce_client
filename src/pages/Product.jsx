import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.span``;
const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://d3ugyf2ht6aenh.cloudfront.net/stores/119/911/products/camiseta-zoombies-from-space-frente1-b08378aae324a563c416333529530407-640-0.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Camiseta - Zoombies Space</Title>
          <Desc>
            Estampa em Silk na parte frontal. Detalhe em silk nas costas.
            Confeccionada com linha 100% poliéster (maior durabilidade na
            costura). Com reforço de ombro a ombro com viés (a cor do viés pode
            alterar de acordo com as reposições do produto). Composição: Malha
            100% Algodão, fio 30.1 penteada. Cor predominante: Preto.
          </Desc>
          <Price>R$ 99.90</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
