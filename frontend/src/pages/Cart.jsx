import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 350;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  width: 150px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 15px;
  padding: 15px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ProductAmountConteiner = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 25px;
  margin: 5px;
  ${mobile({ margin: "5px 20px" })}
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 350;
  ${mobile({ marginBottom: " 20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.6px solid lightgreen;
  border-radius: 7px;
  padding: 15px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  font-size: 25px;
  margin: 25px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "550"};
  font-size: ${(props) => props.type === "total" && "30px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 90%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>canta jote</Title>
        <Top>
          <TopButton>VAZHDO BLERJEN</TopButton>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">BLI PRODUKTIN TANI</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Title </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountConteiner>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountConteiner>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <Title>
              <SummaryTitle>Pershkrimi i orderave</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SUBTOTAL: </SummaryItemText>
                <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Transporti: </SummaryItemText>
                <SummaryItemPrice> 5.000LEKE</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Zbritje cmimi: </SummaryItemText>
                <SummaryItemPrice> -5.000LEKE</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total: </SummaryItemText>
                <SummaryItemPrice> $ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button>Checkout Now</Button>
            </Title>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
