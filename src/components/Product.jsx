import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

export const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                
            </Icon>
        </Info>
    </Container>
  )
}

export default Product