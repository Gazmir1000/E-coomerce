import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #20a78f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const Announcements = () => {
  return (
    <Container>
      Super oferte!! Per Cdo blerje mbi 20 Euro transporti falas
    </Container>
  );
};

export default Announcements;
