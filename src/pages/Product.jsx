import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Filter } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  margin-top: -60px;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

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
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Tamanho</FilterTitle>
              <FilterSize>
                <FilterSizeOption>PP</FilterSizeOption>
                <FilterSizeOption>P</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>G</FilterSizeOption>
                <FilterSizeOption>GG</FilterSizeOption>
                <FilterSizeOption>XGG</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
