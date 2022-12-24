import React from 'react'
import styled from 'styled-components'

import { Send } from '@material-ui/icons'

const Container = styled.div``
const Title = styled.h1``
const Desc = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``


function Newsletter() {
  return (
    <Container>
        <Title>Increva-se</Title>
        <Desc>Fique por dentro das nossas promoções</Desc>
        <InputContainer>
            <Input placeholder='Seu e-mail'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter