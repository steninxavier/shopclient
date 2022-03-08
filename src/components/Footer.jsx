import { ContactPhoneOutlined, EmailOutlined, Facebook, Instagram, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import { mobile } from '../Responsive';


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-content: center;
justify-content: center;
margin-left: 20px;
`;
const Logo= styled.h1`
font-size: 45px;
font-weight: 400;
padding-bottom: 15px;
`;
const Desc = styled.p`
padding-bottom: 20px;
`;
const SocialIcons= styled.div`
display: flex;
flex-direction: row;
`;
const Social= styled.div`
color: white;
background-color: #${(props)=>props.color};
display: flex;
align-content: center;
justify-content: space-between;
border-radius: 40%;
margin-right: 10px;
cursor: pointer;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
`;
const Title = styled.h3`
margin-bottom: 25px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem= styled.div`
display: flex;
padding-bottom: 20px;
`;
const PaymentImage= styled.img`
height: 130px;
width: 200px ;
`;

function Footer() {
  return (
    <Container>
     <Left>
        <Logo>
          SHOPY
        </Logo>
        <Desc>
        A good product description should focus on the product’s features and benefits. Obviously, the features are a bit more clear cut. The benefits will require a bit more creativity and understanding of your target audience.
        </Desc>
        <SocialIcons>
         <Social color="3b5998">
        <Facebook/>
         </Social>
         <Social color="55acee">
        <Twitter/>
         </Social>
         <Social color="3f729b">
         <Instagram/>
         </Social>
         <Social color="bd081c">
           <Pinterest/>
         </Social>
        </SocialIcons>
     </Left>
     <Center>
        <Title>Useful Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Offers</ListItem>
          <ListItem>Terms</ListItem>
        </List>
     </Center>
     <Right>
   <Title>
     Contact
   </Title>
   <ContactItem><LocationOnOutlined style={{paddingRight:"10px"}}/>
  Berlin Germany
   </ContactItem>
   <ContactItem><ContactPhoneOutlined style={{paddingRight:"10px"}}/>
     +4915906477551
   </ContactItem>
   <ContactItem><EmailOutlined style={{paddingRight:"10px"}}/>
     contact@shopy.com
   </ContactItem>
   <PaymentImage src="https://wwv.sartorius-werkzeuge.de/uploads/tx_templavoila/PayPal_Kreditkarten.jpg"/>
     </Right>
    </Container>
  )
}

export default Footer
