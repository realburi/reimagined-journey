import React from "react";
import styled from "styled-components";
import man from "../img/man.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    opacity: 85%;
  }
  &:active {
    transform: translateY(1.5px) translateX(1.5px);
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Title</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam
          ducimus quos provident cumque, est impedit aut culpa eaque eveniet.
          Sit provident nobis iure ullam quaerat perspiciatis vel minima!
          Provident.
        </Description>
        <Info>
          <Button
            onClick={() => {
              console.log("info button clicked!");
            }}
          >
            BUTTON
          </Button>
          <Contact>
            <Phone>Call Us (976) 8050 - 1464</Phone>
            <ContactText>Contact text will be provided</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={man}></Image>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
}

export default Intro;
