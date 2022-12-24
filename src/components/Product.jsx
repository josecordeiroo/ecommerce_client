import React from 'react'
import styled from 'styled-components'

import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'

const Container = styled.div``

export const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product