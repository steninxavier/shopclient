import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: teal;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
function Informations() {
  return <Container>You will get an offer with all Checkouts.</Container>;
}

export default Informations;
