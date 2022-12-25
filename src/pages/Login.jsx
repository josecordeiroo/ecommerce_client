import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1819482/pexels-photo-1819482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.p``

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Acessar sua conta</Title>
        <Form>
          <Input placeholder="Nome de usuário" />
          <Input placeholder="Senha" />          
          <Button>Entrar</Button>
          <Link>Não lembra sua senha?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login