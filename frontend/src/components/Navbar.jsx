import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Containor = styled.div`
  height: 60px;
  background-color: white;
  ${mobile({ height: "50px", textDecoration: "none" })}
`;
const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px", textDecoration: "none" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainor = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  text-decoration: none;
  ${mobile({ padding: "5px", marginRight: "5px" })}
`;

const Input = styled.input`
  border: none;
  text-decoration: none;
  ${mobile({ width: "50px", textDecoration: "none" })}
`;

const Centre = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center", textDecoration: "none" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Containor>
      <Wraper>
        <Left>
          <Language>ALB </Language>
          <SearchContainor>
            <Input placeholder="Kerko" />
            <Search style={{ color: "green", fontSize: 16 }} />
          </SearchContainor>
        </Left>
        <Centre>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>Sava Clothes</Logo>
          </Link>
        </Centre>
        <Right>
          <Link
            to="register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItems>Register</MenuItems>
          </Link>
          <Link to="login" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <MenuItems>SignIn</MenuItems>
          </Link>

          <Link to="/cart">
            <MenuItems>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wraper>
    </Containor>
  );
};

export default Navbar;
