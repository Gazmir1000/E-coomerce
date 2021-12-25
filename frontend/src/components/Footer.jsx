import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

const Centre = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h2`
  margin-bottom: 30px;
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
  margin-bottom: 12px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sava Clothes</Logo>
        <Description>
          Lorem ipsum dolor, si t amet consectetur adipisicing elit. Re
          pellendus mollitia in error iusto, magni explicabo provident quaerat
          at recusandae, fugit hic! Maiores odi ullam voluptatum aliquid
          suscipit, tempore ut laudantium?
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Centre>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man's Fashion</ListItem>
          <ListItem>Woman's Fashion</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Centre>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "15px" }} /> Rruga Ohri , Lagja 15 Durres
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "15px" }} /> +35569xxxxxxx
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "15px" }} />{" "}
          SAVA.clothes@email.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
