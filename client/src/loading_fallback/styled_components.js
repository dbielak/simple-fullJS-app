import styled, { keyframes } from 'styled-components';

const dotsAnimation = keyframes`
 0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

export const LoadingDots = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div {
    width: 8px;
    height: 8px;
    background-color: #333;
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    animation: ${dotsAnimation} 1s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;
