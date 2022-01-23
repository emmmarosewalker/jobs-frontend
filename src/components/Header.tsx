import React from "react";
import styled from "styled-components";
import { Button } from "../design";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Button>Home</Button>
    </HeaderContainer>
  );
};

export default Header;
