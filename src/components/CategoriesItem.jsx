import styled from "styled-components";
import React from "react";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: 1px solid grey;
  padding: 12px;
  background-color: teal;
  color: grey;
  cursor: pointer;
  font-weight: 800;
  color: black;
  opacity: .8;
`;

function CategoriesItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
      </Info>
      </Link>
    </Container>
  );
}

export default CategoriesItem;
