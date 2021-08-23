import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  &:hover {
    opacity: 80%;
  }
  cursor: pointer;
`;

const Button = styled.button`
  background-color: crimson;
  border: 2px solid white;
  font-weight: bold;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    opacity: 85%;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Logo</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>button</Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
