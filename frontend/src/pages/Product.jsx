import { Add, Remove } from "@material-ui/icons";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";
import { publicRequest } from "../axiosRequest";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ width: "80%", height: "70vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 60px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 250;
`;
const Description = styled.p`
  margin: 25px 0px;
`;
const Price = styled.span`
  font-weight: 150;
  font-size: 35px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 250;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 4px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "92%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 750;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 7px;
`;
const Button = styled.button`
  font-weight: 550;
  padding: 15px;
  border: 3px solid red;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: #fff7f7;
  }
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + productId);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title> {product.title} </Title>
          <Description>{product.desc}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Ngjyra:</FilterTitle>
              {product.color?.map((c) => {
                return (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                );
              })}
            </Filter>
            <Filter>
              <FilterTitle>Madhesia</FilterTitle>
              <FilterSize>
                {product.size?.map((s) => {
                  return (
                    <FilterSizeOption
                      key={s}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {s}
                    </FilterSizeOption>
                  );
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              />
              <Amount>{quantity}</Amount>
              <Add onClick={() => setQuantity(quantity + 1)} />
            </AmountContainer>
            <Button onClick={handleClick}>Shto ne shporte</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
