import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1819482/pexels-photo-1819482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
`;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Criar uma conta</Title>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Sobrenome" />
          <Input placeholder="Endereço de e-mail" />
          <Input placeholder="Nome de usuário" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirme sua senha" />
          <Agreement>
            Para criar uma conta, eu aceito ceder meus dados de navegação como
            consentido no <b>TERMOS DE USO</b>
          </Agreement>
          <Button>Criar conta agora</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
