import styled from "styled-components";

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 100px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 8px;
`;
const Argreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 17px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Conatiner>
      <Wrapper>
        <Title>Krijo llogari</Title>
        <Form>
          <Input placeholder="Emri" />
          <Input placeholder="Mbiemri" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Argreement>
            Une pjatohem me <b>Privacy Policy</b>
          </Argreement>
        </Form>
        <Button>Create</Button>
      </Wrapper>
    </Conatiner>
  );
};

export default Register;
