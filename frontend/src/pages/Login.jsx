import styled from "styled-components";
import { mobile } from "../responsive";

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 100px;
  width: 30%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 8px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 17px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>Krijo llogari</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Fjalkalimi" />
          <Button>HYR!</Button>
          <Link>Nuk mbaj mend fjalekalimin.</Link>
          <Link>Krijo llogari te re</Link>
        </Form>
      </Wrapper>
    </Conatiner>
  );
};

export default Login;
