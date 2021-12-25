import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
