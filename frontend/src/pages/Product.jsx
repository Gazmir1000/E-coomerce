import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

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
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" />
        </ImageContainer>
        <InfoContainer>
          <Title> Bluze </Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            non deserunt, modi sint, eligendi nam, inventore enim tempore
            exercitationem nemo veritatis ducimus? Voluptatem dolor animi sequi
            culpa eius perferendis ab?
          </Description>
          <Price>20 Euro</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Ngjyra:</FilterTitle>
              <FilterColor color="red" />
              <FilterColor color="black" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Madhesia</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Shto ne shporte</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
