import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"

const Container = styled.div``;

const ProductList = () => {
  return <Container>
    <Announcement/>
    <NavBar/>
  </Container>;
};

export default ProductList;
