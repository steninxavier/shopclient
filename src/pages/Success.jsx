import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;


const Center= styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 200px;
background-color: teal;
`;
const ThankSection=styled.h5`
display: flex;
align-items: center;
justify-content: center;
color: red;
padding-left: 10px;
`;


const Success = () => {
    return (
        <Container>
            <Navbar/>
        <Center>
            <h1>Successfully Purchased</h1> <br></br>
            <ThankSection>Thank You</ThankSection>
            </Center>
            <Footer/>
            </Container>
    )
}

export default Success
