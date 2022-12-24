import React from "react";
import styled from "styled-components";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

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

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
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

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 40%;
`

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
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} />
          Rua Miguel Sutil, 288, Itaim Bibi, São Paulo/SP
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} />
          11 5542-8455
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}} />
          contato@zkclothing.com.br
        </ContactItem>
        <Payment style={{marginRight: "10px"}} src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
