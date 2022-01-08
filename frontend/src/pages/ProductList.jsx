import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 22px;
  font-weight: 550;
  margin-right: 15px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  height: 40px;
  margin-right: 15px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Me te rejat");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{categoryName}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Ngjyra</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Madhesia</Option>
            <Option>S (small)</Option>
            <Option>M (medium)</Option>
            <Option>L (large)</Option>
            <Option>X L(extra large)</Option>
            <Option>XXL (xx large)</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Me te rejat</Option>
            <Option value="Me te shtrenjtat">Me te shtrenjtat</Option>
            <Option value="Me te lirat">Me te lirat</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products categoryName={categoryName} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
