import styled, { keyframes } from "styled-components";

export const AnimationStyles = {
  slideAnimation: {
    display: "inline-block",
    transitionDuration: "1.5s",
    transform: "translate(10px, 10px)"
  },
  slideAnimationRunning: {
    transform: "translate(300px, 10px)"
  },
  fadeAnimation: {
    display: "inline-block",
    transitionDuration: "0.5s",
    transitionDelay: "0.5s",
    opacity: "0"
  },
  fadeAnimationRunning: {
    opacity: "1"
  }
};

export const FadeAnimation = comp => styled(comp)`
  display: inline-block;
  transition-duration: 0.5s;
  transition-delay: 0.5s;
  opacity: 0;
  ${props =>
    props.running &&
    `
    opacity: 1;
  `}
`;

const fadeInOutKeyframes = keyframes`
    0%   { background-color:red }
    50% { background-color:orange }
    100% { background-color:red }
`;

export const LoadingAnim = styled.div`
  animation: ${fadeInOutKeyframes} ${props => props.duration} ease-in-out
    infinite;
  border-radius: 40px;
  width: 20px;
  height: 20px;
`;

export const StateIndicators = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #eee;
  display: flex;
  flex-direction: row;

  div {
    padding: 6px 10px;
    margin-right: 4px;
    background-color: #aaa;
    border-radius: 4px;
    color: white;
  }
`;
