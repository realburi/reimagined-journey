  import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 45% 100%);
  background-color: crimson;
  ${Shape}
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 65% 0, 100% 100%, 0 100%);
  background-color: wheat;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
  background-color: wheat;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
    </>
  );
}

export default App;
