import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ categoryName, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categoryName
            ? `http://localhost:5000/products?category=${categoryName}`
            : "http://localhost:5000/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [categoryName]);

  useEffect(() => {
    categoryName &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [categoryName, filters, products]);

  useEffect(() => {
    if (sort === "Me te rejat")
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    else if (sort === "Me te lirat")
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    else
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
  }, [sort]);

  return (
    <Container>
      {categoryName
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
