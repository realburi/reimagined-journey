import React from "react";
import styled from "styled-components";
import teach from "../img/teach.png";

const Container = styled.div`
  display: flex;
  width: 50%;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
`;

const Right = styled.div``;
display: flex;
//52-21
function Service() {
  return (
    <Container>
      <Left>
        <Image src={teach}> </Image>
      </Left>
      <Right></Right>
    </Container>
  );
}

export default Service;
