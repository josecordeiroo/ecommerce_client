import React from "react";
import styled from "styled-components";

import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZKCLOTHING.</Logo>
        <Desc>
          Nós somos uma marca alternativa com identidade, originalidade e
          qualidade, com referência no hardcore nacional, no universo da tattoo
          e lifestyle de atitude.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Início</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Feminina</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Lista de desejos</ListItem>
          <ListItem>Termos de Uso</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
