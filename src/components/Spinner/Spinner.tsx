import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps } from "../Svg";

const rotate = keyframes`
  0% {
    transform: scale(1.0);
  }
  25% {
    transform: scale(2.0);
  }
  50% {
    transform: scale(3.0);
  }
  75% {
    transform: scale(2.0);
  }
  100% {
    transform: scale(1.0);
  }
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="/images/viva/loader.png" />
    </Svg>
  );
};

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
