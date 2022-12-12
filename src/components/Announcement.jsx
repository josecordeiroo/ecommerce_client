import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
`

const Announcement = () => {
  return (
    <Container>Super promoção! Frete grátis em compras acima de R$50.</Container>
  )
}

export default Announcement