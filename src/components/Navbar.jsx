import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Searchinput = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  ${mobile({marginLeft: "20px" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menuitems = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 7px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
${mobile({ fontSize: "24px" })}
`;



function Navbar() {
  const quantity = useSelector(state=> state.cart.quantity);
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchinput>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "gray", fontSize: 15 }} />
          </Searchinput>
        </Left>
        <Center>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo>SHOPY</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none' }}>
          <Menuitems>REGISTER</Menuitems></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
          <Menuitems>SIGN IN</Menuitems></Link>
          <Link to="/cart">
          <Menuitems>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingBasketOutlined />
            </Badge>
          </Menuitems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
