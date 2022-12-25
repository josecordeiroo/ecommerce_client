import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      cart
      <Footer />
    </Container>
  );
};

export default Cart;
