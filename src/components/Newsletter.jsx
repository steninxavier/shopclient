import { SendOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  background-color: wheat;
  ${mobile({ height: "90vh" })}
`;
const Title = styled.h2`
  font-size: 70px;
  margin: 20px;
  ${mobile({ fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  margin: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Icon = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>
        If you want to know the product's updates and offers.Then subscribe
        here.
      </Desc>
      <Icon>
        <Input placeholder="Your email ID" />
        <Button>
          <SendOutlined />
        </Button>
      </Icon>
    </Container>
  );
}

export default NewsLetter;
