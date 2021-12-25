import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #a1f2d8;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 350;
`;
const InputContainer = styled.div`
  width: 35%;
  height: 35px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightblue;
`;
const Input = styled.input`
  border: none;
  flex: 9;
  padding-left: 25px;
`;
const Button = styled.button`
  border: none;
  background-color: #d16464;
  color: white;
  flex: 1;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News letter</Title>
      <Description>Njoftimi i oferatave dhe sherbimeve te fundit</Description>
      <InputContainer>
        <Input placeholder="Enter your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
