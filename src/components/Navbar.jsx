import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
const Containor = styled.div`
  height: 60px;
  background-color: white;
  ${mobile({ height: "50px" })}
`;
const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Centre = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;

const Navbar = () => {
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
          <Logo>Sava Clothes</Logo>
        </Centre>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>SignIn</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
        </Right>
      </Wraper>
    </Containor>
  );
};

export default Navbar;
