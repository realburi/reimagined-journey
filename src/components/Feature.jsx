import React from "react";
import styled from "styled-components";
import Ugudei from "../img/ugudei.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    opacity: 85%;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 50%;
`;

function Feature() {
  return (
    <Container>
      <Left>
        <Image src={Ugudei}></Image>
      </Left>
      <Right>
        <Title>
          <b>Ogudei</b> Khan
          <br />
          <b>Mongol</b> Emperor
        </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
          nulla magnam amet fuga!
        </SubTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          ut culpa fuga, dicta consequatur a placeat sunt sed, atque sapiente
          quasi! Labore rem iusto soluta amet nesciunt ut, quod corrupti!
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Feature;
